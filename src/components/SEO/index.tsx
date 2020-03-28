import React from "react";
import Helmet from "react-helmet";

type TSEOProps = {
  title: string;
};

const SEO: React.FC<TSEOProps> = (props: TSEOProps) => {
  const { title } = props;
  return <Helmet title={title} />;
};

export default SEO;
