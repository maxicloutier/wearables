import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Categories = ({ category }) => {
  const [categories, setCategories] = useState("");
  const [status, setStatus] = useState("loading");
  // Also, set `status` to `idle`
  useEffect(() => {
    fetch(`/product?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setStatus("idle");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <Wrapper>
        {/* {status === "loading" || !users ? (
          <div>
            <p>Waiting...</p>
          </div>
        ) : (
          <>
            <Title>Categories</Title>
            <Container>
              {data.map((cat) => {
              })}
              </Container> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Title = styled.h2``;

export default Categories;
