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
        ... on ComponentBlocksLogoCloud {
          __typename
          title
          id
          logoClouds {
            documentId
            url
            alternativeText
            width
            height
          }
        }
        ... on ComponentBlocksBenefits {
          __typename
          id
          title
          headline
          subTitle
          modules {
            id
            title
            icon {
              url
              alternativeText
              width
              height
            }
            description
          }
          image {
            url
            alternativeText
            width
            height
          }
        }
      }
    }
  }
`;
