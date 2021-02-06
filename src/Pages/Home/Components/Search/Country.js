import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { SearchUnit } from './styles'

const CountrySearch = ({ jobsData, selected, disabled }) => {

    const allCountries = Object.values(jobsData.jobs).map(posting => (
        Object.values(posting.cities).map(city => ({
            key: city.country.id,
            text: city.country.name,
            value: city.country.slug
        }))       
    ))
    const allCountryArr = []
    allCountries.forEach(entry => (
        entry.forEach(element => (allCountryArr.push(element)))
    ))

    const seen = Object.create(null)
    const uniqueCountries = allCountryArr.filter(o => {
        var key = ['key', 'text', 'value'].map(k => o[k]).join(' ');
        if (!seen[key]) {
            seen[key] = true
            return true
        }
    }) 

    return (
        <SearchUnit>
            {disabled ? 
            <Dropdown 
                placeholder="Countries"
                clearable
                fluid
                search
                selection
                options={ uniqueCountries }
                onChange={ selected }
                disabled
            />
            :
            <Dropdown 
                placeholder="Countries"
                clearable
                fluid
                search
                selection
                options={ uniqueCountries }
                onChange={ selected }
            />}
        </SearchUnit>
    )
}

export default CountrySearch