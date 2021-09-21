import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import styled from "styled-components";
// import { Reset } from "styled-reset";
import Header from "./Header";
import Shop from "./products/Shop";
import Categories from "./products/Categories";
import ProductDetails from "./products/ProductDetails";
import UpdateOrder from "./orders/UpdateOrder";
import HomePage from "./Homepage";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Wrapper>
          <Route exact path="/">
            <Header />
            <HomePage />
          </Route>
          <Route exact path="/shop">
            <Header />
            <Shop />
          </Route>
          <Route exact path="/categories">
            <Header />
            <Categories />
          </Route>
          <Route exact path="/productdetails">
            <Header />
            <ProductDetails />
          </Route>
          <Route path="/updateorder">
            <Header />
            <UpdateOrder />
          </Route>
        </Wrapper>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  /* background-color: hsla(204, 67%, 25%, 1); */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#152f40+0,3b6d8c+100 */
  background: #152f40; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #152f40 0%,
    #3b6d8c 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #152f40 0%,
    #3b6d8c 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #152f40 0%,
    #3b6d8c 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#152f40', endColorstr='#3b6d8c',GradientType=0 ); /* IE6-9 */
width: 100vw
  height: 100vh;
`;

export default App;
