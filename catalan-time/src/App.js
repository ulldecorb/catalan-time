import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { Converter } from './components/converter';
import { Tutorial } from './components/tutorial';
import { Practice } from './components/practice';

function App() {
  const [initialDate, setInitialDate] = useState('');

  const setDate = () => {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    setInitialDate({ hour, minute });
  };

  useEffect(() => {
    setDate();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
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
