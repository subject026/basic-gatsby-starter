import React from "react";
import styled from "styled-components";

import Wrapper from "../util/Wrapper";

const Container = styled.section`
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

type THeroProps = {
  title: string;
};

const Hero: React.FC<THeroProps> = (props: THeroProps): React.ReactElement => {
  const { title } = props;
  return (
    <Container>
      <Wrapper>
        <HeroInner>
          <h1>{title}</h1>
        </HeroInner>
      </Wrapper>
    </Container>
  );
};

export default Hero;
