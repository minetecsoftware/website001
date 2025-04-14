import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-100 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">


        <div className="flex items-center text-3xl font-bold text-green-600">
      <img src="/public/images/logo.webp" alt="Premios Fácil YA!" className="mr-2" />
      Premios Fácil YA!
    </div>
    
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-xl text-green-700 hover:text-green-500">Inicio</a>
            <a href="#" className="text-xl text-green-700 hover:text-green-500">Sorteos</a>
            <a href="#" className="text-xl text-green-700 hover:text-green-500">Ganandores</a>
            <a href="#" className="text-xl text-green-700 hover:text-green-500">Preguntas Frecuentes</a>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="text-green-600" />
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#" className="text-xl block py-2 text-green-700 hover:text-green-500">Inicio</a>
            <a href="#" className="text-xl block py-2 text-green-700 hover:text-green-500">Sorteoss</a>
            <a href="#" className="text-xl block py-2 text-green-700 hover:text-green-500">Ganadores</a>
            <a href="#" className="text-xl block py-2 text-green-700 hover:text-green-500">Preguntas Frecuentes</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;