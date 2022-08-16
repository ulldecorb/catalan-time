import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Converter from './components/converter';
import Tutorial from './components/tutorial';
import Practice from './components/practice';

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
      <Router>
    <div className="App">
      <header className="App__header">
        <h1 className='App__title'>CATALAN TIME</h1>
      </header>
        <Routes>
          <Route
            path="/"
            element={
              <Converter initialDate={initialDate} />
            }
            />
          <Route
            path="/tutorial"
            element={
              <Tutorial />
            }
            />
          <Route
            path="/practice"
            element={
              <Practice />
            }
            />
            </Routes>
    </div>
      </Router>
  );
}

export default App;
