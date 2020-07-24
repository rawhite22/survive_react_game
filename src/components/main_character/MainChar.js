import React, { useRef, useEffect } from 'react';
import char from '../../images/main_alive.svg';
import {
  healthBarFunc,
  healthBarContainer,
  healthBar,
} from '../../styles/health';
import gsap from 'gsap';

const MainChar = ({ health }) => {
  let hb = useRef(undefined);
  let hbText = useRef(undefined);

  let tl = gsap.timeline({
    repeat: -1,

    defaults: {
      duration: 0.2,
      ease: 'none',
    },
  });

  useEffect(() => {
    if (health <= 20) {
      tl.to(hb.current, { scale: '1.5' })
        .to(hb.current, { scale: '1' })
        .to(hb.current, { scale: '0.5' })
        .to(hb.current, { scale: '1' });
    }
  });

  useEffect(() => {
    if (health <= 50) {
      gsap.to(hbText.current, { color: 'black' });
    }
    if (health <= 20) {
      gsap.to(hbText.current, { color: 'white' });
    }
  }, [health]);

  return (
    <div>
      <img style={{ height: '400px' }} src={char} alt='' />
      <div style={healthBarContainer}>
        <div
          ref={hb}
          style={{ ...healthBarFunc(health), ...healthBar(health) }}>
          <p ref={hbText}>{health}%</p>
        </div>
      </div>
    </div>
  );
};

export default MainChar;
