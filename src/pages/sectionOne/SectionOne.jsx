import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../components/ExampleCarouselImage';
import portal from '../../images/sectionone/E-portal.png'
import sky from '../../images/sectionone/skylogistic.png'
import medbooking from '../../images/sectionone/medbooking.png'
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
      <Carousel key={carouselKey} className='carousel' >
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage />
          <Carousel.Caption className='caption'>
            <div className="title">
              <h3>Sky Logistic</h3>
              <p>Sizlərə yükdaşımaları və logistika proseslərini daha sürətli və effektiv idarə etməyə imkan verən innovativ həll təqdim edirik. SkyLogistic platforması vasitəsilə sifarişlərin izlənməsi, çatdırılmaların planlaşdırılması və əməliyyatların nəzarəti vahid sistem üzərindən həyata keçirilir. Müasir və rahat interfeys sayəsində həm müştərilər, həm də idarəetmə heyəti üçün operativ və şəffaf logistika mühiti formalaşdırılır.</p>
            </div>
            <div className="img">
              <img className='medbookingSlide' src={sky} style={{ width: '800px', height: '600px', objectFit: 'cover', borderRadius: '25px' }}></img>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <ExampleCarouselImage />
          <Carousel.Caption className='caption'>
            <div className="title">
              <h3>ADDF E-Portal</h3>
              <p>Azerbaijan Deposit Insurance Fund (ADDF) üçün hazırlanmış bu sadə E-Portal səhifəsi istifadəçilərə elektron xidmətlərə rahat və sürətli çıxış imkanı yaradır. Portal vasitəsilə müraciətlərin qəbulu, məlumatların izlənməsi və elektron sənəd dövriyyəsi vahid sistem üzərindən həyata keçirilir.

                Səhifə minimal və funksional dizayn prinsipləri əsasında hazırlanaraq istifadəçi rahatlığını və operativ idarəetməni əsas prioritet kimi götürür.</p>
            </div>
            <div className="img">
              <img className='medbookingSlide' src={portal} style={{ width: '800px', height: '600px', objectFit: 'cover', borderRadius: '25px' }}></img>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage />
          <Carousel.Caption className='caption'>
            <div className="title">
              <h3>Medbooking.az</h3>
              <p>Sizlərə pasiyentlər və tibb işçiləri arasında əlaqəni daha sürətli, rahat və effektiv şəkildə nizamlayan yeni bir yanaşma təqdim edirik. Medbooking.az platforması vasitəsilə istifadəçilər həkim seçimi, onlayn qeydiyyat və tibbi xidmətlərə asan çıxış imkanı əldə edirlər. Sistem həm pasiyentlər, həm də tibb müəssisələri üçün operativ və təhlükəsiz idarəetmə mühiti yaradır.</p>
            </div>
            <div className="img">
              <img className='medbookingSlide' src={medbooking} style={{ width: '800px', height: '600px', objectFit: 'cover', borderRadius: '25px' }}></img>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
