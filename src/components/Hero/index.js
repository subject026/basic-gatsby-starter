import React from "react";

import { Hero, HeroInner } from "./hero.css.js";
import Wrapper from "../util/Wrapper.js";

export default () => {
  return (
    <Hero>
      <Wrapper>
        <HeroInner>
          <h1>Here is a page title</h1>
        </HeroInner>
      </Wrapper>
    </Hero>
  );
};
