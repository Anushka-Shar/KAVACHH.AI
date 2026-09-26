import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
       const [role, setRole] = useState(null);
       const [user, setUser] = useState(null); // { name, email, phone } — optional, set by Login/Register

       const login = (userRole, userData = null) => {
              setRole(userRole);
              if (userData) setUser(userData);
       };

       const logout = () => {
              setRole(null);
              setUser(null);
       };

       return (
              <AuthContext.Provider value={{ role, user, login, logout }}>
                     {children}
              </AuthContext.Provider>
       );
}


