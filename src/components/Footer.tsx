import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Importa los iconos de lucide-react

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual

  return (
    <footer className="bg-green-100 text-green-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Nosotros</h3>
            <p>Premios Fácil YA democratiza la emoción de ganar mediante sorteos transparentes y accesibles. Desde 2022 transformamos vidas con premios exclusivos y procesos confiables para todos los peruanos.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Menú del Sitio</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600">Inicio</a></li>
              <li><a href="#" className="hover:text-green-600">Sorteos</a></li>
              <li><a href="#" className="hover:text-green-600">Ganandores</a></li>
              <li><a href="#" className="hover:text-green-600">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-2">
              <li>Correo: info@premiosfacilya.pe</li>
              <li>Teléfono: (+51) 123-4567</li>
              <li>Dirección: Calle 123, Lima, Perú</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-600">
                <Facebook size={32} /> {/* Icono de Facebook */}
              </a>
              <a href="#" className="hover:text-green-600">
                <Twitter size={32} /> {/* Icono de Twitter */}
              </a>
              <a href="#" className="hover:text-green-600">
                <Instagram size={32} /> {/* Icono de Instagram */}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-200 text-center">
          <p>&copy; {currentYear} Premios Facil YA. Todos los derechos Reserveados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;