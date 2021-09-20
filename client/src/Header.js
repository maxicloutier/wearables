import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Header = () => {
  return (
    <header>
      <Name></Name>
      <Tag></Tag>
      <nav>menu</nav>
    </header>
  );
};

const GlobalStyles = createGlobalStyle`
  @import url('https://use.typekit.net/iyq6wzg.css');
  body {
    font-family: proxima-nova, sans-serif;
  }
  `;

const Name = styled.h2`
  color: hsl(33, 68%, 54%);
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 2em;
`;
const Tag = styled.p`
  color: hsl(39, 86%, 63%);
  font-family: proxima-nova, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 0.75em;
`;

//<link rel="stylesheet" href="https://use.typekit.net/iyq6wzg.css">

{
  /* <style>
  @import url("https://use.typekit.net/iyq6wzg.css");
</style> */
}

// Proxima Nova Bold
// font-family: proxima-nova, sans-serif;
// font-weight: 700;
// font-style: normal;

// Proxima Nova Bold Italic
// font-family: proxima-nova, sans-serif;
// font-weight: 700;
// font-style: italic;

// Proxima Nova Regular
// font-family: proxima-nova, sans-serif;
// font-weight: 400;
// font-style: normal;

// Proxima Nova Italic
// font-family: proxima-nova, sans-serif;
// font-weight: 400;
// font-style: italic;

// Proxima Nova Extra Condensed Bold Italic
// font-family: proxima-nova-extra-condensed, sans-serif;
// font-weight: 700;
// font-style: italic;

// Proxima Nova Extra Condensed Bold
// font-family: proxima-nova-extra-condensed, sans-serif;
// font-weight: 700;
// font-style: normal;

// Proxima Nova Extra Condensed Italic
// font-family: proxima-nova-extra-condensed, sans-serif;
// font-weight: 400;
// font-style: italic;

// Proxima Nova Extra Condensed Regular
// font-family: proxima-nova-extra-condensed, sans-serif;
// font-weight: 400;
// font-style: normal;

// Proxima Nova Condensed Bold
// font-family: proxima-nova-condensed, sans-serif;
// font-weight: 700;
// font-style: normal;

// Proxima Nova Condensed Bold Italic
// font-family: proxima-nova-condensed, sans-serif;
// font-weight: 700;
// font-style: italic;

// Proxima Nova Condensed Regular
// font-family: proxima-nova-condensed, sans-serif;
// font-weight: 400;
// font-style: normal;

// Proxima Nova Condensed Italic
// font-family: proxima-nova-condensed, sans-serif;
// font-weight: 400;
// font-style: italic;

export default Header;
