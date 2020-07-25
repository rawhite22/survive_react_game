import {
  START_MENU_OPEN,
  START_MENU_CLOSED,
  OPEN_HELP,
  CLOSE_HELP,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case START_MENU_OPEN:
      return { ...state, startMenu: true };
    case START_MENU_CLOSED:
      return { ...state, startMenu: false };
    case OPEN_HELP:
      return { ...state, helpMenu: true };
    case CLOSE_HELP:
      return { ...state, helpMenu: false };
    default:
      break;
  }
};
