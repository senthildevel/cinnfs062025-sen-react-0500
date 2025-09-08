import Alert from "./Alert";
import Counter from "./Counter";
import ListGroup from "./ListGroup/";
import "./App.css";
import { BsAlarm, BsArrowRightSquareFill } from "react-icons/bs";

function App() {
  // Javascript / Typecript
  let title = "Courseinn Academy - Chennai";

  // JSX - Javascript - XML
  //return <h1 className="text-white p-3 bg-dark">{title}</h1>;

  const cities = ["Chennai", "Banglore", "Kerala", "Madurai"];

  const users = ["Hasim", "Kuberan", "Vijay", "Raihan"];

  const handleClick = (item: string) => {
    console.log("List Clicked", item);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-white p-3 bg-dark">
          <BsAlarm color="red" fontSize="44px" fontWeight={"bold"} />
          {title}
        </h2>

        <div>
          <h2>
            <BsArrowRightSquareFill /> Hello World
          </h2>
        </div>

        <ListGroup items={cities} title="Cities" onSelectItem={handleClick} />
      </div>
    </>
  );
}

export default App;
