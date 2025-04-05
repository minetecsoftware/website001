import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <FAQItem
        question="What services do you offer?"
        answer="We offer a wide range of services including web development, mobile app development, and digital marketing solutions."
      />
      <FAQItem
        question="How can I contact support?"
        answer="You can reach our support team through email at support@example.com or by calling our 24/7 helpline."
      />
      <FAQItem
        question="What are your business hours?"
        answer="We are open Monday through Friday from 9 AM to 6 PM EST. Weekend support is available for premium customers."
      />
      <FAQItem
        question="Do you offer refunds?"
        answer="Yes, we offer a 30-day money-back guarantee on all our services. Terms and conditions apply."
      />
    </div>
  );
};

export default FAQ;