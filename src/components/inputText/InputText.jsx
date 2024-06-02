import React from "react";
import "./inputText.css";

const InputText = ({
  label,
  placeholder,
  width = "200px",
  height = "67px",
  typing = "text",
  name,
  defaultValue = "",
}) => {
  return (
    <div class="inpuc" style={{ width: width, maxHeight: height }}>
      <label for="name">{label}</label>

      <input
        id={name}
        type={typing}
        placeholder={placeholder}
        style={{ height: height }}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputText;
