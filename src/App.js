import React, { useState, useContext } from 'react';

import Welcome from './components/welcome/Welcome';
import Game from './components/game_play/Game';
import GameOver from './components/game_over/GameOver';

import MainCharacterContext from './hooks/context/main_character/mainCharacterContext';

import './App.css';

function App() {
  const mainCharacterContext = useContext(MainCharacterContext);
  const { health } = mainCharacterContext;

  const [startMenu, setStartMenu] = useState(true);

  if (startMenu) {
    return <Welcome setStartMenu={setStartMenu} />;
  }
  if (health > 0 && !startMenu) {
    return <Game />;
  }
  if (health <= 0) {
    return <GameOver setStartMenu={setStartMenu} />;
  }
}

export default App;
