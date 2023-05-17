import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
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
import Feedback from './components/Feedback';

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/contactus" component={ContactUs} />
        <ProtectedRoute exact path="/login" component={Login} auth={auth1} />
        <ProtectedRoute exact path="/signup" component={SignUp} auth={auth1} />
        <ProtectedRoute exact path="/roles" component={Roles} auth={auth} />
        <ProtectedRoute exact path="/logout" component={Logout} auth={auth} />
        <ProtectedRoute exact path="/foodds" component={FoodDS} auth={auth} />
        <ProtectedRoute exact path="/foodrequests" component={FoodRequests} auth={auth} />
        <ProtectedRoute exact path="/industryp" component={IndustryP} auth={auth} />
        <Route exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/feedback" component={Feedback} auth={auth} />
        <ProtectedRoute exact path="/adminlogin" component={AdminLogin} auth={auth1} />
        <ProtectedRoute exact path="/adminsignup" component={AdminSignup} auth={auth1} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
