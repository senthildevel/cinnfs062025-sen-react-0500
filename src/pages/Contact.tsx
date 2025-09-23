import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  // To get Query Params
  const [queryParams, setqueryParams] = useSearchParams();
  console.log(queryParams.get("status"));
  // console.log(location);

  // console.log(location.path);

  // console.log(location.state.userName);
  const name = location.state.userName;

  return <h1>Contact - {name}</h1>;
};

export default Contact;
