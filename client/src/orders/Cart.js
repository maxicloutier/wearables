import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ShoppingCart = () => {
  // const [cart, setCart] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("/user/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setUser(data.data);
          console.log(data.data, "USER");
          // if (data.cart) {
          //   setCart(data.cart);
          //   console.log(data.cart, "CART");
          // }
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <TheDiv>
      <h2>Shopping Cart</h2>
      {user && (
        <Div>
          {user.cart.map((product) => {
            return (
              <div key={product._id}>
                <ul>
                  <ListItem>
                    <div>
                      <img src={product.imageSrc} />
                    </div>
                    <div>
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                      <p>{product.body_location}</p>
                      <p>{product.category}</p>
                    </div>
                  </ListItem>
                </ul>
              </div>
            );
          })}
        </Div>
      )}
    </TheDiv>
  );
};

const ListItem = styled.li`
  /* width: 100px; */
  display: flex;
`;

const TheDiv = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ShoppingCart;
