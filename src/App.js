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

  const input7 = React.createRef('');
  const [val, setVal] = React.useState([]);
  function getVal() {
    if(input7.current.value.length > 0) {
      let newVal = [...val];

      newVal.push(input7.current.value);

      setVal(newVal);

      input7.current.value = '';
    } else {
      return false
    }
  }
  

  return (
    <>
      {h1}
      {h2}
      {p}
      {div}
      {input}
      <div>
        <input type="text" ref={input7} />
        <button onClick={getVal}>Click</button>
        <ul>
          {val.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </>
  );
}

export default App;
