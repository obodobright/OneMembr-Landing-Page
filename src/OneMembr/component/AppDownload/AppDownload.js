import styled from "styled-components";
import googleStore from "../../Assets/googleplaystore.svg";
import appStore from "../../Assets/appstore.svg";

export const AppDownload = ({ tt }) => {
  return (
    <Container>
      <DownloadWrapper jc={tt}>
        <Store src={googleStore} to="#" />
        <Store src={appStore} to="#" />
      </DownloadWrapper>
    </Container>
  );
};

const Store = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;
const DownloadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ jc }) => (jc ? "center" : "left")};
  width: 100%;
  padding: 20px 0;
`;
const Container = styled.div`
  width: 100%;
`;
