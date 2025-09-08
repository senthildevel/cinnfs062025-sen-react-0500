import React, { useContext } from "react";
import { MyContext } from "./App"; // Adjust the import path
interface Props {
  clickButton: () => void;
}
const Component1 = ({ clickButton }: Props) => {
  const myval = useContext(MyContext);
  return (
    <>
      <h2>Component1 - {myval}</h2>
    </>
  );
};

export default Component1;
