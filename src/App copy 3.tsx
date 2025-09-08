import { useState } from "react";

// [false, 0]
function App() {
  const [isVisible, setVisibiility] = useState(false);
  const [count, setCount] = useState(0);
  // Object

  const [user, setUser] = useState({
    fname: "JOhn",
    lname: "Williams",
    address: {
      city: "Chennai",
      postcode: "32",
    },
  });

  const handleClick = () => {
    setVisibiility(true);
    setCount(count + 1);
    // console.log(isVisible);
    console.log("Count", count);

    //setname, setemail, setphone,..
  };

  const fullName = user.fname + " " + user.lname;

  return (
    <>
      <h2>{fullName}</h2>
      <h3>{isVisible ? "'True" : "False"}</h3>
      <h4>Count: {count}</h4>
      <button onClick={handleClick}>Show</button>
    </>
  );
}

export default App;
