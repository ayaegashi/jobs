import React, { useState, useEffect } from 'react'
import { useQuery, useLazyQuery } from '@apollo/client'
import { ALL_JOBS, SEARCH_BY_CITY, SEARCH_BY_COUNTRY } from './graphql'
import List from './Components/List'
import CitySearch from './Components/Search/City'
import CountrySearch from './Components/Search/Country'
import { Container, SearchBars } from './styles'


const Home = () => {
    const [searchResults, setSearchResults] = useState([])
    const [countryDisabled, setCountryDisabled] = useState(false)
    const [cityDisabled, setCityDisabled] = useState(false)
    const [countryslug, setCountryslug] =useState()

    const { data: allJobsData, loading, error } = useQuery(ALL_JOBS)

    if (allJobsData) {
        console.log(allJobsData)
    }

    const [searchByCity, { data: searchByCityData, loading: citySearchLoading, error: citySearchError }] = useLazyQuery(SEARCH_BY_CITY,{
        onCompleted:() => {
            console.log(searchByCityData)
            setSearchResults(searchByCityData.city.jobs)
        }
    })

    const [searchByCountry, { data: searchByCountryData, loading: countrySearchLoading, error: countrySearchError }] = useLazyQuery(SEARCH_BY_COUNTRY,{
        onCompleted:() => {
            console.log(searchByCountryData)
            setSearchResults(searchByCountryData.country.jobs)
        }
    })

    const selected = (e, {value}) => {
        if (!value) {
            setSearchResults([])
            setCountryDisabled(false)
        } else {
            setCountryDisabled(true)
        }
        console.log(value)

        searchByCity({
            variables: {
                citySlugInput: {
                    slug: value
                }
            }
        })
    }

    const countrySelected = (e, {value}) => {
        if (!value) {
            setCountryslug(undefined)
            setCityDisabled(false)
        } else {
            setCountryslug(value)
            setCityDisabled(true)
        }
        console.log(value)
    }

    if (error) return <p>error</p>


    return (
        <Container>
            <h1>Job Search</h1>
            {loading ? 
            <p>Can't search yet</p> 
            : 
            <SearchBars>
            <CitySearch jobsData={ allJobsData } selected={ selected } disabled={ cityDisabled } />
            <CountrySearch jobsData={ allJobsData } selected={ countrySelected } disabled={ countryDisabled } />
            </SearchBars>}

            {searchResults.length !== 0 ?
            <List jobsData={ searchResults } loading={ citySearchLoading } error={ error } />
            : (loading 
                ? <p>loading...</p> 
                :
                <List jobsData={ allJobsData.jobs } loading={ loading } error={ error } countryslug={ countryslug } />)}
        </Container>
    )
}

export default Home