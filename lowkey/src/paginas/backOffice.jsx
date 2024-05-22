import InputText from "../components/inputText/InputText";
import UploadImage from "../components/uploadImage/UploadImage";
import "./backOffice.css";

const BackOffice = () => {
  return (
    <>
      <main
        style={{
          margin: "0px",
          padding: "0px",
        }}
      ></main>
      <div className="backDiv">
        <InputText label={"Me"} placeholder={"us be like"} />
        <UploadImage />
      </div>
    </>
  );
};

export default BackOffice;
