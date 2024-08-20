import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Create a provider component
 function AuthProvider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    //if it is true no log in page will be shown 
    //when it is false it shows the login page
   
    
    // Function to log in the user (this could be more complex in a real app)
    const login = () => {
        setIsLoggedIn(true);
    };

    // Function to log out the user
    const logout = () => {
        setIsLoggedIn(false);
    };
     // i have set a timeout function to make the isloggedin false after
    //10sec
    useEffect(()=>{
        setTimeout(logout,10000);
    },[])
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
