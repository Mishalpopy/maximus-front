import React from 'react';

const LoadingBar = ({ progress, width, duration }) => {
  const label1Style = {
    position: 'absolute',
    left: 0,
    paddingRight: '50px',
    top: '30%',
    transform: 'translate(-50%, -50%)',
    color: 'white', // Set number color to white
    fontSize: '13px', // Set font size
    fontWeight: '700', // Set font weight
  };

  const label2Style = {
    position: 'absolute',
    right: 0,
    top: '30%',
    paddingLeft: '50px',
    transform: 'translate(50%, -50%)',
    marginLeft: '5px', // Add margin to the left of the number
    color: 'white', // Set number color to white
    fontSize: '13px', // Set font size
    fontWeight: '700', // Set font weight
  };

  const loadingBarContainerStyle = {
    width: '100%',
    height: '3px', // Set the height of the background line
    backgroundColor: 'rgb(217, 217, 217)', // Background color for the line
    position: 'relative',
  };

  const loadingBarStyle = {
    width: width,
    height: '3px',
    backgroundColor: 'rgb(237, 26, 56)', // Red color for loading bar
  };

  return (
    <div style={loadingBarContainerStyle}>
      <div style={label1Style}>1</div>
      <div style={loadingBarStyle}></div>
      <div style={label2Style}>2</div>
    </div>
  );
};

export default LoadingBar;
