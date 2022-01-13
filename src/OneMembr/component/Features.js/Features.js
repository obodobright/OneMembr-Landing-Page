import React from "react";
import styled from "styled-components";
import { BiConversation } from "react-icons/bi";
import { GiExplosiveMeeting } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import data from "./dataFeature";

export const Features = () => {
  console.log(data);
  return (
    <Container>
      <Wrapper className="container">
        {data.map((d) => (
          <Card key={d.id}>
            <ImageIcon>{d.icon}</ImageIcon>
            <CardContent>
              <Title>{d.title}</Title>
              <Text>{d.desc}</Text>
            </CardContent>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

const Text = styled.div`
  font-size: 16px;
`;
const ImageIcon = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  padding: 20px;
  color: #24515b;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
const CardContent = styled.mark`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: transparent;
`;
const Card = styled.div`
  width: 300px;
  height: 250px;
  background: transparent;
  border: 1px solid grey;
  border-radius: 7px;
  margin: 10px 15px;
  cursor: pointer;
  transition: all 350ms;
  transform: scale(1);
  &:hover {
    transform: scale(1.03);
  }
`;
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  background: whitesmoke;
`;
