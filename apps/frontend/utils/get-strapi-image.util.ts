import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const getStrapiImage = (url: string | StaticImport) => {
  return (url as string).startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
};
