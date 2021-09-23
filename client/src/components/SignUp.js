import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const SignUp = () => {
  // Initial state of state variable formData.
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // This state variable will contain the user input as they complete the sign-up form. Initial state is declared above.
  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  // This function will be executed when the user has completed the form and clicked the Confirm button.
  const handleClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    // The data to be sent to the backend is the user input from the form.
    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    // Send new user information to the back end.
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // If operation sends a successful response, use localStorage so that the user stays signed in until they decide to sign out of their account. If unsuccessful response, send an error message.
        if (data.status === 200) {
          localStorage.setItem("username", formData.username);
          localStorage.setItem("email", formData.email);
        } else {
          alert("This username is not available. Please try another one. ");
        }
      });

    // Redirect new user to their account page.
    history.push("/account");
  };

  let readyToSubmit = false;

  // Data validation for the new user form.
  if (
    formData.username !== "" &&
    formData.username.length > 5 &&
    formData.email !== "" &&
    formData.email.includes("@") &&
    formData.email.includes(".") &&
    formData.password !== "" &&
    formData.password.length > 7 &&
    formData.confirmPassword !== "" &&
    formData.confirmPassword.length > 7 &&
    formData.password === formData.confirmPassword
  ) {
    // If the user input in the form meets all the requirements, `readyToSubmit` becomes true and the Confirm button is enabled.
    readyToSubmit = true;
  }

  return (
    <Wrapper>
      <h1>Sign Up</h1>
      <p>Fill in this form to create an account and start shopping!</p>
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
        <p>Username must contain at least 6 characters.</p>

        <label for="email">Email: </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(ev) => {
            setFormData({ ...formData, email: ev.target.value });
          }}
        />
        <p>Please provide a valid email address.</p>

        <label for="password">Password: </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(ev) => {
            setFormData({ ...formData, password: ev.target.value });
          }}
        />
        <p>Password must contain at least 8 characters.</p>

        <label for="confirm-password">Confirm Password: </label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm-password"
          onChange={(ev) => {
            setFormData({ ...formData, confirmPassword: ev.target.value });
          }}
        />
        <p>Please make sure the passwords match.</p>

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

export default SignUp;
