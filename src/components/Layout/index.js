import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

const Theme = {
  colors: {
    red: "#ad170e",
  },
  layout: {
    headerHeight: "80px",
    footerHeight: "60px",
  },
};

const Globals = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  } 

  * {
    margin: 0;
  }

  * + * {
    margin-top: 1rem;
  }
`;

const Main = styled.main`
  min-height: calc(
    100vh -
      (
        ${props => props.theme.layout.footerHeight} +
          ${props => props.theme.layout.headerHeight}
      )
  );
  margin: 0;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Globals />
      <ThemeProvider theme={Theme}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
