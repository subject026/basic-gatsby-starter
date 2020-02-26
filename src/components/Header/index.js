import React from "react";

import { Header, HeaderInner, SiteTitle } from "./header.css";
import Wrapper from "../util/Wrapper";

export default () => {
  return (
    <Header>
      <Wrapper>
        <HeaderInner>
          <SiteTitle>This is the header</SiteTitle>
        </HeaderInner>
      </Wrapper>
    </Header>
  );
};
