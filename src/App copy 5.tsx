import { useState } from "react";
import { produce } from "immer";

function App() {
  const [user, setUser] = useState({
    fname: "John",
    lname: "Williams",
    email: "info@gmail.com",
    address: {
      city: "Chennai",
      postcode: "32",
    },
  });

  const [tags, setTags] = useState(["tamil", "english", "computer", "maths"]);

  // Array collection - Array of Objects
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", status: false },
    { id: 2, title: "Bug 2", status: false },
    { id: 3, title: "Bug 3", status: false },
    { id: 4, title: "Bug 4", status: false },
  ]);

  const handleClick = () => {
    let bug_id = 2;

    // setBugs(bugs.map((bug) => (bug.id == 2 ? { ...bug, status: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id == 3);
        if (bug) bug.status = true;
      })
    );

    // Add an item
    //setTags([...tags, "science"]);

    // Remove an item
    setTags(tags.filter((tag) => tag != "english"));

    //Update an item
    setTags(tags.map((tag) => (tag == "computer" ? "computer science" : tag)));

    //var updated_city = "Trichy";
    // setUser({ ...user, address: { ...user.address, city: updated_city } });
    //user.fname = "James";
    //...
    /* const newUser = {
      ...user,
      fname: "James",
    };
    .*/
    //var updated_name = "James";
    //setUser({ ...user, fname: updated_name });
  };
  return (
    <>
      <h2>
        {user.fname} {user.lname}
      </h2>
      <h3>
        {user.address.city} - {user.address.postcode}
      </h3>

      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>

      <ul>
        {bugs.map((bug) => (
          <li>
            {bug.id} - {bug.title} - {bug.status ? "True" : "False"}
          </li>
        ))}
      </ul>

      <button onClick={handleClick}>Click Here</button>
    </>
  );
}

export default App;
