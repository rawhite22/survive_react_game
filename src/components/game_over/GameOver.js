import React, { useContext } from 'react';

import GamePlayContext from '../../hooks/context/game_play/gamePlayContext';
import MainCharacterContext from '../../hooks/context/main_character/mainCharacterContext';

import mainCharacter from '../../images/main_dead.png';

import {
  mainStyle,
  mainCharImg,
  sectionStyle,
  buttonStyle,
  navStyle,
} from './styles/game_over_styles';

const GameOver = ({ openMenu }) => {
  const gamePlayContext = useContext(GamePlayContext);
  const { resetRoll, setTurn } = gamePlayContext;
  const mainCharacterContext = useContext(MainCharacterContext);
  const { resetHealth } = mainCharacterContext;
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
            setTurn(0);
            resetHealth();
          }}>
          Try Again
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
            resetRoll();
            setTurn(0);
            resetHealth();
            openMenu();
          }}>
          return home
        </button>
      </nav>
    </main>
  );
};

export default GameOver;
