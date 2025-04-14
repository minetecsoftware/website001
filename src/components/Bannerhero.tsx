import React, { useState, useEffect, useRef } from 'react';

const BannerHero = () => {
  const images = [
    '/public/images/banner1.webp',
    '/public/images/banner2.webp',

  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [subtitle, setSubtitle] = useState('Compra un ticket, invita amigos y multiplica tus oportunidades de ganar.');
  const subtitleRef = useRef(null);
  const subtitleTexts = [
    'Compra un ticket, invita amigos y multiplica tus oportunidades de ganar.',
    'A más tickets más posibilidades de GANAR',
  ];
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (subtitleIndex + 1) % subtitleTexts.length;
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fadeOutUp');
        setTimeout(() => {
          setSubtitle(subtitleTexts[nextIndex]);
          setSubtitleIndex(nextIndex);
          if (subtitleRef.current) {
            subtitleRef.current.classList.remove('animate-fadeOutUp');
            subtitleRef.current.classList.add('animate-fadeInDown');
            setTimeout(() => {
              if (subtitleRef.current) {
                subtitleRef.current.classList.remove('animate-fadeInDown');
              }
            }, 500); 
          }
        }, 500); 
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [subtitleIndex]);

  useEffect(() => {
    const targetDate = new Date('2025-04-18T20:00:00-05:00'); 
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setCountdown({ days, hours, minutes });
      } else {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (

    <body>
      <div className="w-full bg-gray-200 py-4 text-center">
        Este div ocupa el 100% del ancho del body.
      </div>
      {/* ... otro contenido del body ... */}
    </body>


  );
};

export default BannerHero;
