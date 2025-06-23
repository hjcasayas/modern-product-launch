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
        ... on ComponentBlocksFeatures {
          __typename
          id
          headline
          description
          featuresList {
            text
          }
          cta {
            link {
              label
              href
              isExternal
            }
            icon {
              alternativeText
              url
              height
              width
            }
          }
          carousel {
            rightArrowIcon {
              alternativeText
              url
              width
              height
            }
            leftArrowIcon {
              alternativeText
              url
              width
              height
            }
            images {
              documentId
              alternativeText
              url
              width
              height
            }
          }
        }
        ... on ComponentBlocksSpecifications {
          __typename
          id
          title
          headline
          description
          cta {
            icon {
              alternativeText
              height
              url
              width
            }
            link {
              href
              label
              isExternal
            }
          }
          specifications {
            id
            isEmphasized
            title
            list {
              id
              text
              icon {
                alternativeText
                height
                url
                width
              }
            }
          }
        }
        ... on ComponentBlocksTestimonial {
          __typename
          id
          hero {
            alternativeText
            height
            url
            width
          }
          testimony {
            name
            occupation
            quote
          }
        }
        ... on ComponentBlocksHowItWorks {
          __typename
          id
          headline
          cta {
            icon {
              alternativeText
              height
              url
              width
            }
            link {
              href
              isExternal
              label
            }
          }
          stepsList {
            id
            title
            description
          }
        }
      }
    }
  }
`;
