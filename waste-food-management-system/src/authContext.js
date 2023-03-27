import React, { createContext, useState, useContext } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Define the AuthProvider component
export function AuthProvider({ children }) {
  // Use state to keep track of the user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Define the login function that sets isLoggedIn to true
  function login() {
    setIsLoggedIn(true);
  }

  // Define the logout function that sets isLoggedIn to false
  function logout() {
    setIsLoggedIn(false);
  }

  // Provide the authentication context to the rest of the application
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Define the useAuth hook to access the authentication context
export function useAuth() {
  return useContext(AuthContext);
}