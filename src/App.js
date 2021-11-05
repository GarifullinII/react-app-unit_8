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

  const p1 = 'hi';

  const p2 = 'world';

  const div = React.createElement('div', {
    'className': 'text-grey'
  }, p1, p2);

  return (
    <>
      {h1}
      {h2}
      {p}
      {div}
      {input}
    </>
  );
}

export default App;
