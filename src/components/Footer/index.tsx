import React from "react";
import styled from "styled-components";

import Wrapper from "../util/Wrapper";

const Container = styled.footer`
  height: ${(props): string => props.theme.layout.footerHeight};
  margin: 0;
  background-color: #202020;
  color: white;
`;

const FooterInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Footer = (): React.ReactElement => {
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
