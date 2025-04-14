import React, { useState } from 'react';

const Block = ({ title, content, profileImage }: { title: string; content: string; profileImage: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 ${
        isHovered ? 'border-green-300' : 'border-black'
      } border-2 flex flex-col items-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2">
        <img
          src={profileImage}
          alt={`${title} Profile`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="mb-2">
        <span style={{ color: 'gold', fontSize: '1.2em', marginRight: '2px' }}>★</span>
        <span style={{ color: 'gold', fontSize: '1.2em', marginRight: '2px' }}>★</span>
        <span style={{ color: 'gold', fontSize: '1.2em', marginRight: '2px' }}>★</span>
        <span style={{ color: 'gold', fontSize: '1.2em', marginRight: '2px' }}>★</span>
        <span style={{ color: 'gold', fontSize: '1.2em' }}>★</span>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-center">{content}</p>
    </div>
  );
};

const RoundedBlocks = () => {
  const handleVerMasClick = () => {
    window.location.href = 'https://premiosfacilya.pe/ganadores/';
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Block
          title="Fiorella Vargas"
          content="Muy contenta! Los premios son totalmente serios, una experiencia fantástica."
          profileImage="/public/images/testimonio-01.webp"
        />
        <Block
          title="José Bustamante"
          content="Muy contento con la seriedad y transparencia. ¡Unos premios geniales!"
          profileImage="/public/images/testimonio-02.webp"
        />
        <Block
          title="Alejandra Prado"
          content="La organización fue impecable y los premios muy confiables. ¡Felicitaciones!"
          profileImage="/public/images/testimonio-03.webp"
        />
        <Block
          title="Milton Sevilla"
          content="Me siento muy feliz y honrado por este premio tan serio. ¡Gracias!"
          profileImage="/public/images/testimonio-04.webp"
        />
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleVerMasClick} // Agregamos el manejador onClick
        >
          Ver más ganadores
        </button>
      </div>
    </div>
  );
};

export default RoundedBlocks;