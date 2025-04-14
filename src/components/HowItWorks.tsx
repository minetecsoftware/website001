import React from 'react';
import './HowItWorks.css'; // Importa el archivo CSS con los estilos

const HowItWorks = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-center mb-8">¿Cómo Funciona?</h2>

      <div className="steps">
        <div className="step">
          <div className="step-icon">📌</div>
          <div className="step-content">
            <div className="step-title">Paso 1: Compra un ticket</div>
            <div className="step-description">
              Adquiere tu entrada para participar en el sorteo y comenzar tu aventura.
              <div>
                <a href="#" className="btn">COMPRAR AHORA</a>
              </div>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">📌</div>
          <div className="step-content">
            <div className="step-title">Paso 2: Invita amigos y gana más oportunidades</div>
            <div className="step-description">
              Comparte con tus amigos y aumenta tus posibilidades de ganar con cada persona que invites.
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-icon">📌</div>
          <div className="step-content">
            <div className="step-title">Paso 3: Espera el sorteo y revisa los ganadores</div>
            <div className="step-description">
              Mantente atento a la fecha del sorteo y verifica la lista de ganadores publicada en nuestra plataforma.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;