import React, { useContext } from 'react';

import Welcome from './components/welcome/Welcome';
import Game from './components/game_play/Game';
import GameOver from './components/game_over/GameOver';

import MainCharacterContext from './hooks/context/main_character/mainCharacterContext';
import MenusContext from './hooks/context/menus/menuContext';

import './App.css';

function App() {
  const mainCharacterContext = useContext(MainCharacterContext);
  const { health } = mainCharacterContext;

  const menusContext = useContext(MenusContext);
  const { startMenu, openMenu, closeMenu } = menusContext;

  if (startMenu) {
    return <Welcome closeMenu={closeMenu} />;
  }
  if (health > 0 && !startMenu) {
    return <Game />;
  }
  if (health <= 0) {
    return <GameOver openMenu={openMenu} />;
  }
}

export default App;
