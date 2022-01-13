import styled from "styled-components";
import { AppDownload } from "../AppDownload/AppDownload";
import heroImg from "../../Assets/hero-img.jpg";

export const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <HeroContent className="container">
          <Content>Experience interactivity with OneMembr</Content>
          <ImageHolder src={heroImg} />
        </HeroContent>

        <HeroFooter className="container">
          {/* <Div></Div> */}
          <FooterText>
            We are Elevating Diverse voices leading positive social change through thoughtful and
            respectful content
          </FooterText>
          <Div></Div>
          <AppDownload />
        </HeroFooter>
      </Wrapper>
    </Container>
  );
};

const FooterText = styled.div``;
const Div = styled.div`
  width: 100%;
  height: 7px;
  background: #24515b;
  margin-bottom: 20px;
`;
const HeroFooter = styled.div`
  font-size: 20px;
`;

const ImageHolder = styled.img`
  width: 100%;
  height: 400px;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Content = styled.article`
  width: 400px;
  font-size: 60px;
  font-weight: 400;
  font-family: arial;
  display: flex;
  align-items: center;
  color: #24515b;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 40px;
    width: 100%;
    padding: 10px 20px;
  }
`;
const HeroContent = styled.section`
  display: flex;
  padding: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;
const Container = styled.main`
  width: 100%;
  height: 100%;
  background: ;
`;
