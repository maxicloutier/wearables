import React from "react";
// import logo from "./logo.svg";
import styled from "styled-components";
// import { Reset } from "styled-reset";
import Header from "./Header";

function App() {
  return (
    <Wrapper>
      {/* <Reset /> */}
      <Header />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* background-color: hsla(204, 67%, 25%, 1); */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#152f40+0,3b6d8c+100 */
  background: #152f40; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #152f40 0%,
    #3b6d8c 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #152f40 0%,
    #3b6d8c 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #152f40 0%,
    #3b6d8c 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#152f40', endColorstr='#3b6d8c',GradientType=0 ); /* IE6-9 */

  height: 100vh;
`;

export default App;
