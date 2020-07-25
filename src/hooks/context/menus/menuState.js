import React, { useReducer } from 'react';
import MenuContext from './menuContext';
import MenuReducer from './menuReducer';
import {
  START_MENU_OPEN,
  START_MENU_CLOSED,
  OPEN_HELP,
  CLOSE_HELP,
} from './types';

const MenuState = (props) => {
  const initialState = {
    startMenu: true,
    helpMenu: false,
  };
  const [state, dispatch] = useReducer(MenuReducer, initialState);

  const openMenu = () => {
    dispatch({ type: START_MENU_OPEN });
  };
  const closeMenu = () => {
    dispatch({ type: START_MENU_CLOSED });
  };
  const openHelp = () => {
    dispatch({ type: OPEN_HELP });
  };
  const closeHelp = () => {
    dispatch({ type: CLOSE_HELP });
  };

  return (
    <MenuContext.Provider
      value={{
        startMenu: state.startMenu,
        helpMenu: state.helpMenu,
        openMenu,
        closeMenu,
        openHelp,
        closeHelp,
      }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
