import React from "react";
import "./Buttonsubmit.css";
// Button component
const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const Buttonsubmit = ({ textobutton, className }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Button onClick={handleClick} className={`button ${className}`}>
        {textobutton}
      </Button>
    </div>
  );
};

export default Buttonsubmit;
