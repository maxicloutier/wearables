import React from "react";
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
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <Header />
          <Shop />
        </Route>
        <Route exact path="/productdetails">
          <Header />
          <ProductDetails />
        </Route>
        <Route path="/updateorder">
          <Header />
          <UpdateOrder />
        </Route>
        <Route exact path="/signup">
          <Header />
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <Header />
          <SignIn />
        </Route>
        <Route exact path="/account">
          <Header />
          <Account />
        </Route>
        <Route exact path="/team">
          <Header />
          <Team />
        </Route>
        <Route exact path="/cart">
          <Header />
          <ShoppingCart />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
