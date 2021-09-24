import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const SignIn = () => {
  // Initial state of state variable formData.
  const initialState = {
    username: "",
    password: "",
  };

  // This state variable will contain the user input as they complete the sign-in form. Initial state is declared above.
  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  // This function will be executed when the user has completed the form and clicked the Confirm button.
  const handleClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    // The data to be sent to the backend is the user input from the form.
    const data = {
      username: formData.username,
      password: formData.password,
    };

    // Send user information to the back end.
    fetch("/signin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          // If operation sends a successful response, use localStorage so that the user stays signed in until they decide to sign out of their account. If unsuccessful response, send an error message.
          localStorage.setItem("username", formData.username);
        } else {
          alert("Username or password is incorrect.");
        }
      });

    // Redirect new user to their account page.
    history.push("/account");
  };

  let readyToSubmit = false;

  // Data validation for the user sign-in form.
  if (formData.username !== "" && formData.password !== "") {
    // If the user input in the form meets all the requirements, `readyToSubmit` becomes true and the Confirm button is enabled.
    readyToSubmit = true;
  }

  return (
    <Wrapper>
      <h1>Sign In</h1>
      <p>Enter your information to login to your account.</p>
      <form onSubmit={handleClick}>
        <label for="username">Username: </label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(ev) => {
            setFormData({ ...formData, username: ev.target.value });
          }}
        />

        <label for="password">Password: </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(ev) => {
            setFormData({ ...formData, password: ev.target.value });
          }}
        />

        <div>
          <button type="reset">Clear</button>
          {readyToSubmit ? (
            <button type="submit">Confirm</button>
          ) : (
            <button type="submit" disabled>
              Confirm
            </button>
          )}
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SignIn;
