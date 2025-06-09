import React from "react";

interface Props {
  cartItemsCount: number;
}

// Accept props in the function argument and destructure
const Navbar: React.FC<Props> = ({ cartItemsCount }) => {
  return <div>Navbar: {cartItemsCount}</div>;
};

export default Navbar;
