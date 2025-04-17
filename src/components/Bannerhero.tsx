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


<div className=" w-full">
      <div className="w-full h-screen relative mt-16">
        <img
          src={images[currentImageIndex]}
          alt="Banner Hero"
          className="w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h1 className="text-white text-5xl font-bold  mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Gana Premios Fáciles y Rápido
          </h1>
          <p
            ref={subtitleRef}
            className={`text-white text-3xl  mb-8 transition-opacity duration-500 ease-in-out`}
            style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}
          >
            {subtitle}
          </p>
          <a
            href="sitio.com/participa/"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md"
          >
            ¡Participar Ahora!
          </a>
        </div>
      </div>
      <div className="bg-gray-700 text-white py-8 text-center">
        <p className="mb-4 text-2xl" >¡No te lo pierdas! Próximo Sorteo:</p>
        <div className="flex justify-center space-x-8">
          <div>
            <span className="font-bold text-4xl">{countdown.days}</span>
            <span className="text-lg"> días</span>
          </div>
          <div>
            <span className="font-bold text-4xl">{countdown.hours}</span>
            <span className="text-lg"> horas</span>
          </div>
          <div>
            <span className="font-bold text-4xl">{countdown.minutes}</span>
            <span className="text-lg"> minutos</span>
          </div>
        </div>
      </div>
    </div>



  );
};

export default BannerHero;
