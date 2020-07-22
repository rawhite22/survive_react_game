import React, { useContext } from 'react';

import RollContext from '../../hooks/context/roll/rollContext';
import TurnContext from '../../hooks/context/turn/turnContext';

import mainCharacter from '../../images/main_dead.png';

import {
  mainStyle,
  mainCharImg,
  sectionStyle,
  buttonStyle,
  navStyle,
} from './styles/game_over_styles';

const GameOver = ({ setHealth, setStartMenu }) => {
  const rollContext = useContext(RollContext);
  const { resetRoll } = rollContext;
  const turnContext = useContext(TurnContext);
  const { setTurn } = turnContext;
  return (
    <main style={mainStyle}>
      <section style={sectionStyle}>
        <p>GameOver</p>
        <img style={mainCharImg} src={mainCharacter} alt='main-character' />
      </section>
      <nav style={navStyle}>
        <button
          style={buttonStyle}
          onClick={() => {
            resetRoll();
            setTurn();
            setHealth(100);
          }}>
          Try Again
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
            setHealth(100);
            setStartMenu(true);
          }}>
          return home
        </button>
      </nav>
    </main>
  );
};

export default GameOver;
