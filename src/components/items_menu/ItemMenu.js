import React, { useContext, useRef } from 'react';
import MenuContext from '../../hooks/context/item_menu/menuContext';
import gsap from 'gsap';

const ItemMenu = ({ menu }) => {
  const menuContext = useContext(MenuContext);
  const { openMenu, closeMenu } = menuContext;
  const menuOpen = useRef(null);
  const menuClosed = useRef(null);

  switch (menu) {
    case true:
      return (
        <div ref={menuOpen}>
          <button
            onClick={() => {
              gsap.fromTo(
                menuOpen.current,
                { x: 0, opacity: 1, duration: 2 },
                {
                  x: -200,
                  opacity: 0,
                  onComplete: () => {
                    closeMenu();
                    gsap.to(menuClosed.current, { x: 0, opacity: 1 });
                  },
                }
              );
            }}>
            Close
          </button>
          <p>menu open</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
        </div>
      );

    case false:
      return (
        <div ref={menuClosed}>
          <button
            onClick={() => {
              gsap.fromTo(
                menuClosed.current,
                { x: 0, opacity: 1 },
                {
                  x: -200,
                  opacity: 0,
                  onComplete: () => {
                    openMenu();
                    gsap.to(menuOpen.current, { x: 0, opacity: 1 });
                  },
                }
              );
            }}>
            Open
          </button>
        </div>
      );

    default:
      break;
  }
};

export default ItemMenu;
