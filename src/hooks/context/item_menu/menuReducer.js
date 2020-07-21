import { OPEN_MENU, CLOSE_MENU } from '../types';

export default (state, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return { ...state, menu: true };
    case CLOSE_MENU:
      return { ...state, menu: false };
    default:
      break;
  }
};
