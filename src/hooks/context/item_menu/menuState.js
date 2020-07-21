import React, { useReducer } from 'react';
import MenuContext from './menuContext';
import MenuReducer from './menuReducer';
import { OPEN_MENU, CLOSE_MENU } from '../types';

const MenuState = (props) => {
  const initialState = {
    menu: false,
  };
  const [state, dispatch] = useReducer(MenuReducer, initialState);

  const openMenu = () => {
    dispatch({ type: OPEN_MENU });
  };
  const closeMenu = () => {
    dispatch({ type: CLOSE_MENU });
  };
  return (
    <MenuContext.Provider
      value={{
        menu: state.menu,
        openMenu,
        closeMenu,
      }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
