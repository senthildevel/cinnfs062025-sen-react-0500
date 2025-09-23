import React from "react";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <h1>Sidebar</h1>

      <Outlet />
    </>
  );
};

export default Sidebar;
