import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { SearchUnit } from './styles'

const CitySearch = ({ jobsData, selected, disabled }) => {

    const allCities = Object.values(jobsData.jobs).map(posting => (
        Object.values(posting.cities).map(city => ({
            key: city.id,
            text: city.name + ", " + city.country.name,
            value: city.slug
        }))       
    ))
    const allCityArr = []
    allCities.forEach(entry => (
        entry.forEach(element => (allCityArr.push(element)))
    ))

    const seen = Object.create(null)
    const uniqueCities = allCityArr.filter(o => {
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
                placeholder="Cities"
                clearable
                fluid
                search
                selection
                options={ uniqueCities }
                onChange={ selected }
                disabled
            />
            :
            <Dropdown 
                placeholder="Cities"
                clearable
                fluid
                search
                selection
                options={ uniqueCities }
                onChange={ selected }
            />}
        </SearchUnit>
    )
}

export default CitySearch