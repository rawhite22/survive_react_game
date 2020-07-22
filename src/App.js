import React, { useContext, useState } from 'react';

import RollContext from './hooks/context/roll/rollContext';
import TurnContext from './hooks/context/turn/turnContext';
import MenuContext from './hooks/context/item_menu/menuContext';

import Roll from './components/roll/Roll';
import ItemMenu from './components/items_menu/ItemMenu';
import MainChar from './components/main_character/MainChar';
import GameOver from './components/game_over/GameOver';

import './App.css';

function App() {
  const rollContext = useContext(RollContext);
  const { setRoll, roll } = rollContext;
  const turnContext = useContext(TurnContext);
  const { turn, increaseTurn } = turnContext;
  const menuContext = useContext(MenuContext);
  const { menu } = menuContext;

  const [health, setHealth] = useState(100);
  const [startMenu, setStartMenu] = useState(true);
  if (startMenu) {
    return (
      <div>
        <p>welcome</p>
        <button
          onClick={() => {
            setStartMenu(false);
          }}>
          Play
        </button>
      </div>
    );
  }
  if (health > 0 && !startMenu) {
    return (
      <div>
        {health <= 20 ? (
          <div
            style={{
              backgroundColor: 'red',
              height: '100vh',
              width: '100vw',
              opacity: '0.1',
              zIndex: '-1',
              position: 'absolute',
            }}></div>
        ) : null}
        <div>
          {turn === 0 ? null : <p>{turn}</p>}
          <button
            onClick={() => {
              setRoll();
              increaseTurn();
            }}>
            Roll
          </button>
          <MainChar health={health} />
          <Roll roll={roll} />
          <button
            onClick={() => {
              setHealth(health - 10);
            }}>
            -hp
          </button>
          <ItemMenu menu={menu} />
        </div>
      </div>
    );
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
