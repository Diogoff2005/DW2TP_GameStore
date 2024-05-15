import React from "react";
import "./CartCounter.css";
import Buttonsubmit from "../Buttonsubmit/Buttonsubmit";

const CartCounter = ({ offPrice, discounts }) => {
  return (
    <div>
      <h3 className="h3"> Official price {offPrice}$ </h3>
      <h3 className="h3"> Discounts {-discounts}$ </h3>
      <h3 className="h3">Total {offPrice-discounts }$</h3>
      <div className="align">
      <Buttonsubmit
        className={"Payment"}
        textobutton={"Go to payment"}
      ></Buttonsubmit>
      </div>
      <Buttonsubmit
        className={"Shopping"}
        textobutton={"Continue Shopping"}
      ></Buttonsubmit>
    </div>
  );
};
export default CartCounter;
