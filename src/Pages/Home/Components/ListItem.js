import React from 'react'
import { StyledRow, Button } from './styles'
import { useHistory } from 'react-router-dom'

const ListItem = ({title, company, cities, datePosted, cslug, jslug, countryslug }) => {
    const history = useHistory()

    const getJobPosting = (jslug, cslug) => {
        history.push(`/job/${ cslug }/${ jslug }`)
    }

    return (
        <>
        { countryslug ? 
        Object.values(cities).map(function(city) {
            if (city.country.slug === countryslug) {
                return (
                    <tr>
                        <StyledRow><Button onClick={() => getJobPosting(jslug, cslug)} >{ title }</Button></StyledRow>
                        <StyledRow>{ company }</StyledRow>
                        <StyledRow>{ <div>{ city.name }, { city.country.name }</div> }</StyledRow>
                        <StyledRow>{ datePosted.slice(0,10) }</StyledRow>
                    </tr>
                )
            }
        })
        :
        <tr>
            <StyledRow><Button onClick={() => getJobPosting(jslug, cslug)} >{ title }</Button></StyledRow>
            <StyledRow>{ company }</StyledRow>
            <StyledRow>{ Object.values(cities).map(city => (
                <div>{ city.name }, { city.country.name }</div>
            ))}</StyledRow>
            <StyledRow>{ datePosted.slice(0,10) }</StyledRow>
        </tr>}
        </>
    )
}

export default ListItem