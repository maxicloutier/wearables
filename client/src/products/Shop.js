import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import ProductView from "./ProductsView";
// import Pagination from "./Pagination";
import Medical from "../assets/medical.png";
import Fitness from "../assets/fitness.png";
import Lifestyle from "../assets/lifestyle.png";
import Entertainment from "../assets/entertainment.png";
import Pets from "../assets/pets.png";
import Gaming from "../assets/gaming.png";

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
    // const path = category ? `/product?category=${category}` : "/product";
    // fetch(path)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setItems(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    setItems([
      {
        name: "High Tech Pet MS-4 Digital, Water-Resistant Ultrasonic Collar",
        price: "$34.99",
        body_location: "Neck",
        category: "Pets and Animals",
        _id: 6771,
        imageSrc:
          "data:image/jpeg;base64,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",
        numInStock: 2,
        companyId: 14834,
      },
    ]);
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
                <img src={Fitness} />
                <p>Fitness</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Medical")}>
              <ButtonLabel>
                <img src={Medical} />
                <p>Medical</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Lifestyle")}>
              <ButtonLabel>
                <img src={Lifestyle} />
                <p>Lifestyle</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Entertainment")}>
              <ButtonLabel>
                <img src={Entertainment} />
                <p>Entertainment</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Pets and Animals")}>
              <ButtonLabel>
                <img src={Pets} />
                <p>Pets & Animals</p>
              </ButtonLabel>
            </CatButtons>
          </Cats>
          <Cats>
            <CatButtons onClick={() => handleClick("Gaming")}>
              <ButtonLabel>
                <img src={Gaming} />
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
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-top: 50px;
  background: rgb(13, 13, 13);
  background: linear-gradient(
    0deg,
    rgba(13, 13, 13, 1) 0%,
    rgba(64, 43, 17, 1) 100%
  );
`;

const CatWrapper = styled.div`
  display: inline-flex;
`;

const Cats = styled.div`
  /* width: 30%; */
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
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
  background: linear-gradient(
    315deg,
    rgba(13, 13, 13, 1) 50%,
    rgba(97, 41, 217, 1) 100%
  );
  color: #f2a341;
  border: 1px solid #f2a341;

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
