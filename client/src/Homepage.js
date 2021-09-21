import React from "react";
import styled from "styled-components";
import Video from "./Video";

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <Video />
        <CompanyName>wearables</CompanyName>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const CompanyName = styled.div`
  font-size: 150px;
  top: 15px;
  left: 15px;
  color: orange;
  z-index: 9999;
  rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3); 
`;
export default HomePage;
