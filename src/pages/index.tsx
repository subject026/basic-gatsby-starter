import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";

const Index = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Index Page" />
      <Hero title="Here is a page title" />
      <p>Here is some text content.</p>
    </Layout>
  );
};

export default Index;
