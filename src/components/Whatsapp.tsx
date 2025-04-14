import React from 'react';
import './Whatsapp.css';

const Whatsapp = () => {
  return (
    <div className="whatsapp">
      <a
        title="Contactanos por Whatsapp"
        href="https://api.whatsapp.com/send?phone=51967675249"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/public/images/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Whatsapp;