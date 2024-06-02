import React, { useState, useRef, useEffect } from "react";
import { supabase } from "../supabase";
import "./UploadImage.css";

const UploadImage = ({ onImageChange, BC, name, defaultValue }) => {
  const [imageSrc, setImageSrc] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchDefaultImage = async () => {
      if (defaultValue) {
        const { data, error } = await supabase.storage
          .from("Imgs")
          .getPublicUrl(defaultValue);
        if (error) {
          console.error("Error fetching default image:", error);
        } else {
          setImageSrc(data.publicUrl);
        }
      }
    };

    fetchDefaultImage();
  }, [defaultValue]);

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
        name={name}
      />
      <div
        className="cover-button"
        onClick={handleButtonClick}
        style={{
          backgroundImage: `url(${imageSrc})`,
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
