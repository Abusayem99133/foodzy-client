import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <h1>Footer</h1>
    </div>
  );
};

export default Main;
