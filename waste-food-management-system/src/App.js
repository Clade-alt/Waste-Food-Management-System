import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Roles from './components/Roles';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';
import { useEffect } from 'react';
import FoodDS from './components/FoodDS';
import FoodRequests from './components/FoodRequests';
import IndustryP from './components/IndustryP';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';

function App() {

  // Check if the user is logged in
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: 'GET',
        headers: {
          Accept: "applicaiton/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res.status === 200) {
        setauth(true)
        setauth1(false)
      }
      if (res.status === 401) {
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  },)


  return (
    <>
      <Navbar auth={auth1} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path='/' element={<ProtectedRoute />}>
          <Route exact path="/login" element={<Login />} auth={auth1} />
          <Route exact path="/signup" element={<SignUp />} auth={auth1} />
          <Route exact path="/roles" element={<Roles />} auth={auth} />
          <Route exact path="/logout" element={<Logout />} auth={auth} />
          <Route exact path="/foodds" element={<FoodDS />} auth={auth} />
          <Route exact path="/foodrequests" element={<FoodRequests />} auth={auth} />
          <Route exact path="/industryp" element={<IndustryP />} auth={auth} />
          <Route exact path="/dashboard" element={<Dashboard/>} auth={auth} />
          <Route exact path="/adminlogin" element={<AdminLogin/>} auth={auth} />
          <Route exact path="/adminsignup" element={<AdminSignup/>} auth={auth} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
