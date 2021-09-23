import React from "react";
import styled from "styled-components";
import Video from "./Video";
import "./main.css";
import Logo from "./assets/logo.png";

const HomePage = () => {
  return (
    <>
      <Wrapper>
        {/* <Screen> */}
        <Video />
        <ContentWrapper>
          <CompanyName>
            <img src={Logo} alt="Wearables Logo" />
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
        {/* </Screen> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: inline-flex;
  align-items: flex-end;
  margin: 0 auto;
  height: 500px;
`;

const ContentContainer = styled.div`
  z-index: 10;
  /* margin-left: 15px;
  margin-top: 25px; */
  width: 325px;
  height: 245px;
  background: transparent;
  mix-blend-mode: multiply;
  background-color: #6129d9;
  opacity: 0.5;
  padding: 15px 15px 15px 25px;
  -webkit-border-top-left-radius: 25px;
  -webkit-border-bottom-right-radius: 25px;
  -moz-border-radius-topleft: 25px;
  -moz-border-radius-bottomright: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom: solid 2px #f2a341;
  border-top: solid 2px #f2a341;
`;

const Headline = styled.h2`
  color: #f2a341;
  margin-bottom: 5px;
  /* z-index: 15;
  opacity: 1; */
`;

const Text = styled.p`
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 1.8;
  margin-top: 0px;
`;
const CompanyName = styled.div`
  width: 125px;
  height: auto;
  opacity: 1;

  & img {
    width: 100%;
    height: 100%;
    margin-bottom: -33px;
  }
`;

export default HomePage;
