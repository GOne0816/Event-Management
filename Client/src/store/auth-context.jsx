import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Store token in both state and localStorage
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // Sign out user by clearing token
  const signoutUser = () => {
    setToken(""); // Clear state
    localStorage.removeItem("token"); // Clear localStorage
  };

  return (
    <AuthContext.Provider value={{ token, storeTokenInLS, signoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


