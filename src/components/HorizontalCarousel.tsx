import React, { useEffect, useRef } from 'react';

const images = [
  { src: '/public/images/premiacion-01.webp', date: '27 de Abril' },
  { src: '/public/images/premiacion-02.webp', date: '28 de Abril' },
  { src: '/public/images/premiacion-03.webp', date: '29 de Abril' },
  { src: '/public/images/premiacion-04.webp', date: '30 de Abril' },
  { src: '/public/images/premiacion-05.webp', date: '1 de Mayo' },
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
      <span style={{ color: 'black', fontWeight: 'bold', fontSize: '24px' }}>
        ÚLTIMOS GANADORES
      </span> 
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-4 py-4"
      >
        {images.concat(images).map((image, index) => (
          <div key={index} className="relative w-90 h-64 flex-shrink-0">
            <img
              src={image.src}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover object-top rounded-lg"
            />
            {/* Fondo blanco menos transparente y texto en una línea */}
            <div className="absolute bottom-0 w-full bg-white bg-opacity-90 h-16 flex items-center justify-center rounded-b-lg">
              <span className="text-black font-bold text-base">
                Ganador Sorteo {image.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
