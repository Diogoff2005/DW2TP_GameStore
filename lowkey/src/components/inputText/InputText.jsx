import React from "react";
import "./inputText.css";

const InputText = ({
  label,
  placeholder,
  width = "200px",
  height = "47px",
}) => {
  return (
    <div class="inpuc" style={{ maxWidth: width }}>
      <label for="name">{label}</label>
      <input
        type="text"
        id="name"
        placeholder={placeholder}
        style={{ height: height }}
      />
    </div>
  );
};

export default InputText;
