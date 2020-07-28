import { SET_HEALTH, RESET_HEALTH } from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_HEALTH:
      return { ...state, health: state.health - 10 };
    case RESET_HEALTH:
      return { ...state, health: (state.health = 100) };

    default:
      break;
  }
};
