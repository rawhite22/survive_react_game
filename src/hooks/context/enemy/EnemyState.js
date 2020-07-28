import React, { useReducer } from 'react';
import { SET_HEALTH, RESET_HEALTH } from './types';

import EnemyReducer from './enemyReducer';
import EnemyContext from './enemyContext';

const EnemyState = (props) => {
  const initialState = {
    health: 100,
  };

  const [state, dispatch] = useReducer(EnemyReducer, initialState);

  const setHealth = () => {
    dispatch({ type: SET_HEALTH });
  };

  const resetHealth = () => {
    dispatch({ type: RESET_HEALTH });
  };

  return (
    <EnemyContext.Provider
      value={{
        health: state.health,
        setHealth,
        resetHealth,
      }}>
      {props.children}
    </EnemyContext.Provider>
  );
};

export default EnemyState;
