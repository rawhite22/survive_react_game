import React from 'react';
import ReactDOM from 'react-dom';
import RollState from './hooks/context/roll/RollState';
import TurnState from './hooks/context/turn/TurnState';
import MenuState from './hooks/context/item_menu/menuState';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MenuState>
      <TurnState>
        <RollState>
          <App />
        </RollState>
      </TurnState>
    </MenuState>
  </React.StrictMode>,
  document.getElementById('root')
);
