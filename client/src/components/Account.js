import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Account = ({ user, setUser }) => {
  // State variable that will contain the user's past orders once fetched.
  const [pastOrders, setPastOrders] = useState();

  let history = useHistory();

  useEffect(() => {
    fetch("/user/order")
      .then((res) => res.json())
      .then((data) => {
        if (data.orders) {
          setPastOrders(data.orders);
          console.log(data, "orders");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const handleSignOut = () => {
    fetch("/user/signout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setUser(null);
          history.push("/");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <Wrapper>
      {user && (
        <div>
          <h1>Hello, {user.username}</h1>
          <div>
            <button onClick={() => history.push("/cart")}>View Cart</button>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
          <TheDiv>
            <h2>Past Orders</h2>
            {pastOrders && (
              <Div>
                {pastOrders.map((pastOrder) => {
                  return (
                    <div>
                      <p>Order #{pastOrder._id}</p>
                      <div style={{ display: "flex" }} key={pastOrder._id}>
                        {pastOrder.data.map((product) => {
                          return (
                            <ul key={product._id}>
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
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </Div>
            )}
          </TheDiv>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

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

export default Account;
