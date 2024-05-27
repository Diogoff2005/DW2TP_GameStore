import React from "react";
import "./Buttonsubmit.css";
// Button component
const Button = ({ children, className, loading }) => {
  return (
    <button type="submit" disabled={loading} className={className}>
      {children}
    </button>
  );
};

const Buttonsubmit = ({ textobutton, className, loading }) => {
  return (
    <div>
      <Button className={`button ${className}`} disabled={loading}>
        {loading ? "Loading..." : textobutton}
      </Button>
    </div>
  );
};

export default Buttonsubmit;
