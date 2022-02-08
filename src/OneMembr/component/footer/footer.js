import React from "react";
import styled from "styled-components";
import logo from "../../Assets/footerlogo.jpg";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterContent className="container">
          <FooterHead>
            <Logo src={logo} />
            <IconHolder>
              <a href="https://instagram.com/joinonemembr" target="_blank" rel="noreferrer">
                <Icon>
                  <AiOutlineInstagram />
                </Icon>
              </a>
              <a href="https://twitter.com/onemembr" target="_blank" rel="noreferrer">
                <Icon>
                  <AiOutlineTwitter />
                </Icon>
              </a>
              <a href="mailto:contact@onemembr.com" target="_blank" rel="noreferrer">
                <Icon>
                  <AiOutlineMail />
                </Icon>
              </a>
            </IconHolder>
          </FooterHead>
          <FooterBottom>
            <Content>
              <ul>
                <ListHeader>Contact us</ListHeader>
                <a href="mailto:contact@onemembr.com">
                  <li>contact@onemembr.com</li>
                </a>
              </ul>
            </Content>
            <Copyright>
              <p>
                {" "}
                Copyright © 2022
                {""}{" "}
                <a href="https:dfxtgroup.com" target="_blank" rel="noreferrer">
                  DFXT Investment Nig. Ltd.
                </a>
                {""}
                All Rights Reserved.
              </p>
            </Copyright>
          </FooterBottom>
        </FooterContent>
      </Wrapper>
    </Container>
  );
};

const Copyright = styled.div`
  margin-left: 40px;
  font-size: 14px;
  font-weight: 400;
`;
const ListHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  position: relative;
  margin: 5px 0;

  &:after {
    content: "";
    position: absolute;
    background: #2a9ac9;
    height: 3px;
    width: 20%;
    top: 25px;
    left: 0;
  }
`;
const Icon = styled.div`
  font-size: 30px;
  margin: 0 5px;
  transition: all 350ms;
  transform: scale(1);
  color: #103d50;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    color: #2a9ac9;
  }
`;
const IconHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
`;
const Content = styled.div`
  li {
    list-style: none;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    // transition: left 1s linear;
    transition: all 350ms;
    margin: 10px 0;
    font-weight: bold;
    display: block;
    &:hover {
      margin-left: 3px;
      color: #103d50;
      font-weight: bold;
    }
  }
`;
const FooterBottom = styled.div`
  margin-left: 30px;
`;
const FooterHead = styled.div``;

const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: left;
  }
`;
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 30vh;
  display: flex;
  align-items: center;
`;
const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 30vh;
  background: white;
`;
