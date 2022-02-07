import React from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
export const NavBar = () => {
  return (
    <Container>
      <Wrapper className="container">
        <Logo src={logo} />{" "}
        <Navigation>
          <NavLink> Home </NavLink>{" "}
          <NavLink>
            <a
              href="mailto:contact@onemembr.com"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact us{" "}
            </a>{" "}
          </NavLink>{" "}
        </Navigation>{" "}
      </Wrapper>{" "}
    </Container>
  );
};

const NavLink = styled.div`
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
  flex-direction: row;
`;
const Wrapper = styled.main`
  height: 80px;
  display: flex;
  align-items: center;
`;

const Container = styled.main`
  width: 100%;
  height: 80px;
  background: white;
`;
