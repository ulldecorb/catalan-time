import React from 'react';
import './App.css';
import Converter from './components/converter';

function App() {
  const actualDate = {minutes: 0, hour: 2}
  return (
    <div className="App">
      <header className="App__header">
        <h1 className='App__title'>CATALAN TIME</h1>
      </header>
      <Converter actualDate={{actualDate}} />
    </div>
  );
}

export default App;
