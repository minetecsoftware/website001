import React, { useEffect, useRef } from 'react';

const images = [
  '/public/images/premiacion-01.webp',
  '/public/images/premiacion-02.webp',
  '/public/images/premiacion-03.webp',
  '/public/images/premiacion-04.webp',
  '/public/images/premiacion-05.webp',
];

const HorizontalCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div> 
       <span style={{ color: 'black', fontWeight: 'bold', fontSize: '24px' }}>GANADORES RECIENTES</span> 
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-4 py-4"

      >
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Carousel ${index + 1}`}
            className="w-90 h-64 object-cover object-top rounded-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel;