import React, { useState } from 'react';

import Welcome from './components/welcome/Welcome';
import Game from './components/game_play/Game';
import GameOver from './components/game_over/GameOver';

import './App.css';

function App() {
  const [health, setHealth] = useState(100);

  const [startMenu, setStartMenu] = useState(true);

  if (startMenu) {
    return <Welcome setStartMenu={setStartMenu} />;
  }
  if (health > 0 && !startMenu) {
    return <Game health={health} setHealth={setHealth} />;
  }
  if (health <= 0) {
    return (
      <GameOver
        health={health}
        setHealth={setHealth}
        setStartMenu={setStartMenu}
      />
    );
  }
}

export default App;
