import type { ImageAsset, PortableTextBlock, Slug } from "sanity";

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: PortableTextBlock[];
  mainImage?: ImageAsset & { alt: string; caption: string };
  body: PortableTextBlock[];
}
