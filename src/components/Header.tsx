import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-white via-gray-100 to-gray-300 fixed w-full top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-3xl font-bold text-gray-800 bungee-spice-regular">
            <img src="/public/images/logo.webp" alt="Premios Fácil YA!" className=" mr-2 w-10 h-10" />
            Premios Fácil YA!
          </div>

          {/* Menú de navegación */}
          <div className="hidden md:flex space-x-6">
            {['Inicio', 'Sorteos', 'Ganadores', 'Preguntas Frecuentes'].map((text, index) => (
              <div key={index} className="relative group overflow-hidden h-6">
                <span className="text-xl text-gray-800 block group-hover:animate-fade-out-up">
                  {text}
                </span>
                <span className="text-xl text-gray-800 absolute left-0 top-0 opacity-0 group-hover:animate-fade-in-down">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="text-gray-800" />
          </button>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#" className="text-xl block py-2 text-gray-800 hover:text-gray-600 transition-colors duration-300">Inicio</a>
            <a href="#" className="text-xl block py-2 text-gray-800 hover:text-gray-600 transition-colors duration-300">Sorteos</a>
            <a href="#" className="text-xl block py-2 text-gray-800 hover:text-gray-600 transition-colors duration-300">Ganadores</a>
            <a href="#" className="text-xl block py-2 text-gray-800 hover:text-gray-600 transition-colors duration-300">Preguntas Frecuentes</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

