import React, { useEffect, useRef } from 'react';
import './FadeInSection.css';

const FadeInSection = (props) => {
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && domRef.current.classList.add('fade-in'));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className="fade-in-section" ref={domRef}>
      {props.children}
    </div>
  );
};

export default FadeInSection;
