import React from "react";
import Header from "../component/Header/Header";
import { Outlet } from "react-router";
import Footer from "../component/Footer";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPage;
