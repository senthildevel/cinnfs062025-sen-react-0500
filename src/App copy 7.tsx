import { createContext, useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

export const MyContext = createContext("");

function App() {
  const [val, setVal] = useState("Hello from context!");

  const handleClick = () => {
    setVal("Welcome to Courseinn Academy");
  };
  return (
    <>
      <MyContext.Provider value={val}>
        <Component1 clickButton={handleClick} />
        <Component2 />
        <button onClick={handleClick}>Update Value</button>
      </MyContext.Provider>
    </>
  );
}

export default App;
