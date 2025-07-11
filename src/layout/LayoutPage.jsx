import React from "react";
import Header from "../component/Header/Header";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Aside from "../component/Aside";

const LayoutPage = () => {
  return (
    <>
      <Aside />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPage;
