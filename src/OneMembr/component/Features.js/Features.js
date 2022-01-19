import React from "react";
import styled from "styled-components";
import data from "./dataFeature";
import "./feature.css";
import roomscreenimg from "../../Assets/Roomscreen.jpg";
import profileimg from "../../Assets/Profile.jpg";
import roomspage from "../../Assets/RoomsPage.jpg";

import { FeatureCard } from "./featureCard";
export const Features = () => {
  console.log(data);
  return (
    <Container>
      <Wrapper className="container">
        <FeatureCard
          src={roomscreenimg}
          title="Be your own creator"
          desc="It’s easy to create Live Rooms and start your own conversations about any topic. Select a group and start the conversation, then see who tunes in."
        />
        <FeatureCard
          fd
          src={profileimg}
          title="Unique live rooms"
          desc="On OneMembr you'll find conversations with top artists, athletes, and people in the know. Preview upcoming rooms and add them to your calendar so you don't miss out."
        />
        <FeatureCard
          src={roomspage}
          title="Find your people"
          desc="Browse groups on any subject, from teams to bands to topics that have the world talking. Select your topics and we'll notify you about rooms you can join."
        />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // flex-wrap: wrap;
`;
const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: whitesmoke;
  background-image: url("asset/img.png");
  background-size: cover;
  // background-repeat: no-repeat;
  background-position: 300px;
  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.4);
  }
`;
