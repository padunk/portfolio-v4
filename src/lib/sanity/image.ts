import { sanityClient } from "sanity:client";

/* lib/sanity/image.ts */
import imageUrlBuilder from "@sanity/image-url";

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;
type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

export const imageUrlFor = (source: ImageSource) =>
  imageUrlBuilder(sanityClient).image(source);
