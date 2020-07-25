import React, { useContext } from 'react';
import { useCurrentWidth } from 'react-socks';

import MenusContext from '../../hooks/context/menus/menuContext';

import Help from './components/Help';

import { mainStyle, buttonStyle, h1Style } from './styles/welcome_styles';

import {
  flexCenterAll,
  buttonStyleFunc,
} from '../../functions/style_functions';

const Welcome = ({ closeMenu }) => {
  const menusContext = useContext(MenusContext);
  const { helpMenu, openHelp, closeHelp } = menusContext;

  return (
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

        <i
          onClick={() => {
            openHelp();
          }}
          class='fad fa-question-circle fa-2x'
          style={{ color: 'blue', cursor: 'pointer' }}></i>
      </nav>
      {helpMenu ? <Help closeHelp={closeHelp} /> : null}
    </main>
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
