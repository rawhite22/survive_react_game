import {
  SET_ROLL,
  ROLL_RESET,
  TURN_INCREASE,
  SET_TURN,
  SET_OPTION,
  SET_FIGHT_TRUE,
  SET_FIGHT_FALSE,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_ROLL:
      return { ...state, roll: action.payload };
    case ROLL_RESET:
      return { ...state, roll: null };
    case TURN_INCREASE:
      return { ...state, turn: state.turn + 1 };
    case SET_TURN:
      return { ...state, turn: (state.turn = action.payload) };
    case SET_OPTION:
      return { ...state, option: action.payload };
    case SET_FIGHT_TRUE:
      return { ...state, fight: true };
    case SET_FIGHT_FALSE:
      return { ...state, fight: false };
    default:
      break;
  }
};
