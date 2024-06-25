import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import DisplayImage from './DisplayImage';

function AddImg() {
  const [photo, setPhoto] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<ImageGallery setPhoto={setPhoto} />} />
      <Route path="/display" element={<DisplayImage photo={photo} />} />
    </Routes>
  );
}

export default AddImg;
