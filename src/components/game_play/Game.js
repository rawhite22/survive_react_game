import React, { useContext } from 'react';

import GamePlayContext from '../../hooks/context/game_play/gamePlayContext';
import MainCharacterContext from '../../hooks/context/main_character/mainCharacterContext';

import Roll from '../../components/roll/Roll';

import MainChar from '../../components/main_character/MainChar';

const Game = () => {
  const gamePlayContext = useContext(GamePlayContext);
  const {
    turn,
    roll,
    setRoll,
    increaseTurn,
    setOption,
    option,
  } = gamePlayContext;

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
            setOption();
            increaseTurn();
          }}>
          Roll
        </button>

        <MainChar health={health} />
        <Roll roll={roll} option={option} />
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
