import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Shop = () => {
  let history = useHistory();

  function handleClick(category) {
    history.push(`/product?category=${category}`);
  }

  return (
    <>
      <Wrapper>
        <CatWrapper>
          <Categories>
            <button onClick={() => handleClick("Fitness")}>Fitness</button>
          </Categories>
          <Categories>
            <button onClick={() => handleClick("Fitness")}>Fitness</button>
          </Categories>
          <Categories>
            <button onClick={() => handleClick("Lifestyle")}>Lifestyle</button>
          </Categories>
          <Categories>
            <button onClick={() => handleClick("Entertainment")}>
              Entertainment
            </button>
          </Categories>
          <Categories>
            <button onClick={() => handleClick("Pets and Animals")}>
              Pets and Animals
            </button>
          </Categories>
          <Categories>
            <button onClick={() => handleClick("Gaming")}>Gaming</button>
          </Categories>
        </CatWrapper>
        <Categories category={category} />
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

const Categories = styled.div`
  width: 30%;
`;

export default Shop;
