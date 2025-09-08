import React, { useState } from "react";

const Todo = () => {
  let [name, setName] = useState("Hedy Lamarr's Todos");

  const updateName = () => {
    //name = "Kuberan";
    setName("Kuberan");

    // State value changes, coomponent gets rerenderd.
  };
  return (
    <>
      <h1>{name}</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo" />
      <ul className="listgroup">
        <li className="listitem">Invent new traffic lights</li>
        <li className="listitem">Rehearse a movie scene</li>
        <li className="listitem">Improve the spectrum technology</li>
      </ul>

      <button onClick={updateName}>Update Name</button>
    </>
  );
};

export default Todo;
