import type { Image } from "@sanity/types";
import { sanityClient } from "sanity:client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: Image) {
  return builder.image(source);
}
