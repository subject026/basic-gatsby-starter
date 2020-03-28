import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";

const NotFound: React.FC = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="page not found" />
      <Hero title="That page doesn't exist!" />
      <p>Nothing here i&apos;m afraid</p>
    </Layout>
  );
};

export default NotFound;
