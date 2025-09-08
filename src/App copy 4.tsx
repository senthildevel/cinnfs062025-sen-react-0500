import ListGroup from "./ListGroup";
import Message from "./Message";

function App() {
  const cities = ["Chennai", "Banglore", "Kerala", "Madurai"];

  const handleClick = (item: string) => {
    console.log("List Clicked", item);
  };

  return (
    <>
      <Message />
      <Message />
      <Message />

      <ListGroup items={cities} title="Cities" onSelectItem={handleClick} />
    </>
  );
}

export default App;
