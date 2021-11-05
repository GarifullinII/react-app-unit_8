import './App.css';
import React from 'react';

function App() {

  const h1 = React.createElement('h1', {}, 'unit_08');

  const h2 = React.createElement('h2', {
    'className': 'text-orange' 
  }, 'header 2')

  const p = React.createElement('p', {
    'style': {
      'color': 'red'
    }
  }, 'this is p');

  const input = React.createElement('input', {
    value: 55
  })

  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
    </>
  );
}

export default App;
