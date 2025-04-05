import React, { useState } from 'react';

const InfoBlock = ({ title, content, buttonText }: { title: string; content: string; buttonText: string }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
        isActive ? 'bg-green-100' : 'bg-white'
      } border-2 ${isActive ? 'border-green-300' : 'border-gray-200'}`}
      onClick={() => setIsActive(!isActive)}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="mb-6">{content}</p>
      <button
        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
          isActive ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

const InfoBlocks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <InfoBlock
        title="Service One"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Learn More"
      />
      <InfoBlock
        title="Service Two"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        buttonText="Get Started"
      />
      <InfoBlock
        title="Service Three"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        buttonText="Contact Us"
      />
    </div>
  );
};

export default InfoBlocks;