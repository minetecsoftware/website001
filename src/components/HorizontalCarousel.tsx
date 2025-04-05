import React, { useEffect, useRef } from 'react';

const images = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=800',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=800',
  'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=800',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=800',
  'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=800',
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
    <div
      ref={scrollRef}
      className="flex overflow-x-hidden space-x-4 py-4"
    >
      {images.concat(images).map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Carousel ${index + 1}`}
          className="w-64 h-40 object-cover rounded-lg flex-shrink-0"
        />
      ))}
    </div>
  );
};

export default HorizontalCarousel;