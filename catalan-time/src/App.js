import React, { useEffect, useState } from 'react';
import './App.css';
import Converter from './components/converter';

function App() {
  const [ initialDate, setInitialDate ] = useState('')
  
  const setDate = () => {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    setInitialDate({ hour, minute});
  }

  useEffect(() => {
    setDate()
  },[])
  
  return (
    <div className="App">
      <header className="App__header">
        <h1 className='App__title'>CATALAN TIME</h1>
      </header>
      <Converter initialDate={initialDate} />
    </div>
  );
}

export default App;
