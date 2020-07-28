import React from 'react';

const Roll = ({ roll, option }) => {
  switch (roll) {
    case 1: {
      switch (option) {
        case 1:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        case 2:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        case 3:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );

        default:
          break;
      }
      break;
    }

    case 2: {
      switch (option) {
        case 1:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        case 2:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        case 3:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );

        default:
          break;
      }
      break;
    }
    case 3: {
      switch (option) {
        case 1:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        case 2:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        case 3:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );

        default:
          break;
      }
      break;
    }
    case 4: {
      switch (option) {
        case 1:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        case 2:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        case 3:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );

        default:
          break;
      }
      break;
    }
    case 5: {
      switch (option) {
        case 1: {
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        }
        case 2:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );
        case 3:
          return (
            <div>
              <p>
                you rolled a: {roll} with option:{option}
              </p>
            </div>
          );

        default:
          break;
      }
      break;
    }
    default:
      // return <p>please take a turn to continue</p>;
      return null;
  }
};

export default Roll;
