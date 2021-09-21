import React from "react";
import styled from "styled-components";

const SignUp = () => {

  


  return (
    <Wrapper>
      <h1>Sign Up</h1>  
      <p>Fill in this form to create an account and start shopping!</p>
      <form>
        <label for="first-name">First Name</label>
        <input type="text" placeholder="First Name" name="first-name" required />
        <label for="last-name">Last Name</label>
        <input type="text" placeholder="Last Name" name="last-name" required />
        <label for="email">Email</label>
        <input type="email" placeholder="Email" name="email" required />
        <label for="password">Password</label>
        <input type="password" placeholder="Password" name="password" required />
        <label for="confirm-password">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" name="confirm-password" required />
        <label for="birthday">Date of Birth</label>
        <input type="date" placeholder="Date of Birth" name="birthday" required />
        <div>
          <button type="reset">Clear</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Wrapper>
  )
}


// "userId": UUID,
// "cart": ARRAY<{productId, count}>,
// "email": String,
// "name": String

const Wrapper = styled.div``

export default SignUp