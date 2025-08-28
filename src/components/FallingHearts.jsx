import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const FallingHearts = () => {
  useEffect(() => {
    const hearts = Array.from({ length: 20 }, () => {
      const el = document.createElement('div');
      el.className = 'heart';
      el.innerText = '💗';
      document.body.appendChild(el);
      return el;
    });

    hearts.forEach((heart) => {
      const x = Math.random() * window.innerWidth;
      const delay = Math.random() * 10;
      const duration = 5 + Math.random() * 5;
      gsap.fromTo(
        heart,
        { x, y: -50, opacity: .5 },
        {
          y: window.innerHeight + 50,
          duration,
          delay,
          repeat: -1,
          ease: 'power1.in',
        }
      );
    });

    return () => hearts.forEach((el) => el.remove());
  }, []);

  return null;
};

export default FallingHearts;