import React from 'react'
import ListItem from './ListItem'
import { StyledHeaderRow, StyledTable, StyledTableHeader, TableBody, TableHead } from './styles'

const List = ({ jobsData, loading, error, countryslug }) => {

    if (error) return <p>error</p>
    // if (jobsData) {
    //     console.log(jobsData.jobs)
    // }

    // if (jobsData) {
    //     console.log(jobsData.jobs)
    //     Object.values(jobsData.jobs).map(posting => (
    //         Object.values(posting.cities).map(city => (
    //             console.log(city)
    //         ))
    //     ))
    // }

    //console.log("List component, jobsData is", jobsData)

    return (
        <>
        {loading ? 
        <div>data loading...</div>
        : 
        <StyledTable>
            <TableHead>
            <StyledHeaderRow>
                <StyledTableHeader>Role</StyledTableHeader>
                <StyledTableHeader>Company</StyledTableHeader>
                <StyledTableHeader>Location</StyledTableHeader>
                <StyledTableHeader>Date Posted</StyledTableHeader>
            </StyledHeaderRow>
            </TableHead>
            <TableBody>
            { Object.values(jobsData).map(posting => (
                <ListItem title={ posting.title} company={ posting.company.name } cities={posting.cities} datePosted={ posting.postedAt } cslug={ posting.company.slug } jslug={ posting.slug } countryslug={ countryslug } />
            )) }
            </TableBody>
        </StyledTable>}
        </>
    )
}

export default List