import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import Banner from "@/components/Banner";
import NotebookBanner from "@/components/NotebookBanner";
import ItemList from "@/components/ItemList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const queryItems = groq`
  *[_type=='item'] {
    ...,
  } 
`;

export const revalidate = 6000;

async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<p>Loading Preview Data</p>}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  const items = await client.fetch(queryItems);
  return (
    <>
      <NotebookBanner />
      <ItemList items={items} />
      <Banner />
      <BlogList posts={posts} />
    </>
  );
}

export default HomePage;
