import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import Categories from "./Categories";

const Shop = () => {
  let history = useHistory();

  function handleClick(category) {
    history.push(`/product?category=${category}`);
  }

  return (
    <>
      <Wrapper>
        <CatWrapper>
          <Cats>
            <button onClick={() => handleClick("Fitness")}>Fitness</button>
          </Cats>
          <Cats>
            <button onClick={() => handleClick("Fitness")}>Fitness</button>
          </Cats>
          <Cats>
            <button onClick={() => handleClick("Lifestyle")}>Lifestyle</button>
          </Cats>
          <Cats>
            <button onClick={() => handleClick("Entertainment")}>
              Entertainment
            </button>
          </Cats>
          <Cats>
            <button onClick={() => handleClick("Pets and Animals")}>
              Pets and Animals
            </button>
          </Cats>
          <Cats>
            <button onClick={() => handleClick("Gaming")}>Gaming</button>
          </Cats>
        </CatWrapper>
        {/* <Categories
          name={name}
          price={price}
          body_location={body_location}
          category={category}
          imageSrc={imageSrc}
          numInStock={numInStock}
          companyId={companyId}
        /> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flexbox;
`;

const CatWrapper = styled.div`
  display: inline-flex;
`;

const Cats = styled.div`
  width: 30%;
`;

export default Shop;
