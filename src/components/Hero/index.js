import React from "react";
import styled from "styled-components";

import Wrapper from "../util/Wrapper.js";

const Hero = styled.section`
  height: 300px;
  background-color: #32107a;
  color: white;
  h1 {
    font-size: 60px;
  }
`;

const HeroInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export default ({ title }) => {
  return (
    <Hero>
      <Wrapper>
        <HeroInner>
          <h1>{title}</h1>
        </HeroInner>
      </Wrapper>
    </Hero>
  );
};
