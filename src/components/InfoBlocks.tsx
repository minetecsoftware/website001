import React, { useState } from 'react';

// Modal que se activa al hacer clic en el thumbnail
const Modal = ({
  isOpen,
  videoUrl,
  onClose,
}: {
  isOpen: boolean;
  videoUrl: string;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  const videoId = new URL(videoUrl).searchParams.get('v');
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-3xl rounded overflow-hidden">
        <button
          className="absolute top-2 right-2 text-white text-xl font-bold z-10"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="w-full h-full">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="Video"
            allow="autoplay; encrypted-media"
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
  videoUrl,
  onPreviewClick,
}: {
  title: string;
  content: string;
  videoUrl: string;
  onPreviewClick: (url: string) => void;
}) => {
  const [isActive, setIsActive] = useState(false);
  const videoId = new URL(videoUrl).searchParams.get('v');
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 ${isActive ? 'bg-green-100' : 'bg-white'} border-2 ${isActive ? 'border-green-300' : 'border-gray-200'}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className="aspect-w-16 aspect-h-9 mb-4 relative cursor-pointer" 
        onClick={(e) => {
          e.stopPropagation();
          onPreviewClick(videoUrl);
        }}
      >
        <img
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="aspect-w-16 aspect-h-9 w-full rounded"
        />
        <div className="inset-0 bg-black bg-opacity-10 flex items-center justify-center text-white text-2xl font-bold">
          
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

const InfoBlocks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openModalWithVideo = (url: string) => {
    setCurrentVideo(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo('');
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoBlock
          
          title="Nuestra Plataforma de Sorteos"
          content="<p>Esta es una plataforma de sorteos donde cada usuario puede crear su propio sorteo. Nosotros nos encargamos de la validación, transparencia y entrega del premio, garantizando que se cumpla con lo acordado. Actuamos como intermediarios para asegurar la legitimidad del sorteo y la confiabilidad de los premios.</p>"
          videoUrl="https://www.youtube.com/watch?v=C4g_as_2_hA"
          onPreviewClick={openModalWithVideo}
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
          videoUrl="https://www.youtube.com/watch?v=GrSdskSSlXs"
          onPreviewClick={openModalWithVideo}
        />
      </div>

      <Modal isOpen={modalOpen} videoUrl={currentVideo} onClose={closeModal} />
    </>
  );
};

export default InfoBlocks;
