// NEXT
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
    },
  ]
}