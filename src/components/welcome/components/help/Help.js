import React, { useRef, useEffect } from 'react';

import gsap from 'gsap';

import { helpContainer } from './styles';

const Help = ({ closeHelp }) => {
  const helpRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(helpRef.current, { opacity: 0 }, { opacity: 1 });
  });

  return (
    <div style={helpContainer} ref={helpRef}>
      <p>How to play</p>
      <button
        onClick={() => {
          gsap.to(helpRef.current, { opacity: 0, onComplete: closeHelp });
        }}>
        <i className='fas fa-times-circle fa-2x'></i>
      </button>
    </div>
  );
};

export default Help;
