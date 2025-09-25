import React, { useState } from "react";
import tomato1 from "../images/img_tomoto1.jpg";
import tomato2 from "../images/img_tomoto2.jpg";
import tomato3 from "../images/img_tomoto3.jpg";
import tomato4 from "../images/img_tomoto4.jpg";
import tomato5 from "../images/img_tomoto5.jpg";
import tomato6 from "../images/img_tomoto6.jpg";
import tomato7 from "../images/img_tomoto7.jpg";
import tomato8 from "../images/img_tomoto8.jpg";
import tomato9 from "../images/img_tomoto9.jpg";

import "./gallery.css";

function Gallery() {
  const initialImages = [
    tomato1,
    tomato2,
    tomato3,
    tomato4,
    tomato5,
    tomato6,
    tomato7,
    tomato8,
    tomato9,
  ];

  const [images, setImages] = useState(initialImages);

  const handleUpload = (event) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  return (
    <div className="gallery-page">
      <h1 className="gallery-header">Tomato Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Tomato ${index + 1}`} />
          </div>
        ))}

        <label className="gallery-item upload-item">
          <span className="plus-sign">+</span>
          <input
            className="upload-item-btn"
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
          />
        </label>
      </div>
    </div>
  );
}

export default Gallery;
