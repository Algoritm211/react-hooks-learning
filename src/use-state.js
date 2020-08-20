import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <HookSwitcher />
  )
}

const HookSwitcher = () => {
  const [color, setColor] = useState('black')
  const [fontSize, setFontSize] = useState(14)
  return(
    <div style={{padding: '10px', backgroundColor: color, fontSize: `${fontSize}px`}}>
      Hello
      <button onClick={() => setColor('black')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize((state) => state + 2)}>+</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))