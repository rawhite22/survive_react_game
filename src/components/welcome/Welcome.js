import React from 'react';

import { mainStyle, buttonStyle, h1Style } from './styles/welcome_styles';

import {
  flexCenterAll,
  buttonStyleFunc,
} from '../../functions/style_functions';

const Welcome = ({ setStartMenu }) => {
  return (
    <main style={{ ...flexCenterAll('column'), ...mainStyle }}>
      <h1 style={h1Style}>welcome</h1>
      <nav>
        <button
          style={{ ...buttonStyleFunc(), ...buttonStyle }}
          onClick={() => {
            setStartMenu(false);
          }}>
          Play
        </button>
      </nav>
    </main>
  );
};

export default Welcome;
