import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-100 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">Logo</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-green-700 hover:text-green-500">Home</a>
            <a href="#" className="text-green-700 hover:text-green-500">Products</a>
            <a href="#" className="text-green-700 hover:text-green-500">Services</a>
            <a href="#" className="text-green-700 hover:text-green-500">Contact</a>
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
            <a href="#" className="block py-2 text-green-700 hover:text-green-500">Home</a>
            <a href="#" className="block py-2 text-green-700 hover:text-green-500">Products</a>
            <a href="#" className="block py-2 text-green-700 hover:text-green-500">Services</a>
            <a href="#" className="block py-2 text-green-700 hover:text-green-500">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;