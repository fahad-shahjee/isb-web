// pages/packages.tsx
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import TabbedPackages from "@/components/TabbedPackages";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const PackagesPage = () => {
  return (
    <Layout header={2} footer={2} video={false}>
        <CmnBanner title="Packages" navigation="Packages" />
      <Head>
        <title>Packages | ISBTechs</title>
        <meta
          name="description"
          content="Explore ISBTechs packages: Logo Design, Web Design, E-commerce, SEO, SMM, Combo, and Animation."
        />
      </Head>

      {/* If you want a simple page title, uncomment this: */}
      {/* <section style={{ padding: "48px 16px", textAlign: "center", color: "#fff" }}>
        <h1 style={{ margin: 0 }}>Our Packages</h1>
      </section> */}

      <TabbedPackages />
    </Layout>
  );
};

export default PackagesPage;
