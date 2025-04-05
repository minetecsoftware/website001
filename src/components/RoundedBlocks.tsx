import React, { useState } from 'react';

const Block = ({ title, content }: { title: string; content: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg transition-all duration-300 ${
        isHovered ? 'border-green-300' : 'border-black'
      } border-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const RoundedBlocks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Block
        title="Feature One"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Block
        title="Feature Two"
        content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Block
        title="Feature Three"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
      />
      <Block
        title="Feature Four"
        content="Duis aute irure dolor in reprehenderit in voluptate velit esse."
      />
    </div>
  );
};

export default RoundedBlocks;