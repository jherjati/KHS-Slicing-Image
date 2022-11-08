import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import AboutUs from "../components/AboutUs";
import SurveyAndMapping from "../components/SurveyAndMapping";
import ArchitectureConstructionManagement from "../components/ArchitectureConstructionManagement";
import UrbanPlanning from "../components/UrbanPlanning";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <HomePage /> */}
      {/* <AboutUs /> */}
      {/* <SurveyAndMapping /> */}
      {/* <ArchitectureConstructionManagement /> */}
      <UrbanPlanning />
      <Footer />
    </div>
  );
}
