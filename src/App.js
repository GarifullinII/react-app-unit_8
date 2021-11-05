import './App.css';
import React from 'react';

function App() {

  const h1 = React.createElement('h1', {}, 'unit_08');

  const h2 = React.createElement('h2', {
    'className': 'text-orange' 
  }, 'header 2')

  return (
    <>
      {h1}
      {h2}
    </>
  );
}

export default App;
