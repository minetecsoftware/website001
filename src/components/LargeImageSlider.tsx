import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1600',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1600',
  'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=1600',
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
          className="w-full h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default LargeImageSlider;