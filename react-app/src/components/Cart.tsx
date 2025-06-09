import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}
//remember the rule of thumb the component which holds the states should be notified of the changes
// in our the case the implementation of the that part is in SharingStatesAcrossComp.tsx
//thus look at the implementation of the clear button
const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
