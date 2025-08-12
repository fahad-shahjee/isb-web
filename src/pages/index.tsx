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
import NextPage from "@/components/containers/home/NextPage";

const Home = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <HomeFourBanner />
      <Agency />
      <HomeOffer />
      <HomeTestimonial />
      <Portfolio />
      <HomeBlog />
      <HomeSponsor />
      {/* <NextPage /> */}
    </Layout>
  );
};

export default Home;
