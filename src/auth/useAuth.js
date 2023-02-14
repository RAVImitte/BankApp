import React, { createContext, useContext, useState } from 'react'
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
    }
    
export const AuthProvider = (props) => {
    const [username,setUsername] = useState();
    const login = (user) => {
        setUsername(user);
        // console.log(username);
        return user
    }
    const logout = () => {
        setUsername(null);
        // console.log(username);
    }

    return <AuthContext.Provider value={{username,login,logout}}>
        {props.children}
    </AuthContext.Provider>
}
