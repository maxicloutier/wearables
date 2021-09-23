import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProductView = ({ items }) => {
  return (
    <>
      <Wrapper>
        {/* {status === "loading" || !users ? (
          <div>
            <p>Waiting...</p>
          </div>
        ) : (
          <> */}
        <Title>Here's what we found</Title>
        <ContentContainer>
          {items &&
            items.map((item) => {
              return (
                <List key={item._id}>
                  <Name>{item.name}</Name>
                  <NamePriceWrapper>
                    <ImageCompanyWrapper>
                      <img src={item.imageSrc}></img>
                    </ImageCompanyWrapper>
                    <Price>
                      <DollarSign>{item.price.slice(0, 1)}</DollarSign>
                      <DollarAmount>
                        {item.price.substring(1, item.price.length - 3)}
                      </DollarAmount>
                      <Cents>{item.price.slice(-3)}</Cents>
                    </Price>
                  </NamePriceWrapper>

                  <Supply>
                    {item.numInStock > 0 ? (
                      item.numInStock && (
                        <button
                          onClick={() => {
                            // setItemCount(itemCount + 1);
                          }}
                        >
                          Buy Now
                        </button>
                      )
                    ) : (
                      <span>out of stock</span>
                    )}
                  </Supply>
                </List>
              );
            })}
        </ContentContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  margin-top: 50px;
`;

const ContentContainer = styled.div`
  width: 120px;
  height: auto;
  background: rgb(97, 41, 217);
  background: radial-gradient(
    circle,
    rgba(97, 41, 217, 1) 0%,
    rgba(13, 13, 13, 1) 100%
  );
  padding: 12px;
  -webkit-border-top-left-radius: 25px;
  -webkit-border-bottom-right-radius: 25px;
  -moz-border-radius-topleft: 25px;
  -moz-border-radius-bottomright: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 1px solid #f2a341;
`;

const NamePriceWrapper = styled.div`
  display: inline-flex;
`;

const ImageCompanyWrapper = styled.div`
  display: inline-flex;
  margin: 5px 0;
  width: 120px;
  height: 75px;

  & img {
    z-index: 3;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-border-top-left-radius: 12px;
    -webkit-border-bottom-right-radius: 12px;
    -moz-border-radius-topleft: 12px;
    -moz-border-radius-bottomright: 12px;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const List = styled.li`
  list-style-type: none;
`;
const Name = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 11px;
  font-weight: normal;
  line-height: 1;
  color: #f2a341;
  margin-bottom: 12px;
  z-index: 7;
`;
const Price = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  margin-left: -50px;
  margin-top: -5px;
  display: inline-flex;
  z-index: 5;

  ::after {
    content: "";
    z-index: 4;
    background-color: #4b21a6;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-top: -13px;
    margin-left: -3px;
    position: absolute;
    z-index: -1;
    filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
  }
`;

const DollarSign = styled.div`
  font-size: 14px;
  padding-top: 4px;
`;
const DollarAmount = styled.div`
  font-size: 24px;
  color: #f2a341;
`;
const Cents = styled.div`
  font-size: 9px;
  padding-top: 3px;
  l
`;

const Supply = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #fff;
  margin-bottom: 5px;

  & button {
    outline: none;
    border: none;
    background-color: #f2a341;
    padding: 5px 15px;
    font-size: 15px;
    font-weight: bold;
    color: #4b21a6;
    margin-top: 5px;
    margin-left: 12px;
    -webkit-border-topright-radius: 12px;
    -webkit-border-bottomleft-radius: 12px;
    -moz-border-radius-topright: 12px;
    -moz-border-radius-bottomleft: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

export default ProductView;
