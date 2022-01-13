import React from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Container>
      <Wrapper className="container">
        <Logo src={logo} />
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/for-business">For Business</NavLink>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

const NavLink = styled(Link)`
  margin: 0 30px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-weight: 500;

  :hover {
    text-decoration: none;
  }
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 20px;
  object-fit: contain;
  cursor: pointer;
`;
const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.main`
  //   width: 500px;
  height: 80px;
  display: flex;
  align-items: center;
  //   padding: 0 30px;
`;

const Container = styled.main`
  width: 100%;
  height: 80px;
  background: white;
`;
