import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import { request, gql } from "graphql-request";

export async function getStaticProps() {
  const query = gql`
    {
      items: aboutPages(first: 1) {
        nodes {
          ...AboutPageFields
        }
      }
      adds: homePages(first: 1) {
        nodes {
          ...HomePageFields
        }
      }
    }

    fragment AboutPageFields on AboutPage {
      title
      description
      subdescription
      section1Title
      section1Description
      section2Title
      section2Description
      section4Title
      section4Description
      section4Images {
        mediaItemId
        mediaItemUrl
        title
        altText
        caption
        description
      }
    }

    fragment HomePageFields on HomePage {
      section5Title
      section5Description
      section6Text
    }
  `;

  const { items, adds } = await request(
    "https://www.handalselaras.com/graphql/",
    query
  );

  return {
    props: {
      data: { ...items.nodes[0], ...adds.nodes[0] },
    },
    revalidate: 1 * 30,
  };
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>About Us - KHS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar />
      <AboutUs pageData={data} />
      <Footer />
    </div>
  );
}
