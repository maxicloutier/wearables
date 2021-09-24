import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductView = ({ items, category }) => {
  const [disable, setDisable] = useState(true);
  const params = useParams();
  const _id = params._id;

  const history = useHistory();

  const handleClick = (e, _id) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(`/productdetails/${_id}`);
  };
  return (
    <>
      <Wrapper>
        <ContentContainer>
          <Title>Here's what we found in {category}</Title>

          {items && (
            <div>
              {items.map((item) => {
                return (
                  <List
                    key={item._id}
                    onClick={(e) => handleClick(e, item._id)}
                  >
                    <Name>{item.name}</Name>
                    <NamePriceWrapper>
                      <ImageCompanyWrapper>
                        <img src={item.imageSrc} alt={item.name}></img>
                      </ImageCompanyWrapper>
                      <Price>
                        <AlignPrice>
                          <DollarSign>{item.price.slice(0, 1)}</DollarSign>
                          <DollarAmount>
                            {item.price.substring(1, item.price.length - 3)}
                          </DollarAmount>
                          <Cents>{item.price.slice(-3)}</Cents>
                        </AlignPrice>
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
                            Add to Cart
                          </button>
                        )
                      ) : (
                        <button disabled={disable}>No Stock</button>
                      )}
                    </Supply>
                  </List>
                );
              })}
            </div>
          )}
        </ContentContainer>
        <ProductDetails />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  margin-top: 50px;
  margin-bottom: 25px;
`;

const ContentContainer = styled.div`
  width: 900px;
  height: auto;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NamePriceWrapper = styled.div`
  flex-direction: column;
  /* place-content: center; */
  text-align: center;
`;

const ImageCompanyWrapper = styled.div`
  display: inline-flex;
  margin: 5px 0;
  width: 160px;
  height: 120px;

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
    border: 1px solid #deb992;
  }
`;

const List = styled.li`
  list-style-type: none;
  width: 175px;
  height: auto;
  margin-right: 20px;
  margin-bottom: 20px;
  background: #1ba098;
  background: radial-gradient(circle, #1ba098 0%, #051622 100%);
  padding: 6px;
  -webkit-border-top-left-radius: 25px;
  -webkit-border-bottom-right-radius: 25px;
  -moz-border-radius-topleft: 25px;
  -moz-border-radius-bottomright: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 1px solid #deb992;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
`;
const Name = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 11px;
  font-weight: normal;
  line-height: 1.2;
  color: #fff;
  margin-bottom: 12px;
  z-index: 7;
  height: 35px;
  padding-left: 6px;
`;

const AlignPrice = styled.div`
  display: flex;
`;

const Price = styled.div`
  position: relative;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  top: -32px;
  display: inline-flex;
  z-index: 5;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;

  ::after {
    content: "";
    z-index: 4;
    background-color: #1ba098;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    inset: 0;
    z-index: -1;
    border: 1px solid #deb992;
    filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
  }
`;

const DollarSign = styled.div`
  font-size: 9px;
  padding-top: 2px;
`;
const DollarAmount = styled.div`
  font-size: 19px;
  letter-spacing: -1px;
  color: #deb992;
`;
const Cents = styled.div`
  font-size: 9px;
  padding-top: 3px;
`;

const Supply = styled.div`
  position: relative;
  top: -15px;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #fff;
  margin-bottom: 5px;
  width: 100%;
  & button {
    outline: none;
    border: none;
    background-color: #051622;
    padding: 5px 15px;
    font-size: 14px;
    font-weight: bold;
    color: #1ba098;

    -webkit-border-topleft-radius: 12px;
    -webkit-border-bottomright-radius: 12px;
    -moz-border-radius-topleft: 12px;
    -moz-border-radius-bottomright: 12px;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  & button:hover {
    background-color: #1ba098;
    color: #051622;
  }
`;

export default ProductView;
