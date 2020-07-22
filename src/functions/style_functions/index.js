// utility functions
export const flexCenterAll = (fd) => {
  return {
    display: 'flex',
    flexDirection: fd,
    justifyContent: 'center',
    alignItems: 'center',
  };
};

// buttons

export const buttonStyleFunc = () => {
  return {
    border: 'none',
    padding: '12px 24px',
    textAlign: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
  };
};
