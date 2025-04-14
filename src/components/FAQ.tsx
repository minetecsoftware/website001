import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <MinusCircle /> : <PlusCircle />}
      </button>
      {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
      <FAQItem
        question="¿Cómo participo?"
        answer="We offer a wide range of services including web development, mobile app development, and digital marketing solutions."
      />
      <FAQItem
        question="¿Cómo se eligen los ganadores?"
        answer="You can reach our support team through email at support@example.com or by calling our 24/7 helpline."
      />
      <FAQItem
        question="¿Es seguro participar en Premios Fácil YA "
        answer="We are open Monday through Friday from 9 AM to 6 PM EST. Weekend support is available for premium customers."
      />

    </div>
  );
};

export default FAQ;