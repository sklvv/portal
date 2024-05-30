import {useEffect, useState} from "react";


export const useAuthUpdate = ()=> {
    const [auth, setAuth] = useState(false)
    let authed = JSON.parse(localStorage.getItem('auth'))
    useEffect(()=>{
        setAuth(authed)
    },[])

    return {auth, setAuth}
}