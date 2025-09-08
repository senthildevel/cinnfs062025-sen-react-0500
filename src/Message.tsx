import React from "react";

let count = 0;
const Message = () => {
  count++;
  console.log("Count", count);
  return <div>Message {count}</div>;
};

export default Message;
