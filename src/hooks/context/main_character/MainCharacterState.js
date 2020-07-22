import React, { useReducer } from 'react';

import { SET_HEALTH, RESET_HEALTH } from './types';

import MainCharacterReducer from './mainCharacterReducer';
import MainCharacterContext from './mainCharacterContext';

const MainCharacterState = (props) => {
  const initialState = {
    health: 100,
  };

  const [state, dispatch] = useReducer(MainCharacterReducer, initialState);

  const setHealth = () => {
    dispatch({ type: SET_HEALTH });
  };

  const resetHealth = () => {
    dispatch({ type: RESET_HEALTH });
  };

  return (
    <MainCharacterContext.Provider
      value={{
        health: state.health,
        setHealth,
        resetHealth,
      }}>
      {props.children}
    </MainCharacterContext.Provider>
  );
};

export default MainCharacterState;
