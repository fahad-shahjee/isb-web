import React from "react";
import Layout from "@/components/layout/Layout";
import HomeFourBanner from "@/components/layout/banner/HomeFourBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import Portfolio from "@/components/containers/home/Portfolio"
import Cta from "@/components/containers/home/Cta"
import NextPage from "@/components/containers/home/NextPage";

const Home = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <HomeFourBanner />
      <Cta />
      <Agency />
      <HomeOffer />
      <Cta />
      <HomeTestimonial />
      <Portfolio />
      <HomeSponsor />
      {/* <NextPage /> */}
    </Layout>
  );
};

export default Home;
