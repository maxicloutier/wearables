import React from "react";
// import styled from "styled-components";
// import { useParams, useHistory } from "react-router-dom";

const ProductDetails = ({ item }) => {
  {
    /*const { id } = useParams();

  const history = useHistory();

  return (
    <>
       <Wrapper>
        return (
        <List key={item._id}>
          <NamePriceWrapper>
            <Name>{item.name}</Name>
            <Price>
              <DollarSign>{item.price.slice(0, 1)}</DollarSign>
              <DollarAmount>
                {item.price.substring(1, item.price.length - 3)}
              </DollarAmount>
              <Cents>{item.price.slice(-3)}</Cents>
            </Price>
          </NamePriceWrapper>
          <Where>
            Where to wear:<span>{item.body_location}</span>
          </Where>
          <ImageCompanyWrapper>
            <img src={item.imageSrc}></img>
            <Company>{item.companyId}</Company>
          </ImageCompanyWrapper>
          <Supply>
            {item.numInStock > 0 ? (
              item.numInStock && (
                <button
                  onClick={() => {
                    // setItemCount(itemCount + 1);
                  }}
                >
                  YES! I want this
                </button>
              )
            ) : (
              <span>out of stock</span>
            )}
          </Supply>

          <CatBottom>{item.category}</CatBottom>
        </List>
        );
      </Wrapper> 
    </>
  );*/
  }
};

// const Wrapper = styled.div``;

// const Title = styled.h2`
//   text-align: center;
//   color: #fff;
//   margin-top: 50px;
// `;

// const ContentContainer = styled.div`
//   width: 180px;
//   height: auto;
//   background: rgb(97, 41, 217);
//   background: radial-gradient(
//     circle,
//     rgba(97, 41, 217, 1) 0%,
//     rgba(13, 13, 13, 1) 100%
//   );
//   padding: 15px;
//   -webkit-border-top-left-radius: 25px;
//   -webkit-border-bottom-right-radius: 25px;
//   -moz-border-radius-topleft: 25px;
//   -moz-border-radius-bottomright: 25px;
//   border-top-left-radius: 25px;
//   border-bottom-right-radius: 25px;
//   border: 1px solid #f2a341;
// `;

// const NamePriceWrapper = styled.div`
//   display: inline-flex;
// `;

// const ImageCompanyWrapper = styled.div`
//   display: inline-flex;
//   margin: 10px 0;

//   & img {
//     width: 70%;
//     height: auto;
//     -webkit-border-top-left-radius: 25px;
//     -webkit-border-bottom-right-radius: 25px;
//     -moz-border-radius-topleft: 25px;
//     -moz-border-radius-bottomright: 25px;
//     border-top-left-radius: 25px;
//     border-bottom-right-radius: 25px;
//   }
// `;

// const List = styled.li`
//   list-style-type: none;
// `;
// const Name = styled.div`
//   font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
//   font-size: 14px;
//   font-weight: bold;
//   line-height: 1;
//   color: #f2a341;
//   margin-bottom: 5px;
// `;
// const Price = styled.div`
//   font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
//   font-weight: bold;
//   line-height: 1;
//   color: #fff;
//   margin-bottom: 5px;
//   margin-left: 5px;
//   display: inline-flex;
//   z-index: 5;
//   ::after {
//     content: "";
//     z-index: 4;
//     background-color: #4b21a6;
//     border-radius: 50%;
//     width: 35px;
//     height: 35px;
//     margin-top: -5px;
//     margin-left: 10px;
//     position: absolute;
//     z-index: -1;
//     filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
//   }
// `;

// const DollarSign = styled.div`
//   font-size: 14px;
//   padding-top: 4px;
// `;
// const DollarAmount = styled.div`
//   font-size: 24px;
//   color: #f2a341;
// `;
// const Cents = styled.div`
//   font-size: 9px;
//   padding-top: 3px;
//   l
// `;
// const Where = styled.div`
//   font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
//   font-size: 14px;
//   font-weight: normal;
//   text-transform: uppercase;
//   line-height: 1;
//   color: #fff;
//   margin-bottom: 5px;

//   & span {
//     font-weight: bold;
//     margin-left: 5px;
//   }
// `;
// const CatBottom = styled.div`
//   font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
//   font-size: 12px;
//   font-weight: normal;
//   line-height: 1;
//   color: #fff;
//   margin-bottom: 5px;
//   text-align: right;
//   margin-right: 10px;
// `;

// const Supply = styled.div`
//   font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
//   font-size: 18px;
//   font-weight: normal;
//   line-height: 1;
//   color: #fff;
//   margin-bottom: 5px;

//   & button {
//     outline: none;
//     border: none;
//     background-color: #f2a341;
//     padding: 10px 21px;
//     font-size: 18px;
//     font-weight: bold;
//     color: #4b21a6;
//     -webkit-border-topright-radius: 25px;
//     -webkit-border-bottomleft-radius: 25px;
//     -moz-border-radius-topright: 25px;
//     -moz-border-radius-bottomleft: 25px;
//     border-top-right-radius: 25px;
//     border-bottom-left-radius: 25px;
//   }
// `;

// const Company = styled.div`
//   font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
//   font-size: 18px;
//   font-weight: normal;
//   line-height: 1;
//   color: #fff;
//   margin-bottom: 5px;
//   margin-left: 10px;
//   transform-origin: top right;
//   transform: rotate(-90deg) translateY(-15%);
// `;

export default ProductDetails;
