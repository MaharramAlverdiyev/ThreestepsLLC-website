import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div
      style={{
        height: '720px',
        display: 'flex',
        width:'100%',
        justifyContent: 'space-between',
        fontSize: '2rem',

      }}
    >
      {text}
    </div>
  );
};

export default ExampleCarouselImage;