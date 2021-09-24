import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory, NavLink } from "react-router-dom";

const ProductDetails = () => {
  const [companies, setCompanies] = useState(null);
  const [item, setItem] = useState(null);
  const params = useParams();
  const _id = params._id;

  const history = useHistory();

  useEffect(() => {
    const path = `/product/${_id}`;
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/company")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setCompanies(data.data);
        }
      });
  }, []);

  const company =
    companies &&
    item &&
    companies.find((company) => company._id === item.companyId);

  if (!item) {
    return null;
  }
  return (
    <>
      <Wrapper>
        <List>
          <DetailWrapper>
            <ImageCompanyWrapper>
              <img src={item.imageSrc}></img>
            </ImageCompanyWrapper>
            <div>
              <Name>{item.name}</Name>
              {company && (
                <>
                  <CompanyWrapper>
                    <Company>{company.name}</Company>
                    <Url>
                      <NavLink>{company.url}</NavLink>
                    </Url>
                    <Country>{company.country}</Country>
                  </CompanyWrapper>
                </>
              )}
            </div>
          </DetailWrapper>
          <NamePriceWrapper>
            Where to Wear:
            <Where>{item.body_location}</Where>
            Category:
            <Where>{item.category}</Where>
            <Price>
              <AlignPrice>
                <DollarSign>{item.price.slice(0, 1)}</DollarSign>
                <DollarAmount>
                  {item.price.substring(1, item.price.length - 3)}
                </DollarAmount>
                <Cents>{item.price.slice(-3)}</Cents>
              </AlignPrice>
            </Price>
            <ButtonsAlign>
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
                  <span>Not In Stock</span>
                )}
              </Supply>
              <CheckOut onClick="">Check Out</CheckOut>
            </ButtonsAlign>
          </NamePriceWrapper>
          <Back>
            <button onClick={() => history.goBack()}>Back</button>
          </Back>
        </List>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
`;

const NamePriceWrapper = styled.div`
  flex-direction: column;
  color: #deb992;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex: 2 1 auto;
`;

const ImageCompanyWrapper = styled.div`
  display: inline-flex;
  margin: 10px 0;
  width: 200px;

  & img {
    width: 200px;
    height: auto;
    -webkit-border-top-left-radius: 25px;
    -webkit-border-bottom-right-radius: 25px;
    -moz-border-radius-topleft: 25px;
    -moz-border-radius-bottomright: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border: 1px solid #deb992;
    margin-bottom: 10px;
  }
`;

const List = styled.div`
  width: 900px;
  background: #1ba098;
  background: radial-gradient(circle, #1ba098 0%, #051622 100%);
  padding: 36px;
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
  font-size: 36px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  margin-bottom: 5px;
  margin-left: 25px;
  margin-top: 5px;
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
  margin-left: 22px;
  margin-top: 25px;
  display: inline-flex;
  z-index: 5;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;

  ::after {
    content: "";
    z-index: 4;
    background-color: #1ba098;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: absolute;
    inset: 0;
    z-index: -1;
    filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
  }
`;

const DollarSign = styled.div`
  font-size: 28px;
  padding-top: 3px;
`;
const DollarAmount = styled.div`
  font-size: 48px;
  color: #deb992;
`;
const Cents = styled.div`
  font-size: 18px;
  padding-top: 7px;
`;

const Where = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  color: #fff;
  margin-bottom: 10px;

  & span {
    font-weight: bold;
    margin-left: 5px;
  }
`;
const CatBottom = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 1;
  color: #fff;
  margin-bottom: 5px;
  text-align: right;
  margin-right: 10px;
`;

const ButtonsAlign = styled.div`
  display: inline-flex;
  width: 400px;
  justify-content: space-evenly;
  align-items: center;
`;

const Supply = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 18px;
  font-weight: normal;
  line-height: 1;
  color: #fff;
  margin-bottom: 5px;

  margin-top: 25px;

  & button {
    outline: none;
    border: none;
    width: 145px;
    height: 38px;
    background-color: #051622;
    padding: 10px 21px;
    font-size: 18px;
    font-weight: bold;
    color: #1ba098;
    -webkit-border-topright-radius: 25px;
    -webkit-border-bottomleft-radius: 25px;
    -moz-border-radius-topright: 25px;
    -moz-border-radius-bottomleft: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  & button:hover {
    background-color: #1ba098;
    color: #051622;
  }
`;

const CheckOut = styled.button`
  outline: none;
  border: none;
  width: 145px;
  height: 38px;
  margin-top: 20px;
  background-color: #1ba098;
  padding: 10px 21px;
  font-size: 18px;
  font-weight: bold;
  color: #051622;
  -webkit-border-topleft-radius: 25px;
  -webkit-border-bottomright-radius: 25px;
  -moz-border-radius-topleft: 25px;
  -moz-border-radius-bottomright: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Back = styled.div`
  text-align: right;
  & button {
    outline: none;
    border: none;
    width: 145px;
    height: 38px;
    margin-top: 20px;
    background-color: #deb992;
    padding: 10px 21px;
    font-size: 18px;
    font-weight: bold;
    color: #051622;
    -webkit-border-topleft-radius: 25px;
    -webkit-border-bottomright-radius: 25px;
    -moz-border-radius-topleft: 25px;
    -moz-border-radius-bottomright: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;

const CompanyWrapper = styled.div`
  margin-left: 25px;
`;

const Company = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 24px;
  font-weight: normal;
  line-height: 1;
  color: #fff;
  margin-bottom: 5px;
  margin-top: 30px;
`;
const Country = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 18px;
  font-weight: normal;
  line-height: 1;
  color: #fff;
  margin-top: 5px;
`;

const Url = styled.link`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 18px;
  font-weight: normal;
  line-height: 1;
  color: #fff;
  margin-bottom: 5px;
`;

export default ProductDetails;
