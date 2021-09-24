import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import ProductView from "./ProductsView";
import Details from "./ProductDetails";
// import Pagination from "./Pagination";

const Shop = () => {
  const [items, setItems] = useState(null);
  const [category, setCategory] = useState(null);

  // pagination states
  // const [items, setItems] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, seItemsPerPage] = useState(6);

  let history = useHistory();

  function handleClick(category) {
    setCategory(category);
  }

  useEffect(() => {
    const path = category ? `/product20?category=${category}` : "/product20";
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setItems([]);
  }, [category]);

  // pagination consts
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // set current page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Wrapper>
        <Title>How may we help you?</Title>
        <CatWrapper>
          <Cats>
            <CatButtons onClick={() => handleClick("Fitness")}>
              <ButtonLabel>
                <img src="/assets/fitness.png" />
                <p>Fitness</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Medical")}>
              <ButtonLabel>
                <img src="/assets/medical.png" />
                <p>Medical</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Lifestyle")}>
              <ButtonLabel>
                <img src="/assets/lifestyle.png" />
                <p>Lifestyle</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Entertainment")}>
              <ButtonLabel>
                <img src="/assets/entertainment.png" />
                <p>Entertainment</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Pets and Animals")}>
              <ButtonLabel>
                <img src="/assets/pets.png" />
                <p>Pets & Animals</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Gaming")}>
              <ButtonLabel>
                <img src="/assets/gaming.png" />
                <p>Gaming</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
        </CatWrapper>
        <ProductView items={items} />
        {/* <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        /> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const CatWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
`;

const Cats = styled.div`
  /* width: 30%; */
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 25px;
`;

const CatButtons = styled.button`
  align-items: flex-end;
  width: 100px;
  height: 100px;
  background-color: #000;
  color: #fff;
  font-size: 9px;
  text-transform: uppercase;
  margin-right: 10px;
  outline: none;
  border: none;
  padding-top: 10px;
  border-radius: 12px;
  background: rgb(13, 13, 13);
  background: linear-gradient(315deg, #051622 50%, #1ba098 100%);
  color: #deb992;
  border: 1px solid #deb992;

  & img {
    width: 25%;
    height: auto;
  }

  & p {
    color: #fff;
    margin-top: 3px;
  }
`;

const ButtonLabel = styled.div`
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export default Shop;
