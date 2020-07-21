import React, { useReducer } from 'react';
import TurnContext from './turnContext';
import TurnReducer from './turnReducer';
import { TURN_INCREASE, SET_TURN } from '../types';

const TurnState = (props) => {
  const initialState = {
    turn: 0,
  };
  const [state, dispatch] = useReducer(TurnReducer, initialState);

  const increaseTurn = () => {
    dispatch({ type: TURN_INCREASE });
  };
  const setTurn = () => {
    dispatch({ type: SET_TURN });
  };
  return (
    <TurnContext.Provider
      value={{
        turn: state.turn,
        increaseTurn,
        setTurn,
      }}>
      {props.children}
    </TurnContext.Provider>
  );
};

export default TurnState;
