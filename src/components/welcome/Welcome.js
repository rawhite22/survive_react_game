import React from 'react';
import { useCurrentWidth } from 'react-socks';

import { mainStyle, buttonStyle, h1Style } from './styles/welcome_styles';

import {
  flexCenterAll,
  buttonStyleFunc,
} from '../../functions/style_functions';

const Welcome = ({ setStartMenu }) => {
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
            setStartMenu(false);
          }}>
          Play
        </button>

        <i
          onClick={() => {
            console.log('help clicked');
          }}
          class='fad fa-question-circle fa-2x'
          style={{ color: 'blue' }}></i>
      </nav>
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
