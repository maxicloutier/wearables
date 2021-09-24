import React from "react";
import styled from "styled-components";

const ShoppingCart = ({ user }) => {
  const handleCheckout = () => {
    fetch("/user/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };

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
          <div>
            <p>Total</p>
            <button onClick={handleCheckout}>Confirm Order</button>
          </div>
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
