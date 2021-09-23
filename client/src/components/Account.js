import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Account = () => {
  // Check localStorage to see if a user is already signed in, to determine whether they have access to the account page or not.
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");

  return (
    <div>
      <h1>Hello, {user}</h1>
      <p>{email}</p>
      <button>View Cart</button>
      <div>
        <h2>Past Orders</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Account;
