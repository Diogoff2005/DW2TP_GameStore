import React from "react";
import "./InputTextarea.css";

const InputText = ({
  label,
  placeholder,
  width = "200px",
  height = "67px",
  name,
  defaultValue = "",
}) => {
  return (
    <div
      class="inputTA"
      style={{ width: "32.5%", minWidth: "32.5", minHeight: height }}
    >
      <label for="area">{label}</label>

      <textarea
        placeholder={placeholder}
        id={name}
        name={name}
        style={{ width: width, height: height }}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
};

export default InputText;
