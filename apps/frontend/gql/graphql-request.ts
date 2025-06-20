"use server";

import request from "graphql-request";
import { notFound } from "next/navigation";

export const graphqlRequest = async <TData = unknown, TVariables = never>(
  query: string,
  variables?: TVariables
): Promise<TData> => {
  try {
    const response = await request(
      process.env.STRAPI_GRAPHQL_ENDPOINT!,
      query,
      variables ?? {}
    );
    if (response == null) {
      notFound();
    }

    return response as TData;
  } catch (error) {
    notFound();
  }
};
