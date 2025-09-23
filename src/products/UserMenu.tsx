import React from "react";
import { Outlet } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <h1>UserMenu</h1>
      <ul>
        <li>Add</li>
        <li>Edit</li>
        <li>Delete</li>
      </ul>
      <div className="border border-2 border-primary p-3">
        <Outlet context={{ role: "manager" }} />
      </div>
    </>
  );
};

export default UserMenu;
