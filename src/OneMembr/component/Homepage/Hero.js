import styled from "styled-components";
import { AppDownload } from "../AppDownload/AppDownload";
import Typist from "react-typist";

export const Hero = ({ modalFunction }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <HeroContent>
            <div className="container">
              <ImageHolder />
              <Typist>
                <Content>
                  {" "}
                  Culture. <br />
                  Inclusivity. <br />
                  Community.{" "}
                </Content>{" "}
              </Typist>{" "}
              <HeroFooter className="container">
                <FooterText>
                  Join interesting conversations.Express your culture safely on OneMembr{" "}
                </FooterText>{" "}
                <Div> </Div> <AppDownload modalFunction={modalFunction} />
              </HeroFooter>{" "}
            </div>{" "}
          </HeroContent>{" "}
        </Wrapper>{" "}
      </Container>{" "}
    </>
  );
};

const FooterText = styled.div`
  color: #fff;
  font-weight: bold;
  letter-spacing: 1.5px;
`;
const Div = styled.div`
  width: 100%;
  height: 7px;
  background: #24515b;
  // margin-bottom: 20px;
`;
const HeroFooter = styled.div`
  font-size: 20px;
`;

const ImageHolder = styled.div`
  position: absolute;
  background: ;
  // width: 100%;

  @media (max-width: 768px) {
    height: 100%;
    // display: none;
  }
`;

const Content = styled.article`
  width: 250px;
  font-size: 60px;
  font-weight: 400;
  font-family: arial;
  display: flex;
  align-items: center;

  color: #fff;
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
  min-height: 60vh;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  min-height: 60vh;
`;
const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  background: url("asset/hero-img.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
`;
