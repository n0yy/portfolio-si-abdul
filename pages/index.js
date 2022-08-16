import Head from "next/head";
import Layout from "../components/Layout";
import Jumbotron from "../components/section/Jumbotron";
import Experience from "../components/section/Experience";
import Contact from "../components/section/Contact";
import Footer from "../components/section/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ridwan | Home</title>
      </Head>
      <Layout>
        <Jumbotron />
        <Experience />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}
