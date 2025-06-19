import { gql } from "graphql-request";

export const globalQuery = gql`
  query GlobalQuery {
    global {
      header {
        id
        websiteName {
          id
          name
        }
        navigation {
          id
          label
          url
          isExternal
        }
        cta {
          id
          label
          url
          isExternal
          icon {
            url
            alternativeText
          }
        }
      }
    }
  }
`;
