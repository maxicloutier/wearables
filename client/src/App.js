import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Shop from "./products/Shop";
import ProductDetails from "./products/ProductDetails";
import UpdateOrder from "./orders/UpdateOrder";
import HomePage from "./Homepage";
import Footer from "./Footer";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
import Team from "./components/Team.js";
import Account from "./components/Account.js";
import ShoppingCart from "./orders/Cart";

function App() {
  const [user, setUser] = useState();

  const getUserData = () => {
    return fetch("/user/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setUser(data.data);
          console.log(data.data, "user");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route exact path="/productdetails/:_id">
          <ProductDetails />
        </Route>
        <Route path="/updateorder">
          <UpdateOrder />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn getUserData={getUserData} />
        </Route>
        <Route exact path="/account">
          <Account user={user} setUser={setUser} />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/cart">
          <ShoppingCart />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
