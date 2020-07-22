import React from 'react';
import char from '../../images/main_alive.svg';
import { healthBar, healthBarContainer } from '../../styles/health';
import gsap from 'gsap';

const MainChar = ({ health }) => {
  let tl = gsap.timeline({
    repeat: -1,

    defaults: {
      duration: 0.2,
      ease: 'none',
    },
  });

  if (health <= 20) {
    tl.to('.healthBar', { scale: '1.5' })
      .to('.healthBar', { scale: '1' })
      .to('.healthBar', { scale: '0.5' })
      .to('.healthBar', { scale: '1' });
  }

  return (
    <div>
      <img style={{ height: '100px' }} src={char} alt='' />
      <div style={healthBarContainer}>
        <div className='healthBar' style={healthBar(health)}></div>
      </div>
    </div>
  );
};

export default MainChar;
