import { gql } from "graphql-request";

export const landingPageQuery = gql`
  query LandingPage {
    landingPage {
      blocks {
        ... on ComponentBlocksHero {
          __typename
          id
          tabletImage {
            alternativeText
            url
            width
            height
          }
          desktopImage {
            alternativeText
            url
            width
            height
          }
          headlines {
            id
            text
          }
          mobileImage {
            alternativeText
            url
            width
            height
          }
        }
      }
    }
  }
`;
