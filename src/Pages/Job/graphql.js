import { gql } from '@apollo/client';

export const GET_RECIPE = gql `
  query getJob($jobInput:JobInput!) {
    job(input:$jobInput){
      id
      title
      slug
      commitment {
        title
      }
      cities {
        name
        country {
          name
        }
      }
      remotes {
        name
      }
    	description
      applyUrl
      company {
        name
        logoUrl
        slug
      }
      locationNames
    	userEmail
      postedAt
    }
  }
`