import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../Card';

const Carousel = ({ elements, toRight, keyId }) => {
  const [currentIndex, setCurrentIndex] = useState(toRight ? 0 : elements.length - 1);
  const containerRef = useRef(null);

  const itemWidth = 220;
  const autoplayInterval = 2500;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => toRight ? prevIndex + 1 : prevIndex - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(toRight ? 0 : elements.length - 1);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const extendedElements = [...elements, ...elements];

  const getTranslateX = () => {
    const totalItems = extendedElements.length;
    let translate = -(currentIndex * itemWidth);

    if(toRight) {
        if (currentIndex >= totalItems / 2) {
            setTimeout(() => {
                setCurrentIndex(0);
            }, 700);
        }
    }
    else {
        if (currentIndex <= 0) {
            setTimeout(() => {
                setCurrentIndex(totalItems / 2);
            }, 700);
        }
    }

    return `${translate}px`;
  };

  return (
    <div
      className="w-[calc(1440px)] flex flex-col items-start relative pt-12 -mt-12 overflow-hidden"
      key={keyId}
    >
      <div
        ref={containerRef}
        className="flex justify-start transition-transform duration-700 ease-in-out"
        style={{
          width: `${extendedElements.length * itemWidth}px`,
          transform: `translateX(${getTranslateX()})`,
        }}
      >
        {extendedElements.map((elm, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
            style={{ width: `${itemWidth}px` }}
          >
            <Card>
              <img src={elm.icon} alt={elm.name} className="w-24" />
              <h4 className="poppins font-medium">{elm.name}</h4>
            </Card>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex w-full gap-2 mt-6 flex-wrap justify-center">
        {elements.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex % elements.length ? 'bg-blue-500' : 'bg-gray-400'
            } transition-colors duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export { Carousel };
