import React, { useState, useEffect } from "react";
import styled from "styled-components";

// const Categories = ({
//   category,
//   name,
//   price,
//   body_location,
//   category,
//   imageSrc,
//   numInStock,
//   companyId,
// }) => {
//   const [categories, setCategories] = useState([]);
// 	 const [item, setItem] = useState([]);
//   const [status, setStatus] = useState("loading");
//   const [itemCount, setItemCount] = useState(0);
//   // Also, set `status` to `idle`
//   useEffect(() => {
//     fetch(`/product?category=${category}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCategories(data);
//         setStatus("idle");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);
//   return (
//     <>
//       <Wrapper>
//         {/* {status === "loading" || !users ? (
//           <div>
//             <p>Waiting...</p>
//           </div>
//         ) : (
//           <> */}
//         <Title>Categories</Title>
//         <Container>
//           {/* {data.map((cat) => { */}
//           <div key={_id}>
//             <div>{name}</div>
//             <div>{price}</div>
//             <div>{body_location}</div>
//             <div>{category}</div>
//             <div>{imageSrc}</div>
//             <div>{numInStock}</div>
//             <div>{companyId}</div>
// <buttonon Click={() => {
//               setItemCount(itemCount + 1);
//             }}
//           >Add to Cart</buttonon>
//           </div>
//           ;{/* })} */}
//         </Container>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.div``;

// const Title = styled.h2``;

// const Container = styled.h2``;

// export default Categories;
