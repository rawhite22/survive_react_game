import React, { useContext, useRef } from 'react';
import gsap from 'gsap';

import MenusContext from '../../hooks/context/menus/menuContext';

import Help from './components/help/Help';

import { mainStyle, buttonStyle, h1Style } from './styles/welcome_styles';
import { helpButton } from './styles/help_styles';

import {
  flexCenterAll,
  buttonStyleFunc,
} from '../../functions/style_functions';

const Welcome = ({ closeMenu }) => {
  const menusContext = useContext(MenusContext);
  const { helpMenu, openHelp, closeHelp } = menusContext;

  const helpIcon = useRef(null);

  return (
    <div>
      <main
        style={{
          ...flexCenterAll('column'),
          ...mainStyle,
        }}>
        <h1 style={h1Style}>Survive!</h1>
        <nav>
          <button
            style={{
              ...buttonStyleFunc(),
              ...buttonStyle,
            }}
            onClick={() => {
              closeMenu();
            }}>
            Play
          </button>

          {helpMenu ? null : (
            <i
              ref={helpIcon}
              onClick={() => {
                openHelp();
              }}
              onMouseEnter={() => {
                gsap.to(helpIcon.current, { scale: 1.5 });
              }}
              onMouseLeave={() => {
                gsap.to(helpIcon.current, { scale: 1 });
              }}
              className='fad fa-question-circle fa-2x'
              style={helpButton}></i>
          )}
        </nav>
      </main>
      {helpMenu ? <Help closeHelp={closeHelp} /> : null}
    </div>
  );
};

export default Welcome;
// const width = useCurrentWidth();
// if (width <= 500) {
//   return <p>less than 500</p>;
// } else if (width > 500 && width < 1000) {
//   return <p>greater than 500</p>;
// } else if (width >= 1000) {
//   return <p>greater than 1000</p>;
// } else {
//   console.error('its broken');
// }
