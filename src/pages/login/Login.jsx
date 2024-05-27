import React, {useEffect, useState} from 'react';
import './login.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {Box, Button, Divider, IconButton, InputAdornment, Tooltip, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import {palette} from "../../utils/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import {loginSchema} from "./verify";
import axios from "axios";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth()
    const fromPage = location.state?.from?.pathname || '/';

    const [auth, setAuth] = useState(false)
    const [authMsg, setAuthMsg] = useState('')

    /*проверить что п-ль авторизован не более 1 дня*/
    const checkLogin = ()=>{
        const date = localStorage.getItem('login')
        const today = new Date();
        const currentDay = today.toISOString().slice(0,10);

        if(date !== currentDay){
            localStorage.setItem('auth', false)
        }
        return currentDay
    }

    useEffect(() => {
        checkLogin()
        const authed = JSON.parse(localStorage.getItem('auth'))
        if (authed) {
            setAuth(true);
            signIn('user', ()=> navigate(fromPage, {replace: true}));
        }
    }, [auth]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(loginSchema)
    });


    const onSubmit = async (data) => {
        setAuthMsg('Проверка данных')
        const loginDateChaeck = checkLogin()

        try {
            let sendData = {...data, from: 'iboard'}
            const response = await axios.post('https://backend.s3grdn.ru/api/login', sendData)
            setAuthMsg(response.data.message)
            if (response.status === 200) {
                setAuthMsg('')
                localStorage.setItem('auth', true);
                localStorage.setItem('name', response.data.name);
                setAuth(true)
                localStorage.setItem('login', loginDateChaeck)
            }
        } catch (e) {
            if (e.response.status === 401) {
                setAuthMsg(e.response.data.message)
            } else {
                setAuthMsg('Неверные данные')
            }
            console.log(e)
        }
    }

    const [show, setShow] = useState(false)
    const showPass = () =>{
        setShow(!show)
    }

    return (
        <div>
            <Divider  sx={{color:palette.grey["500"], fontSize: '18px', mb: 1}}>Вход</Divider>
           {/* <Typography sx={{fontWeight: 600,}} align='left' variant="h6" gutterBottom>Вход</Typography>*/}
            <Typography align='right' variant="subtitle1" sx={{color: "orange"}}>{authMsg}</Typography>

            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '100'},}}
                noValidate
                autoComplete="off"
            >
                <TextField fullWidth id="login" label="E-mail" variant="outlined" type='email' size='small'
                           {...register("login")}
                           error={errors.login && true}
                    /*helperText={errors.login && <span style={{color: 'red'}}>{errors.login.message}</span>}*/
                           helperText={
                               errors.login ? <span style={{color: 'red'}}>{errors.login.message}</span>
                                   : <span style={{height: '20px'}}> </span>
                           }
                />
                <TextField fullWidth id="password" label="Пароль" variant="outlined" type={ show ? 'text' : 'password'}
                           size='small'
                           {...register("password")}
                           error={errors.password && true}
                    /*helperText={errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}*/
                           helperText={
                               errors.password ? <span style={{color: 'red'}}>{errors.password.message}</span>
                                   : <span style={{height: '40px'}}> </span>
                           }
                           InputProps={{
                               endAdornment:(<InputAdornment position="end" onClick={showPass}><IconButton sx={{padding: 0}}>
                                  { show ?   <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                               </IconButton></InputAdornment>)
                           }}
                />
                <Button fullWidth variant="outlined" type='submit' size='small' color="success">Войти</Button>
            </Box>
            <Box sx={{textAlign: 'right', mt: 2}}>
                <Typography variant="caption" display="block" gutterBottom color={palette.grey["500"]}>
                    Ещё не зарегистрированы? <Link to='/register'>Регистрация</Link>
                </Typography>
                <Typography variant="caption" display="block" gutterBottom color={palette.grey["500"]}>
                    Забыли пароль? <Link to='/resetPassword'>Сброс пароля</Link>
                </Typography>
            </Box>
        </div>
    );
};

export  {Login};


