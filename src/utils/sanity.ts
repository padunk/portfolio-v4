import type { Post } from "@/types";
import groq from "groq";
import { sanityClient } from "sanity:client";

const filter = '*[_type == "post" && slug.current == $slug][0]';
const projection = `{
  ...,
  body[]{
    ...,
    children[]{
    ...,
    _type == 'authorReference' => {
      _type,
      author->
    }
    }
  },
      "authorList": authors[].author->name,
      "coverImage": {
          "alt": mainImage.alt,
          "caption": mainImage.caption,
          "url": mainImage.asset->url
      }
  }`;

const query = filter + projection;

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current) && publishedAt < now()] | order(publishedAt desc) {
      publishedAt,
      slug,
      title,
      excerpt
    }[0...20]`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(groq`${query}`, {
    slug,
  });
}
