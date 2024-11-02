import React from 'react';

const Title = ({ text }) => {
  return (
    <h1 className="text-5xl font-bold text-center my-8 max-w-7xl mx-auto">
      {text}
    </h1>
  );
};

export default Title;