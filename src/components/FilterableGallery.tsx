import React, { useState } from 'react';

const categories = ['all', 'smartphones', 'motos', 'laptops', 'viajes'];

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800', category: 'smartphones' },
  { id: 2, src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800', category: 'motos' },
  { id: 3, src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800', category: 'laptops' },
  { id: 4, src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800', category: 'viajes' },
  { id: 5, src: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800', category: 'smartphones' },
  { id: 6, src: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=800', category: 'motos' },
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
          Close
        </button>
      </div>
    </div>
  );
};

const FilterableGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = images.filter(
    (image) => selectedCategory === 'all' || image.category === selectedCategory
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
            className="cursor-pointer rounded-lg overflow-hidden hover:border-4 hover:border-green-300 transition-all duration-300"
          >
            <img src={image.src} alt="" className="w-full h-64 object-cover" />
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