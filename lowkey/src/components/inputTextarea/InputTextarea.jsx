import React from "react";
import "./InputTextarea.css";

const InputText = ({
  label,
  placeholder,
  width = "200px",
  height = "67px",
}) => {
  return (
    <div
      class="inputTA"
      style={{ width: "32.5%", minWidth: "32.5", minHeight: height }}
    >
      <label for="area">{label}</label>

      <textarea
        placeholder={placeholder}
        id="area"
        name="area"
        style={{ width: width, height: height }}
      ></textarea>
    </div>
  );
};

export default InputText;
