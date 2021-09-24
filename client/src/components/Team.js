import React from "react";
import styled from "styled-components";

const Team = () => {
  return (
    <Wrapper>
      <MemberDiv>
        <Img src="/assets/ingrid.png" alt="Ingrid" />
        <h2>Ingrid</h2>
        <p>Wearables Co-Founder / Team Member</p>
        <p>
          "Because when you shop at Wearables, the world (and my wallet) gets
          better."
        </p>
      </MemberDiv>
      <MemberDiv>
        <Img src="/assets/gerry.png" alt="Gerry" />
        <h2>Gerry</h2>
        <p>Wearables Co-Founder / Team Member</p>
        <p>
          "Try drunk online shopping at our store and send surprise presents to
          yourself!"
        </p>
      </MemberDiv>
      <MemberDiv>
        <Img src="/assets/ranveer.png" alt="Ranveer" />
        <h2>Ranveer</h2>
        <p>Wearables Co-Founder / Team Member</p>
        <p>
          "Shop at our store like there's no tomorrow, and then tomorrow, do it
          again!"
        </p>
      </MemberDiv>
      <MemberDiv>
        <Img src="/assets/maxime.png" alt="Maxime" />
        <h2>Maxime</h2>
        <p>Wearables Co-Founder / Team Member</p>
        <p>"Treat yo self! A package a day keeps the sadness away!"</p>
      </MemberDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 200px;
  width: 200px;
  text-align: center;
`;

export default Team;
