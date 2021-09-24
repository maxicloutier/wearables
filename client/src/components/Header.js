import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  // Check localStorage to see if a user is already signed in, to determine whether to display the `Sign In` & `Sign Up` or `Account` & `Cart` links in the navigation bar.
  const user = localStorage.getItem("user");

  return (
    <AppHeader>
      <StyledLink>
        <NavLink exact to="/">
          {/* <Logo src="/assets/logo.png" alt="Logo" /> */}
        </NavLink>
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink exact to="/shop" activeClassName="selected">
          Shop
        </NavLink>
        <NavLink exact to="/team" activeClassName="selected">
          Team
        </NavLink>
        {user ? (
          <>
            <NavLink exact to="/account" activeClassName="selected">
              Account
            </NavLink>
            <NavLink exact to="/cart" activeClassName="selected">
              Cart
            </NavLink>
          </>
        ) : (
          <>
            <NavLink exact to="/signin" activeClassName="selected">
              Sign In
            </NavLink>
            <NavLink exact to="/signup" activeClassName="selected">
              Sign Up
            </NavLink>
          </>
        )}
      </StyledLink>
    </AppHeader>
  );
};

const AppHeader = styled.header`
  background-color: #051622;
  width: 100vw;
  height: 50px;
  display: flex;
`;

const StyledLink = styled.nav`
  display: inline-flex;
  align-items: center;
  a {
    color: #deb992;
    padding-right: 20px;
  }
  .selected {
  }
`;

const Logo = styled.img`
  width: 200px;
`;

export default Header;
