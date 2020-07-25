import React from 'react';

const Help = ({ closeHelp }) => {
  return (
    <div>
      <p>Help Component</p>
      <button
        onClick={() => {
          closeHelp();
        }}>
        close help
      </button>
    </div>
  );
};

export default Help;
