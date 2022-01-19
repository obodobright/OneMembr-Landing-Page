import React from "react";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

import "./feature.css";

export const FeatureCard = ({ src, title, desc, fd }) => {
  return (
    <Zoom>
      <div style={{ width: "100%" }}>
        <FeatureContent className="feature-content" fd={fd}>
          <div className="img-container">
            <img src={src} alt="" className="room-img" />
          </div>
          <div className="content-wrapper">
            <div className="icon-holder"></div>
            <div className="description">
              <h3 className="title">{title}</h3>
              <p className="desc">{desc} </p>
            </div>
          </div>
        </FeatureContent>
      </div>
    </Zoom>
  );
};

const FeatureContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  margin-top: 30px;
  flex-direction: ${({ fd }) => (fd ? "row-reverse" : "row")};
  flex-wrap: wrap;
  transition: all 350ms;
  color: #0f0f22;
  @media (max-width: 768px) {
    color: whitesmoke;
  }
`;
