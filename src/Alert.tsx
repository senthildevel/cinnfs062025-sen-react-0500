import React, { type ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary" | "danger" | "success"; // optional
  message: string;
  children: ReactNode;
}
const Alert = ({ color = "primary", message, children }: Props) => {
  //message = "Hello World";
  // constant
  return (
    <div className={"alert alert-" + color} role="alert">
      <h4>{message}</h4>
      {children}
    </div>
  );
};

export default Alert;
