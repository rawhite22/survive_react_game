import React from 'react';
import ReactDOM from 'react-dom';

import { BreakpointProvider } from 'react-socks';

import GamePlayState from './hooks/context/game_play/GamePlayState';
import MenusState from './hooks/context/menus/menuState';
import MainCharacterState from './hooks/context/main_character/MainCharacterState';
import EnemyState from './hooks/context/enemy/EnemyState';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GamePlayState>
      <MainCharacterState>
        <MenusState>
          <EnemyState>
            <BreakpointProvider>
              <App />
            </BreakpointProvider>
          </EnemyState>
        </MenusState>
      </MainCharacterState>
    </GamePlayState>
  </React.StrictMode>,
  document.getElementById('root')
);
