import { useState } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState(["Product 1 ", "Product 2", "Product 3"]);

  const [game, setGame] = useState({ id: 1, player: { name: "John" } });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepporoni",
    toppings: ["Mushroom", "Peper"],
  });

  const handleClick = () => {
    console.log("App COmp:: ON Cclear");

    setProducts([...products, "Prodcut 4"]);

    setGame({ ...game, player: { ...game.player, name: "James" } });

    // Add Origano
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Origano"] });
  };
  return (
    <>
      <h2>{game.player.name}</h2>

      <h3>{pizza.name}</h3>
      <ul>
        {pizza.toppings.map((top) => (
          <li>{top}</li>
        ))}
      </ul>
      <Navbar cartItemsCount={products.length} />
      <Cart cartItems={products} onClear={handleClick} />
    </>
  );
}

export default App;
