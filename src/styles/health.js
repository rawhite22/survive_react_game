export const healthBar = (x) => {
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
  height: '2vh',
  position: 'fixed',
  top: '5px',
  right: '5px',
};
