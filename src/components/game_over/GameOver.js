import React, { useContext } from 'react';
import RollContext from '../../hooks/context/roll/rollContext';
import TurnContext from '../../hooks/context/turn/turnContext';
import mainCharacter from '../../images/main_alive.svg';

import { mainStyle } from './game_over_styles';

const GameOver = ({ setHealth, setStartMenu }) => {
  const rollContext = useContext(RollContext);
  const { resetRoll } = rollContext;
  const turnContext = useContext(TurnContext);
  const { setTurn } = turnContext;
  return (
    <main style={mainStyle}>
      <p>GameOver</p>
      <div>
        <img
          style={{ height: '30vh', width: 'auto' }}
          src={mainCharacter}
          alt='main-character'
        />
      </div>
      <button
        onClick={() => {
          resetRoll();
          setTurn();
          setHealth(100);
        }}>
        Try Again
      </button>
      <button
        onClick={() => {
          setHealth(100);
          setStartMenu(true);
        }}>
        return home
      </button>
    </main>
  );
};

export default GameOver;
