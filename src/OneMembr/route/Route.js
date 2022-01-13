import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../component/Homepage/Home";
import { NavBar } from "../component/Navbar/Navbar";
import { Business } from "../component/For-business/Business";

const PageRoute = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/for-business" exact element={<Business />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default PageRoute;
