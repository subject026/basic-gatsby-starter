import React from "react";
import styled from "styled-components";

import Wrapper from "../util/Wrapper.js";

const Container = styled.footer`
  height: ${props => props.theme.layout.footerHeight};
  margin: 0;
  background-color: #202020;
  color: white;
`;

const FooterInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterInner>
          <span>Here is a footer</span>
        </FooterInner>
      </Wrapper>
    </Container>
  );
};

export default Footer;
