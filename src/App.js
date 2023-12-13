import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <h1>Test strip</h1>
      </div>
    </Router>
  );
};

export default App;
