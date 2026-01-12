import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../components/ExampleCarouselImage';
import medbookingImg from '../../images/sectionone/medbooking.jpg'
import logo from '../../images/logo/logo_threestpes-one.png'
import '../sectionOne/sectionone.css'


function IndividualIntervalsExample() {
  const [carouselKey, setCarouselKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselKey(prev => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='sectionOne'>
      <Carousel key={carouselKey} style={{border:'1px solid black'}} className='carousel' >
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption className='caption'>
            <div className="title">
              <h3>Medbooking.az</h3>
              <p>Sizlərə pasient və tibb işçiləri arasında əlaqəni nizamlayan yeni bir yanaşma təqdim edirik</p>
            </div>
            <div className="img">
              <img className='medbookingSlide' src={medbookingImg} style={{ width: '800px', height: '600px', objectFit: 'cover', borderRadius:'25px' }}></img>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption className='caption'>
            <div className="title">
              <h3>Medbooking.az</h3>
              <p>Sizlərə pasient və tibb işçiləri arasında əlaqəni nizamlayan yeni bir yanaşma təqdim edirik</p>
            </div>
            <div className="img">
              <img className='medbookingSlide' src={logo} style={{ width: '800px', height: '600px', objectFit: 'cover', borderRadius:'25px' }}></img>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption className='caption'>
            <div className="title">
              <h3>Medbooking.az</h3>
              <p>Sizlərə pasient və tibb işçiləri arasında əlaqəni nizamlayan yeni bir yanaşma təqdim edirik</p>
            </div>
            <div className="img">
              <img className='medbookingSlide' src={medbookingImg} style={{ width: '800px', height: '600px', objectFit: 'cover', borderRadius:'25px' }}></img>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
