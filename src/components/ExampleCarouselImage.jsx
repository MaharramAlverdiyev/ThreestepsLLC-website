import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div
      style={{
        height: '700px',
        // backgroundColor: '#ddd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        padding:'10px'
      }}
    >
      {text}
    </div>
  );
};

export default ExampleCarouselImage;