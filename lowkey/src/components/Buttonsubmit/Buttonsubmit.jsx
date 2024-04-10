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

const App = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <Button onClick={handleClick} className="button">
        Login
      </Button>
    </div>
  );
};

export default App;
