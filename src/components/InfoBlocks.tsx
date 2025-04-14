import React, { useState } from 'react';

const Modal = ({
  isOpen,
  onClose,
  videoUrl,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}) => {
  if (!isOpen) return null;

  // Extraer ID de YouTube desde la URL
  const videoId = new URL(videoUrl).searchParams.get('v');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 max-w-2xl w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const InfoBlock = ({
  title,
  content,
  buttonText,
  onVideoClick,
}: {
  title: string;
  content: string;
  buttonText: string;
  onVideoClick: () => void;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
        isActive ? 'bg-green-100' : 'bg-white'
      } border-2 ${isActive ? 'border-green-300' : 'border-gray-200'}`}
      onClick={() => setIsActive(!isActive)}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="mb-6" dangerouslySetInnerHTML={{ __html: content }} />
      <button
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          isActive ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onVideoClick();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

const InfoBlocks = () => {
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);

  const openModalWithVideo = (url: string) => setModalVideoUrl(url);
  const closeModal = () => setModalVideoUrl(null);



  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoBlock
          title="Nuestra Plataforma de Sorteos"
          content="<p>Esta es una plataforma de sorteos donde cada usuario puede crear su propio sorteo. Nosotros nos encargamos de la validación, transparencia y entrega del premio, garantizando que se cumpla con lo acordado. Actuamos como intermediarios para asegurar la legitimidad del sorteo y la confiabilidad de los premios.</p>"
          buttonText="Ver Vídeo"
          onVideoClick={() => openModalWithVideo('https://www.youtube.com/watch?v=Shapz_pzDTQ')}
        />
        <InfoBlock
          title="Nuestro Algoritmo de Probabilidades"
          content={`<p>A diferencia de otras plataformas de sorteos donde los ganadores son elegidos por números aleatorios sin lógica ni validación, nuestro sistema se basa en un cálculo matemático de probabilidades.
Aquí, ganar depende de tu participación activa y tu círculo social.</p>
<p><br />
<ul>
<li>• Nuestro sistema de emparejamiento analiza las probabilidades de los participantes.</li>
<li>• El ganador lo decides tú, no un algoritmo aleatorio.</li>
<li>• Cuanto más participes, mayor será tu probabilidad de ganar.</li>
</ul></p>`}
          buttonText="Ver Vídeo"
          onVideoClick={() => openModalWithVideo('https://www.youtube.com/watch?v=nuNEoNgf3gA')}
        />
      </div>

      <Modal isOpen={modalVideoUrl !== null} onClose={closeModal} videoUrl={modalVideoUrl || ''} />
    </>
  );
};

export default InfoBlocks;
