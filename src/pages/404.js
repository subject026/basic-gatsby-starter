import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";

export default () => {
  return (
    <Layout>
      <SEO title="page not found" />
      <Hero title="That page doesn't exist!" />
      <p>Nothing here i'm afraid</p>
    </Layout>
  );
};
