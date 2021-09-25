import React from 'react';
import bgImage from '../assets/up-arrow.png';

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <button className=' scrollTopButton fixed h-10 w-10' onClick={scrollToTop}>
      <img src={bgImage} alt='' />
    </button>
  );
};

export default ScrollButton;
