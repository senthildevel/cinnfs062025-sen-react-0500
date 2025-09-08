import React from "react";

interface Props {
  // cartItems: string[];
  cartItemsCount: number;
}
const Navbar = ({ cartItemsCount }: Props) => {
  return <h2>Navbar - {cartItemsCount}</h2>;
};

export default Navbar;
