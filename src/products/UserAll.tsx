import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const UserAll = () => {
  const context = useOutletContext();
  console.log(context);
  return (
    <>
      <Link to="/2">Go to 2</Link>
      <h1>UserAll - {context.role}</h1>
    </>
  );
};

export default UserAll;
