import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const style = {
    display: 'flex',
    width: 700,
  };
  return (
    <div style={style}>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
