import { BlockRenderer } from "@/components/blocks-renderer";
import { LandingPageSingle } from "@/components/single/landing-page/landing-page.interface";
import { landingPageQuery } from "@/components/single/landing-page/landing-page.query";
import { graphqlRequest } from "@/gql/graphql-request";

export default async function HomePage() {
  const { landingPage } = await graphqlRequest<{
    landingPage: LandingPageSingle;
  }>(landingPageQuery);

  return <BlockRenderer {...landingPage} />;
}

export const revalidate = 0;
