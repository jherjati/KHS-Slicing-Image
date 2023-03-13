import Head from "next/head";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import BlogDetail from "../../../../components/BlogDetail";
import { rootUrl, wpBlog2webBlog } from "../../../../constants";

export async function getStaticPaths() {
  const blogRes = await (
    await fetch(rootUrl + "/posts?per_page=5&_fields=slug")
  ).json();
  return {
    paths: blogRes.map((el) => ({ params: el })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const blogRes = await (
    await fetch(rootUrl + "/posts?per_page=1&_embed&slug=" + params.slug)
  ).json();
  const blogsRes = await (
    await fetch(
      rootUrl +
        "/posts?per_page=7&_embed&_fields=id,title,excerpt,modified,slug,_links,_embedded&categories=" +
        blogRes[0].categories[0]
    )
  ).json();

  const blog = blogRes[0];
  const blogs = blogsRes
    .filter((bl) => Boolean(bl) && bl.slug !== params.slug)
    .map(wpBlog2webBlog)
    .filter((_, idx) => idx < 6);

  return {
    props: {
      blog,
      blogs,
    },
    revalidate: 1 * 30,
  };
}

export default function Detail({ blog, blogs }) {
  return (
    <div>
      <Head>
        <title>Blog - KHS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar />
      <BlogDetail blog={blog} blogs={blogs} />
      <Footer />
    </div>
  );
}
