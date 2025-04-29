import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({
  videoUrl,
  autoPlay = false
}: {
  videoUrl: string;
  autoPlay?: boolean;
}) => {
  const videoId = new URL(videoUrl).searchParams.get('v');
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}`;

  return (
    <div className="mb-4 rounded overflow-hidden relative w-full" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl}
        title="Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const InfoBlock = ({
  title,
  content,
  videoUrl,
  autoPlayOnView = false
}: {
  title: string;
  content: string | React.ReactNode;
  videoUrl: string;
  autoPlayOnView?: boolean;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!autoPlayOnView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAutoPlay(true);
            observer.disconnect(); // Se desconecta después de activarse una vez
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [autoPlayOnView]);

  return (
    <div
      ref={blockRef}
      className={`p-6 rounded-lg transition-all duration-300 ${isActive ? 'bg-green-100' : 'bg-white'} border-2 ${isActive ? 'border-green-300' : 'border-gray-200'}`}
      onClick={() => setIsActive(!isActive)}
    >
      <VideoPlayer videoUrl={videoUrl} autoPlay={shouldAutoPlay} />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {typeof content === 'string' ? (
        <div className="mb-4" dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div className="mb-4">{content}</div>
      )}
    </div>
  );
};

const InfoBlocks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <InfoBlock
        title="Nuestra Plataforma de Sorteos"
        content="<p>Esta es una plataforma de sorteos donde cada usuario puede crear su propio sorteo. Nosotros nos encargamos de la validación, transparencia y entrega del premio, garantizando que se cumpla con lo acordado. Actuamos como intermediarios para asegurar la legitimidad del sorteo y la confiabilidad de los premios.</p>
        <br><p>El participante puede aumentar sus probbailidades de ganar mientras mas publicidad visualice o comparta</p>"

        videoUrl="https://www.youtube.com/watch?v=C4g_as_2_hA"
        autoPlayOnView={true} // 🔥 Solo el primero se autoreproduce al aparecer
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
      />
    </div>
  );
};

export default InfoBlocks;
