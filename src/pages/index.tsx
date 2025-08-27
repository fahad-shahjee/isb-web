import React from "react";
import Layout from "@/components/layout/Layout";
import HomeFourBanner from "@/components/layout/banner/HomeFourBanner";
import Agency from "@/components/containers/home/Agency";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import Portfolio from "@/components/containers/home/Portfolio"
import Cta from "@/components/containers/home/Cta"
import PricingSection from "@/components/containers/PricingSection";
import CounterSection from "@/components/containers/CounterSection";

const Home = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <HomeFourBanner />
      <Cta />
      <Agency />
      <CounterSection />
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
