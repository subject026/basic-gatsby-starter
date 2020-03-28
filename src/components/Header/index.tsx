import React from "react";
import styled from "styled-components";

import Wrapper from "../util/Wrapper";

const Container = styled.header`
  height: ${(props): string => props.theme.layout.headerHeight};
  color: #202020;
`;

const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const SiteTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Header = (): React.ReactElement => {
  return (
    <Container>
      <Wrapper>
        <HeaderInner>
          <SiteTitle>Here is a header</SiteTitle>
        </HeaderInner>
      </Wrapper>
    </Container>
  );
};

export default Header;
