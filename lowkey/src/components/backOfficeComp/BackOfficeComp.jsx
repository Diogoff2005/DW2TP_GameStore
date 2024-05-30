import InputText from "../inputText/InputText";
import InputTextarea from "../inputTextarea/InputTextarea";
import UploadImage from "../uploadImage/UploadImage";
import React, { useState } from "react";
import "./BackOfficeComp.css";

const BackOfficeComp = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Add a new Game</h1>
      <form className="game-form">
        <div className="form-row">
          <div className="file-input-container">
            <UploadImage BC={"+ Cover Image"} />
          </div>
          <InputText
            className="text-input"
            label={"Name:"}
            placeholder={"Game Name "}
            width={"22%"}
          />
          <InputText
            className="text-input"
            label={"Developer:"}
            placeholder={"Developer designation"}
            width={"22%"}
          />
          <InputText
            className="text-input"
            label={"Publisher:"}
            placeholder={"Publisher's name"}
            width={"22%"}
          />
          <InputText
            className="text-input"
            label={"Price:"}
            placeholder={"Pricing"}
            width={"10%"}
          />
        </div>

        <div className="form-row">
          <div className="file-input-container">
            <UploadImage BC={"+ Banner Image"} />
          </div>
          <InputText
            className="text-input"
            label={"Genre:"}
            placeholder={"Game genre "}
            width={"25.4%"}
          />
          <InputText
            className="text-input"
            label={"Ratings:"}
            placeholder={"Game ratings"}
            width={"25.4%"}
          />
          <InputText
            className="text-input"
            label={"Date of release:"}
            placeholder={"Date"}
            typing="date"
            width={"25.4%"}
          />
        </div>
        <h2 className="form-title">Especification requirements:</h2>
        <div className="form-row">
          <InputTextarea
            className="text-input"
            label={"Minimum"}
            placeholder={"Recomended especifications to run the game"}
            width={"100%"}
            height={"285px"}
          />
          <InputTextarea
            className="text-input"
            label={"Recomended"}
            placeholder={"Recomended especifications to run the game"}
            width={"100%"}
            height={"285px"}
          />
          <InputTextarea
            className="textLow"
            label={"About:"}
            placeholder={"Description of the game"}
            width={"100%"}
            height={"285px"}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BackOfficeComp;
