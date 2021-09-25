import React, { useState } from 'react';
import bgImage from '../assets/up-arrow.png';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className=' scrollTopButton fixed h-10 w-10' onClick={scrollToTop}>
      <img src={bgImage} alt='' />
    </button>
  );
};

export default ScrollButton;
