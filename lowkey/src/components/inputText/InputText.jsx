import React from "react";
import "./inputText.css";

const InputText = ({
  label,
  placeholder,
  width = "200px",
  height = "67px",
  typing = "text",
}) => {
  return (
    <div class="inpuc" style={{ width: width, maxHeight: height }}>
      <label for="name">{label}</label>

      <input
        type={typing}
        id="name"
        placeholder={placeholder}
        style={{ height: height }}
      />
    </div>
  );
};

export default InputText;
