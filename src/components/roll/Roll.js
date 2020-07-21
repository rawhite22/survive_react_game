import React from 'react';

const Roll = ({ roll }) => {
  switch (roll) {
    case 1:
      return (
        <div>
          <p>you rolled a: </p>
          <p> {roll}</p>
        </div>
      );
    case 2:
      return (
        <div>
          <p>you rolled a: </p>
          <p> {roll}</p>
        </div>
      );
    case 3:
      return (
        <div>
          <p>you rolled a:</p>
          <p>{roll}</p>
        </div>
      );
    case 4:
      return (
        <div>
          <p>you rolled a:</p>
          <p>{roll}</p>
        </div>
      );
    case 5:
      return (
        <div>
          <p>you rolled a:</p>
          <p>{roll}</p>
        </div>
      );

    default:
      // return <p>please take a turn to continue</p>;
      return null;
  }
};

export default Roll;
