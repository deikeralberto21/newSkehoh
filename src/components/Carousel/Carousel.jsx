import { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import chocolates from './arrayChocolates';

export default function Carousel({ handleEvent }) {
  const [styleCarousel, setStyleCarousel] = useState('chocolate_carousel');
  const carouselRef = useRef(null);

  useEffect(() => {
    const isScrollBarActive = carouselRef.current.scrollWidth > carouselRef.current.clientWidth;
    const newStyleCarousel = isScrollBarActive ? 'chocolate_carousel' : 'chocolate_carousel chocolate_carousel--center';
    setStyleCarousel(newStyleCarousel);
  }, []);

  return (
    <div className={styleCarousel} ref={carouselRef}>
      {chocolates.map((element, index) => (
        <div key={element.name} onClick={() => handleEvent(element.name)} className='card'>
          <img src={`/img/${element.name}.png`} alt="" />
        </div>
      ))}
    </div>
  );
}
