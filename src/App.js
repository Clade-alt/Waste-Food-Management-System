import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
    </>
  );
}

export default App;
