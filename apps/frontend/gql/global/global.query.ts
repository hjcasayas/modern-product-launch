import { gql } from "graphql-request";

export const globalQuery = gql`
  query GlobalQuery {
    global {
      header {
        id
        websiteName
        navigation {
          id
          label
          href
          isExternal
        }
        cta {
          id
          link {
            id
            label
            href
            isExternal
          }
          icon {
            url
            alternativeText
          }
        }
      }
      footer {
        logo {
          alternativeText
          url
        }
        navigation {
          id
          label
          href
          isExternal
        }
        copyrightSymbol
        copyrightText
        copyrightYear
        websiteName
      }
    }
  }
`;
