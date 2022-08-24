import type { NextPage } from "next";
import Head from "next/head";
import CProduct from "../src/components/product-page";

const Home: NextPage = () => {
  return (
    <div className="product-page">
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
        <meta
          name="description"
          content="Frontend Mentor | E-commerce product page by Neljohn Cerera"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <CProduct />
    </div>
  );
};

export default Home;
