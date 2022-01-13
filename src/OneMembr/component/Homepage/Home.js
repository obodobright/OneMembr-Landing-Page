import React from "react";
import { DownloadAction } from "../DownloaadAction.js/DownloadAction";
import { Features } from "../Features.js/Features";
import { Footer } from "../footer/footer";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <DownloadAction />
      <Footer />
    </>
  );
};
