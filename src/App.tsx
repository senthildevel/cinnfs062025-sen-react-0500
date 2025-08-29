import Counter from "./Counter";
import ListGroup from "./ListGroup";

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
        <h1 className="text-white p-3 bg-dark">{title}</h1>
        <Counter />

        <ListGroup items={cities} title="Cities" onSelectItem={handleClick} />

        {/* <ListGroup items={users} title="Users" /> */}

        {/* <div className="row">
          <div className="col">
            <ListGroup />
          </div>
          <div className="col">
            <ListGroup />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
