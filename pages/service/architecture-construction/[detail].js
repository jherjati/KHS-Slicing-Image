import Head from "next/head";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Portofolio from "../../../components/Portofolio";
import { gql, request } from "graphql-request";

export async function getStaticPaths() {
  return {
    paths: [{ params: { detail: "4100" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { detail } }) {
  const query = gql`
    {
      items: homePages(first: 1) {
        nodes {
          ...HomePageFields
        }
      }
    }

    fragment HomePageFields on HomePage {
      section1 {
        mediaItemId
        mediaItemUrl
        title
        altText
        caption
        description
      }
    }
  `;

  const { items } = await request(
    "https://www.handalselaras.com/graphql/",
    query
  );

  const slides = items.nodes[0].section1.map(
    ({ title, caption, mediaItemUrl }) => ({
      title,
      text: caption,
      image: mediaItemUrl,
    })
  );

  return {
    props: {
      slides,
    },
    revalidate: 1 * 30,
  };
}

export default function Home({ slides }) {
  return (
    <div>
      <Head>
        <title>Detail Services - KHS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar />
      <Portofolio sliderImage={slides} />
      <Footer />
    </div>
  );
}
