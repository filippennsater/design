import './App.css';

import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';


function App() {
  return (
    
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
