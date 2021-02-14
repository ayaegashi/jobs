import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_RECIPE } from './graphql'
import { Container, PageOrganizer, HalfPage, DescriptionHalf, StyledLink, Button, LeftHalf } from './styles'
import { useHistory } from 'react-router-dom'

const Job = () => {
    const history = useHistory()

    const { cslug, jslug } = useParams()

    const { data, loading, error } = useQuery(GET_RECIPE, {
        variables: {
            jobInput: {
                companySlug: cslug,
                jobSlug: jslug
            }
        }
    })

    if (loading) return (
    <Container><p>Job posting is loading</p></Container>)

    if (error) return <p>There's been an error. Please go back.</p>

    if (data) {
        console.log(data)
    }

    return (
        <Container>
            <h1>Job Posting</h1>
            <PageOrganizer>
                <LeftHalf>
                <HalfPage>
                    <h2>{ data.job.title }</h2>
                    <h3>{ data.job.company.name }</h3>
                    <h3>
                        Location(s): 
                        { data.job.cities.map(city => (<div>{ city.name }, { city.country.name } </div>))}
                        { data.job.remotes.length !== 0 ? <div>Remote</div> : <div>Not Remote</div>}    
                    </h3>
                    <h3>Commitment: { data.job.commitment.title } </h3>
                    {data.job.applyUrl ? <h3>Apply: <StyledLink target="_blank" href={ data.job.applyUrl } >{ data.job.applyUrl }</StyledLink></h3> : <div></div>}
                </HalfPage>
                <Button onClick={() => history.push("/")} >Back to all listings</Button>
                </LeftHalf>
                <DescriptionHalf>
                    <ReactMarkdown>{ data.job.description }</ReactMarkdown>
                </DescriptionHalf>
            </PageOrganizer>

        </Container>
    )
}

export default Job