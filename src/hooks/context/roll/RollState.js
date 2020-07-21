import React, { useReducer } from 'react';
import RollContext from './rollContext';
import RollReducer from './rollReducer';
import { rn } from '../../../functions/random_number/randomNumber';
import { SET_ROLL, ROLL_RESET } from '../types';

const RollState = (props) => {
  const initialState = {
    roll: null,
  };
  const [state, dispatch] = useReducer(RollReducer, initialState);

  const setRoll = () => {
    let x = rn(5);
    dispatch({ type: SET_ROLL, payload: x });
  };

  const resetRoll = () => {
    dispatch({ type: ROLL_RESET });
  };

  return (
    <RollContext.Provider
      value={{
        roll: state.roll,
        setRoll,
        resetRoll,
      }}>
      {props.children}
    </RollContext.Provider>
  );
};

export default RollState;
