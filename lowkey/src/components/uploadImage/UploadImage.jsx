import React, { useState, useRef } from "react";
import "./UploadImage.css";

const UploadImage = ({ onImageChange, BC }) => {
  const [imageSrc, setImageSrc] = useState("");
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
      if (onImageChange) {
        onImageChange(file);
      }
    }
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    setImageSrc("");
    fileInputRef.current.value = "";
    if (onImageChange) {
      onImageChange(null);
    }
  };

  return (
    <div className="upload-image-container">
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div
        className="cover-button"
        onClick={handleButtonClick}
        style={{
          backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          width: "100%",
          height: "100px",
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {!imageSrc && <span className="cover-text">{BC}</span>}
        {imageSrc && (
          <div className="remove-button" onClick={handleRemoveClick}>
            &times;
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
