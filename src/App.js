import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
