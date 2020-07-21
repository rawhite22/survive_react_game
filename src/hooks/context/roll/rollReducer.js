import { SET_ROLL, ROLL_RESET } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ROLL:
      return { ...state, roll: action.payload };
    case ROLL_RESET:
      return { ...state, roll: null };
    default:
      break;
  }
};
