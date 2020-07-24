export const healthBarFunc = (x) => {
  return {
    height: '100%',
    width: x + '%',
    ...(x <= 50 ? { backgroundColor: 'yellow' } : { backgroundColor: 'green' }),
    ...(x <= 20 && { backgroundColor: 'red' }),

    borderRadius: '5px',
    transition: 'all 1s ease',
  };
};

export const healthBarContainer = {
  width: '50vw',
  height: '4vh',
  position: 'fixed',
  top: '5px',
  right: '5px',
};

export const healthBar = (x) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',

    fontSize: '2rem',
    ...(x <= 10 && { fontSize: '1.5rem' }),
  };
};
