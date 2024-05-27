import React from "react";
import "./CartCounter.css";

const CartCounter = ({ offPrice, discounts }) => {
  return (
    <>
      <h3 className="h3"> Official price {offPrice}$ </h3>
      <h3 className="h3"> Discounts {-discounts}$ </h3>
      <h3 className="h3">Total {offPrice - discounts}$</h3>
    </>
  );
};
export default CartCounter;
