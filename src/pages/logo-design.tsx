import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/logo-design/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/logo-design/UxProcess";
import CtaTwo from "@/components/containers/logo-design/CtaTwo";

const ServiceDetails = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <ServiceDetailsBanner title="Logo Design" parent="Services" />
      <ServiceDetailsMain />
      <UxProcess />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
