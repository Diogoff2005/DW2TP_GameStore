import React, { useState } from "react";
import "./UploadImage.css";

const UploadImage = ({}) => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <label htmlFor="image-input" className="upload-button">
        <span>+</span>
        <span className="text">Cover</span>
        <input
          type="file"
          id="image-input"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>

      {imageSrc && <img src={imageSrc} alt="Preview" className="image" />}
    </div>
  );
};

export default UploadImage;
