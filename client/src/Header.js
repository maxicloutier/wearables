import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <nav>menu</nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: hsla(0, 0, 5, 1);
  height: 50px;
`;

export default Header;
