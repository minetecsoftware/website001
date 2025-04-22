import React, { useEffect, useState } from 'react';

const VideoBanner = () => {
  const targetDate = new Date('2025-04-26T00:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // 👇 Ajusta aquí la opacidad de la sombra (0.25 es 25%)
  const shadowOpacity = 5.25;
  const textShadowStyle = {
    textShadow: `2px 2px 6px rgba(0, 0, 0, ${shadowOpacity})`,
  };

  return (
    <div className="w-full h-screen relative">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="/public/video/PremiosFacilYa.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-5xl font-bold mb-4" style={textShadowStyle}>
          Gana Premios Fácil y Rápido
        </h2>
        <p className="text-xl mb-8" style={textShadowStyle}>
          Compra un ticket, invita amigos y multiplica tus oportunidades de ganar
        </p>

        <div className="text-2xl font-semibold mb-6" style={textShadowStyle}>
          {timeLeft.days} Días, {timeLeft.hours} Horas, {timeLeft.minutes} Minutos, {timeLeft.seconds} Segundos
        </div>

        <a
          href="https://premiosfacilya.com/sorteos/"
          className="bg-[#F77229] text-white px-6 py-3 rounded-full text-lg font-bold shadow-md hover:bg-orange-600 transition duration-300"
        >
          ¡Participa Ahora!
        </a>
      </div>
    </div>
  );
};

export default VideoBanner;
