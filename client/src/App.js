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
      <Wrapper>
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
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 25px;

  display: flex;
`;

export default App;
