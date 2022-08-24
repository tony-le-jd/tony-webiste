import gql from 'graphql-tag'

export const getProjects = gql`
  query getProjects {
    projects {
      data {
        attributes {
          project {
            id
            title
            description
            url
            stacks {
              icons {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
