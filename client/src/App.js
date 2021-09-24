import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
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

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      {/* <Header /> */}
      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <Header />
          <Shop />
        </Route>
        <Route exact path="/productdetails/:_id">
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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {

 /* background: rgb(#051622); */
 /* background: -webkit-gradient(linear, left top, left bottom, from(#deb992), to(#051622) fixed; */

 background: #5e4f3e;
  background: radial-gradient(
    circle,
    #deb992) 0%,
    #5e4f3e 100%
  );
}
 
`;

export default App;
