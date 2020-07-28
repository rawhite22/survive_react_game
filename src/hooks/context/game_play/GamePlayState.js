import React, { useReducer } from 'react';
import GamePlayContext from './gamePlayContext';
import GamePlayReducer from './gamePlayReducer';

import { rn } from '../../../functions/random_number/randomNumber';
import {
  SET_ROLL,
  ROLL_RESET,
  SET_TURN,
  TURN_INCREASE,
  SET_OPTION,
  SET_FIGHT_TRUE,
  SET_FIGHT_FALSE,
} from './types';

const GamePlayState = (props) => {
  const initialState = {
    roll: null,
    turn: 0,
    option: null,
    fight: false,
  };
  const [state, dispatch] = useReducer(GamePlayReducer, initialState);

  const setRoll = () => {
    let x = rn(5);
    dispatch({ type: SET_ROLL, payload: x });
  };

  const resetRoll = () => {
    dispatch({ type: ROLL_RESET });
  };

  const increaseTurn = () => {
    dispatch({ type: TURN_INCREASE });
  };
  const setTurn = (x) => {
    dispatch({ type: SET_TURN, payload: x });
  };
  const setOption = () => {
    let x = rn(3);
    dispatch({ type: SET_OPTION, payload: x });
  };

  const setFightTrue = () => {
    dispatch({ type: SET_FIGHT_TRUE });
  };
  const setFightFalse = () => {
    dispatch({ type: SET_FIGHT_FALSE });
  };

  const { roll, turn, option, fight } = state;

  return (
    <GamePlayContext.Provider
      value={{
        roll,
        turn,
        option,
        fight,
        setRoll,
        resetRoll,
        increaseTurn,
        setTurn,
        setOption,
        setFightTrue,
        setFightFalse,
      }}>
      {props.children}
    </GamePlayContext.Provider>
  );
};

export default GamePlayState;
