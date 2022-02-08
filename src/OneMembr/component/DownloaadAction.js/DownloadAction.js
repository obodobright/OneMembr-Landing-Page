import styled from "styled-components";
import { AppDownload } from "../AppDownload/AppDownload";

export const DownloadAction = ({ modalFunction }) => {
  return (
    <Container>
      <Wrapper className="container">
        <Content>
          <h1>Download OneMembr and keep conversation going!</h1>
        </Content>
        <Download>
          <AppDownload tt modalFunction={modalFunction} />
        </Download>
      </Wrapper>
    </Container>
  );
};
const Download = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  color: whitesmoke;
  font-size: 36px;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 38vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 40vh;
  background: #2a9ac9;
`;
