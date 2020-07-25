import React, { useContext } from 'react';

import RollContext from '../../hooks/context/roll/rollContext';
import TurnContext from '../../hooks/context/turn/turnContext';

import MainCharacterContext from '../../hooks/context/main_character/mainCharacterContext';

import Roll from '../../components/roll/Roll';

import MainChar from '../../components/main_character/MainChar';

const Game = () => {
  const rollContext = useContext(RollContext);
  const { setRoll, roll } = rollContext;

  const turnContext = useContext(TurnContext);
  const { turn, increaseTurn } = turnContext;

  const mainCharacterContext = useContext(MainCharacterContext);
  const { health, setHealth } = mainCharacterContext;

  return (
    <main>
      {health <= 20 ? (
        <div
          style={{
            backgroundColor: 'red',
            height: '100vh',
            width: '100vw',
            opacity: '0.2',
            zIndex: '-1',
            position: 'absolute',
          }}></div>
      ) : null}
      <div>
        {turn === 0 ? null : <p>{turn}</p>}
        <button
          onClick={() => {
            setRoll();
            increaseTurn();
          }}>
          Roll
        </button>
        <MainChar health={health} />
        <Roll roll={roll} />
        <button
          onClick={() => {
            setHealth();
          }}>
          -hp
        </button>
      </div>
    </main>
  );
};

export default Game;
