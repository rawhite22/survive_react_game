import React from 'react';
import ReactDOM from 'react-dom';

import { BreakpointProvider } from 'react-socks';

import RollState from './hooks/context/roll/RollState';
import TurnState from './hooks/context/turn/TurnState';
import MenusState from './hooks/context/menus/menuState';
import MainCharacterState from './hooks/context/main_character/MainCharacterState';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <TurnState>
      <RollState>
        <MainCharacterState>
          <MenusState>
            <BreakpointProvider>
              <App />
            </BreakpointProvider>
          </MenusState>
        </MainCharacterState>
      </RollState>
    </TurnState>
  </React.StrictMode>,
  document.getElementById('root')
);
