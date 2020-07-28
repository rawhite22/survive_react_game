import React, { useContext } from 'react';
import EnemyContext from '../../../hooks/context/enemy/enemyContext';
import GamePlayContext from '../../../hooks/context/game_play/gamePlayContext';

const Fight = () => {
  const enemyContext = useContext(EnemyContext);
  const { health, setHealth } = enemyContext;

  const gamePlayContext = useContext(GamePlayContext);
  const { setFightFalse } = gamePlayContext;

  if (health > 0) {
    return (
      <div>
        <p>this is a fight</p>
        <p>Enemy Health: {health}</p>
        <button
          onClick={() => {
            setHealth();
          }}>
          attack
        </button>
      </div>
    );
  }
  if (health === 0) {
    return (
      <div>
        <p>fight over roll to continue</p>
      </div>
    );
  }
};

export default Fight;
