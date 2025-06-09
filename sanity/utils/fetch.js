import clientConfig from "../config/clientConfig";
import { createClient } from "next-sanity";
import { dev } from "./helpers";
import { draftMode } from "next/headers";

export { default as groq } from "groq";

export function fetchSanity(query, params, ...next) {
  const preview = dev || draftMode().isEnabled;
  return createClient(clientConfig).fetch(
    query,
    params,
    preview
      ? {
          stega: true,
          perspective: "previewDrafts",
          useCdn: false,
          token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
          next: {
            revalidate: 0,
            ...next,
          },
        }
      : {
          perspective: "published",
          useCdn: true,
          next: {
            revalidate: 15000,
            ...next,
          },
        }
  );
}
