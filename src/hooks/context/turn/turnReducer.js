import { TURN_INCREASE, SET_TURN } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TURN_INCREASE:
      return { ...state, turn: state.turn + 1 };
    case SET_TURN:
      return { ...state, turn: (state.turn = 0) };
    default:
      break;
  }
};
