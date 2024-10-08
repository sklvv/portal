import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {BACK} from "../utils/links";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [auth, setAuth] = useState(false);

    const checkAuth = async () => {
        const token = localStorage.getItem('token')
        if (token && token !== 'undefined'){
            const response = await axios.post(`${BACK}/api/reauth`, {token})
            if (!response.data) {signOut()}
            signIn(response.data.name, response.data.token)
        } else {
            signOut()
        }
    }

    const signIn = (name, token)=> {
        localStorage.setItem('name', name);
        localStorage.setItem('token', token)
        setUser(name)
        setAuth(true)
        /*navigate('/', {replace: true})*/
    }
    const signOut = ()=> {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        setUser(null)
        setAuth(false)
        navigate('/', {replace: true})
    }

    const token = () => {
        return localStorage.getItem('token')
    }

    const value = {auth, user, signIn, signOut, checkAuth, token}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

