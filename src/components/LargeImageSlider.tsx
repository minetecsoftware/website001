import React, { useState, useEffect } from 'react';

const images = [
  '/public/images/cf-premio01.webp',
  '/public/images/cf-premio02.webp',
  '/public/images/cf-premio03.webp',
  '/public/images/cf-premio04.webp',
];

const LargeImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Large Slide ${currentIndex + 1}`}
          className="w-full h-[720px] object-cover"
        />
      </div>
    </div>
  );
};

export default LargeImageSlider;