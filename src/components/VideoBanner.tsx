import React from 'react';


const VideoBanner = () => {
  return (
    <div className="w-full h-screen relative mt-16">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="https://premiosfacilya.com/web/assets/video/premiosya00002.mp4" 
          type="video/mp4" 
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Gana Premios Fácil y Rápido</h2>
          <p className="text-xl">Compra un ticket, invita amigos y multiplica tus oportunidades de ganar</p>
        </div>



      </div>
    </div>
  );
};

export default VideoBanner;