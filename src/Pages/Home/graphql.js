import { gql } from '@apollo/client';

export const ALL_JOBS = gql `
  query allJobs {
    jobs{
      id
      title
      slug
      commitment {
        title
      }
      cities {
        name
        id
        slug
        country {
          name
          id
          slug
        }
      }
      remotes {
        name
      }
      applyUrl
      company {
        name
        logoUrl
        slug
      }
      locationNames
      postedAt
    }
  }
`

export const SEARCH_BY_CITY = gql  `
  query jobsByCity($citySlugInput:LocationInput!) {
    city(input:$citySlugInput){
      jobs {
        id
        title
        slug
        postedAt
        cities {
          name
          country {
            name
          }
        }
        company {
          name 
          logoUrl
          slug
        }
      }
    }
  }
`

export const SEARCH_BY_COUNTRY = gql `
  query jobsByCountry($countrySlugInput:LocationInput!) {
    country(input:$countrySlugInput){
        jobs {
          id
          title
          slug
          postedAt
          cities {
            name
            country {
              name
            }
          }
          company {
            name 
            logoUrl
            slug
          }
        }
      }
  }
`