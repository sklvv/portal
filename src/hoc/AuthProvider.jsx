import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [auth, setAuth] = useState(false);

    const date = localStorage.getItem('logged')
    const today = new Date();
    const currentDay = today.toISOString().slice(0,10);

    const checkLogin = ()=>{
        const name = localStorage.getItem('name')
        if( date !== currentDay || !name){
            signOut()
        }
        else {
            signIn(name)
        }
    }

    const signIn = (newUser)=> {
        localStorage.setItem('auth', JSON.stringify(true));
        localStorage.setItem('name', newUser);
        localStorage.setItem('logged', currentDay)
        setUser(newUser)
        setAuth(true)
        navigate('/', {replace: true})
    }
    const signOut = ()=> {
        localStorage.removeItem('auth');
        localStorage.removeItem('name');
        localStorage.removeItem('logged');
        setUser(null)
        navigate('/', {replace: true})
    }

    const value = {auth, user, signIn, signOut, checkLogin}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

