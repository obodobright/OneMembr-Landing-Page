import styled from "styled-components";
import googleStore from "../../Assets/googleplaystore.svg";
import appStore from "../../Assets/appstore.svg";
import kaios from "../../Assets/kaios.png";

export const AppDownload = ({ tt }) => {
  return (
    <Container>
      <DownloadWrapper jc={tt}>
        <a href="https://play.google.com/store/apps/details?id=com.onemember_ui" target="_blank">
          <Store src={googleStore} />
        </a>

        <a href="#">
          <Store src={appStore} />
        </a>
        <a href="#">
          <StoreKai src={kaios} />
        </a>
      </DownloadWrapper>
    </Container>
  );
};

const StoreKai = styled.img`
  margin-left: 10px;
  cursor: pointer;
  width: 100px;
  border-radius: 3px;
  background: white;
  // height: 100px;
  margin: 10px 10px;
`;
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
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
`;
