import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../App";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("/user/me")
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
  }, []);

  return (
    <AppHeader>
      <StyledLink>
        <StyledNavLink exact to="/">
          <Logo src="/assets/headerLogo.png" alt="Logo" />
        </StyledNavLink>
        <StyledNavLink exact to="/" activeClassName="selected">
          Home
        </StyledNavLink>
        <StyledNavLink exact to="/shop" activeClassName="selected">
          Shop
        </StyledNavLink>
        <StyledNavLink exact to="/team" activeClassName="selected">
          Team
        </StyledNavLink>
        {user ? (
          <>
            <StyledNavLink exact to="/account" activeClassName="selected">
              Account
            </StyledNavLink>
            <StyledNavLink exact to="/cart" activeClassName="selected">
              Cart
            </StyledNavLink>
          </>
        ) : (
          <>
            <StyledNavLink exact to="/signin" activeClassName="selected">
              Sign In
            </StyledNavLink>
            <StyledNavLink exact to="/signup" activeClassName="selected">
              Sign Up
            </StyledNavLink>
          </>
        )}
      </StyledLink>
    </AppHeader>
  );
};

const AppHeader = styled.header`
  margin: 0;
  background-color: black;
  width: 100vw;
`;

const StyledLink = styled.nav`
  display: inline-flex;
  align-items: center;

  /* overflow: auto; */

  a {
    color: white;
    padding-top: 5px;
    padding-bottom: 5px;
    text-decoration: none;
    font-weight: bold;
  }
  .selected {
  }
`;

const Logo = styled.img`
  width: 225px;
  margin: 0px 10px;
`;

const StyledNavLink = styled(NavLink)`
  width: fit-content;
  min-width: 200px;
  padding: 12px;
  color: white;
  text-decoration: none;
  width: 16%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */
  text-align: center; /* If you want the text to be centered */
`;

export default Header;
