import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { request, gql } from "graphql-request";

export async function getStaticProps() {
  const query = gql`
    {
      items: contactPages(first: 1) {
        nodes {
          ...ContactPageFields
        }
      }
    }

    fragment ContactPageFields on ContactPage {
      title
      address
      email
      phone
      whatsapp
    }
  `;

  const { items } = await request(
    "https://www.handalselaras.com/graphql/",
    query
  );

  return {
    props: {
      data: items.nodes[0],
    },
    revalidate: 1 * 30,
  };
}

export default function Contact({ data }) {
  return (
    <div>
      <Head>
        <title>ContactUs - KHS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
      <Navbar />
      <ContactUs pageData={data} />
      <Footer />
    </div>
  );
}
