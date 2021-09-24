import React from "react";
import styled from "styled-components";
import Video from "./Video";
import "./main.css";

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <CompanyName>
            <img src="/assets/logo.png" alt="Wearables Logo" />
          </CompanyName>

          <ContentContainer>
            <Headline>
              The Future is Here Today <br />
              Wearable Tech Products
            </Headline>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </ContentContainer>
        </ContentWrapper>
        <Video />
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
  z-index: 2;
`;

const ContentWrapper = styled.div`
  display: inline-flex;
  align-items: flex-end;
  margin: 0 auto;
  height: 500px;
  z-index: 3;
`;

const ContentContainer = styled.div`
  z-index: 10;
  width: 425px;
  height: 245px;
`;

const Headline = styled.h2`
  color: #fff;
  font-size: 32px;
  line-height: 1.6;
  margin-bottom: 25px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 1px;
`;

const Text = styled.div`
  color: #051622;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 1.8;
  margin-top: 0px;
  background: transparent;
  mix-blend-mode: multiply;
  background-color: #1ba098;
  opacity: 0.75;
  padding: 15px 15px 15px 25px;
  -webkit-border-top-left-radius: 25px;
  -webkit-border-bottom-right-radius: 25px;
  -moz-border-radius-topleft: 25px;
  -moz-border-radius-bottomright: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom: solid 2px #deb992;
  border-top: solid 2px #deb992;
`;
const CompanyName = styled.div`
  width: 125px;
  height: auto;
  opacity: 1;
  margin-right: 15px;

  & img {
    width: 100%;
    height: 100%;
    margin-bottom: -123px;
  }
`;

export default HomePage;
