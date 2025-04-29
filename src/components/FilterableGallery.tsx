import React, { useState } from 'react';

// Cambiamos directamente el label a un objeto con varias líneas
const categories = ['Premios Destacados', 'smartphones', 'motos', 'autos', 'laptops', 'viajes'];

const images = [
  { id: 1, src: '/public/images/premio-iphone.webp', category: 'smartphones', label: 'iphone' },
  { id: 2, src: '/public/images/premio-moto.webp', category: 'motos', label: 'Motos Urbanas' },
  { id: 3, src: '/public/images/premio-laptop2.webp', category: 'laptops', label: 'Laptops Gamer' },
  { id: 4, src: '/public/images/premio-travel.webp', category: 'viajes', label: 'Viajes' },
  { id: 5, src: '/public/images/premio-laptop.webp', category: 'laptops', label: 'Laptops Estudiante' },
  { id: 6, src: '/public/images/premio-auto.webp', category: 'autos', label: 'Autos' },
];

const Modal = ({ images, currentIndex, onClose }: { images: any[]; currentIndex: number; onClose: () => void }) => {
  const [index, setIndex] = useState(currentIndex);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-4xl w-full">
        <div className="relative">
          <img src={images[index].src} alt="" className="w-full h-[500px] object-cover rounded-lg" />
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
            <button
              onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="bg-white rounded-full p-2"
            >
              ←
            </button>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % images.length)}
              className="bg-white rounded-full p-2"
            >
              →
            </button>
          </div>
        </div>
        <button onClick={onClose} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
          Cerrar
        </button>
      </div>
    </div>
  );
};

const FilterableGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Premios Destacados');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = images.filter(
    (image) => selectedCategory === 'Premios Destacados' || image.category === selectedCategory
  );

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(index)}
            className="relative cursor-pointer rounded-lg overflow-hidden hover:border-4 hover:border-green-300 transition-all duration-300"
          >
            <img src={image.src} alt="" className="w-full h-96 object-cover" />
            <div className="absolute bottom-0 w-full bg-white bg-opacity-90 py-4 flex flex-col items-center justify-center">
              {image.label === 'iphone' ? (
                <>
                  <span className="text-black text-lg font-bold font-luckiest">PAQUETE DE SORTEO</span>
                  <span className="text-black text-md font-semibold font-luckiest">iPhone, Gran Sorteo 17 de Abril (Creado por "Mauricio Islas")</span>
                  <span className="text-yellow-500 text-2xl">⭐⭐⭐⭐⭐</span>
                </>
              ) : (
                <span className="text-black text-[1.5rem] font-semibold">{image.label}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <Modal
          images={filteredImages}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default FilterableGallery;
