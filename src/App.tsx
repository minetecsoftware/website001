import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Bannerhero from './components/Bannerhero';
import VideoBanner from './components/VideoBanner';
import HowItWorks from './components/HowItWorks';
import ImageCarousel from './components/ImageCarousel';
import LargeImageSlider from './components/LargeImageSlider';
import InfoBlocks from './components/InfoBlocks';
import FilterableGallery from './components/FilterableGallery';
import HorizontalCarousel from './components/HorizontalCarousel';
import RoundedBlocks from './components/RoundedBlocks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
       <Header />

       <VideoBanner />


      <section className="container mx-auto px-4 py-12">
         <LargeImageSlider />
      </section>

      <section className="container mx-auto px-4 py-12">
        <HowItWorks />
      </section>
      


      <section className="container mx-auto px-4 py-12">
        <FilterableGallery />
      </section>



      <section className="container mx-auto px-4 py-12">
        <HorizontalCarousel />
      </section>
      <section className="container mx-auto px-4 py-12">
        <RoundedBlocks />
      </section>
      <section className="container mx-auto px-4 py-12">
        <FAQ />
      </section>

      <section className="container mx-auto px-4 py-12">
        <InfoBlocks />
      </section>

      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;