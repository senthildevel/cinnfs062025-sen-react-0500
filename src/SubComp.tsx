import React, { useContext } from "react";
import { MyContext } from "./App"; // Adjust the import path
const SubComp = () => {
  const myval = useContext(MyContext);
  return (
    <>
      <h2>SubComp</h2>
      <h4>Context val : {myval}</h4>
    </>
  );
};

export default SubComp;
