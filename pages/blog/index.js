import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Blog from "../../components/Blog";
import { categories, rootUrl, wpBlog2webBlog } from "../../constants";

export async function getStaticProps() {
  const blogsRes = await (
    await fetch(
      rootUrl +
        "/posts?per_page=12&_embed&_fields=id,title,excerpt,modified,slug,_links,_embedded"
    )
  ).json();

  const blogs = blogsRes.map(wpBlog2webBlog);

  return {
    props: {
      blogs,
      categories: categories,
    },
    revalidate: 12 * 60 * 60 * 1000,
  };
}

export default function Home({ blogs, categories }) {
  return (
    <div>
      <Head>
        <title>Blogs - KHS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar />
      <Blog blogs={blogs} categories={categories} />
      <Footer />
    </div>
  );
}
