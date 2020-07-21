import React from 'react';

const MainChar = ({ health }) => {
  return (
    <div>
      <p>main character</p>
      <div
        style={{
          width: '50vw',
          height: '2vh',
          position: 'fixed',
          top: '5px',
          right: '5px',
        }}>
        <div
          style={{
            height: '100%',
            width: health + '%',
            backgroundColor: 'dodgerblue',
            borderRadius: '5px',
            transition: 'all 1s ease',
          }}></div>
      </div>
    </div>
  );
};

export default MainChar;
