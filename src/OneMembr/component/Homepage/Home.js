import React, { useState } from "react";
import { DownloadAction } from "../DownloaadAction.js/DownloadAction";
import { Features } from "../Features.js/Features";
import { Footer } from "../footer/footer";
import { Hero } from "./Hero";
import { Modal } from "../Modal/Modal";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const showMyModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Hero modalFunction={showMyModal} />
      <Features />
      <DownloadAction />
      <Footer />
      {showModal && <Modal removeBtn={showMyModal} />}
    </>
  );
};
