import React from "react";
import styled from "styled-components";
import Video from "./Video";
import "./main.css";
import Wearables from "./assets/wearables.svg";

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <Video />
        <ContentWrapper>
          <CompanyName>
            <img src={Wearables} alt="Wearables Logo" />
          </CompanyName>
          <ContentContainer>
            <Headline>Wearable Tech Products</Headline>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </ContentContainer>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  /* background-color: rgba(96, 41, 216, 0.5);
  background: transparent;
  mix-blend-mode: multiply; */
  /* opacity: 0.75; */
  z-index: 1;
  display: flexbox;
`;

const ContentWrapper = styled.div`
  align-items: flex-end;
  margin-left: 20%;
  margin-top: 10%;
`;

const ContentContainer = styled.div`
  margin-left: 45px;
  /* margin-top: 215px; */
  margin-top: 21.5%;
  width: 325px;
  height: 245px;
  background-color: #6129d9;
  /* background: transparent; */

  /* opacity: 0.5; */
  padding: 15px;
  -webkit-border-top-left-radius: 25px;
  -webkit-border-bottom-right-radius: 25px;
  -moz-border-radius-topleft: 25px;
  -moz-border-radius-bottomright: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Headline = styled.h2`
  color: #f2a341;
  margin-bottom: 5px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  /* font-weight: bold; */
  line-height: 1.8;
  margin-top: 0px;
`;
const CompanyName = styled.div`
  /* margin-left: 300px; */

  width: 9%;
  height: 9%;
  opacity: 0.5;
  mix-blend-mode: multiply;
  z-index: 2;
`;

export default HomePage;
