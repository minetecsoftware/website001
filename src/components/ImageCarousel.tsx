import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200',
  'https://images.unsplash.com/photo-1605170439002-90845e8c0137?q=80&w=1200',
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1200',
  'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=1200',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl transition-all duration-300 hover:border-4 hover:border-green-300">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;