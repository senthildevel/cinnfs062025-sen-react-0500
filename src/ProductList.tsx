import React, { useEffect, useState } from "react";

interface Props {
  category: string;
}
const connect = () => console.log("Conencting");
const disconnect = () => console.log("Disconnecting");
const ProductList = ({ category }: Props) => {
  //State Variable
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    connect();
    // On Mount
    console.log("On mount Fetching Prodcuts", category);

    setProducts(["Clothing", "Electronics"]);

    return () => disconnect();
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
