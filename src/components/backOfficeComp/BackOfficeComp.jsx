import React from "react";
import InputText from "../inputText/InputText";
import InputTextarea from "../inputTextarea/InputTextarea";
import UploadImage from "../uploadImage/UploadImage";
import "./BackOfficeComp.css";

const BackOfficeComp = ({ submit, initialGameData = {} }) => {
  return (
    <div className="form-container">
      <h1 className="form-title">Add a new Game</h1>
      <form className="game-form" onSubmit={submit}>
        <div className="form-row">
          <div className="file-input-container">
            <UploadImage
              BC={"+ Cover Image"}
              name="coverImg"
              defaultValue={initialGameData.coverImg}
            />
          </div>
          <InputText
            className="text-input"
            label={"Name:"}
            placeholder={"Game Name"}
            width={"22%"}
            name="name"
            defaultValue={initialGameData.name}
          />
          <InputText
            className="text-input"
            label={"Developer:"}
            placeholder={"Developer designation"}
            width={"22%"}
            name="developer"
            defaultValue={initialGameData.developer}
          />
          <InputText
            className="text-input"
            label={"Publisher:"}
            placeholder={"Publisher's name"}
            width={"22%"}
            name="publisher"
            defaultValue={initialGameData.publisher}
          />
          <InputText
            className="text-input"
            label={"Price:"}
            placeholder={"Pricing"}
            width={"10%"}
            name="price"
            defaultValue={initialGameData.price}
          />
        </div>

        <div className="form-row">
          <div className="file-input-container">
            <UploadImage
              BC={"+ Banner Image"}
              name="backgroundImg"
              defaultValue={initialGameData.backgroundImg}
            />
          </div>
          <InputText
            className="text-input"
            label={"Genre:"}
            placeholder={"Game genre"}
            width={"50.8%"}
            name="genre"
            defaultValue={initialGameData.genre}
          />
          <InputText
            className="text-input"
            label={"Date of release:"}
            placeholder={"Date"}
            typing="date"
            width={"25.4%"}
            name="releaseDate"
            defaultValue={initialGameData.releaseDate}
          />
        </div>
        <h2 className="form-title">Specification requirements:</h2>
        <div className="form-row">
          <InputTextarea
            className="text-input"
            label={"Minimum"}
            placeholder={"Minimum specifications to run the game"}
            width={"100%"}
            height={"285px"}
            name="minSpecs"
            defaultValue={initialGameData.minimum}
          />
          <InputTextarea
            className="text-input"
            label={"Recommended"}
            placeholder={"Recommended specifications to run the game"}
            width={"100%"}
            height={"285px"}
            name="recSpecs"
            defaultValue={initialGameData.recommended}
          />
          <InputTextarea
            className="textLow"
            label={"About:"}
            placeholder={"Description of the game"}
            width={"100%"}
            height={"285px"}
            name="about"
            defaultValue={initialGameData.aboutGame}
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
