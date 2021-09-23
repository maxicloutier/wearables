import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Shop from "./products/Shop";
import Categories from "./products/ProductsView";
import ProductDetails from "./products/ProductDetails";
import UpdateOrder from "./orders/UpdateOrder";
import HomePage from "./Homepage";
import Footer from "./Footer";

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
        </Switch>
      </Wrapper>
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
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 25px;

  display: flex;
`;

export default App;
