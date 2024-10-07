import React, {useState} from 'react';
import {Box, Button, IconButton, InputAdornment, Typography} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import axios from "axios";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "../../../pages/login/verify";
import {useAuth} from "../../../hook/useAuth";
import {useModal} from "../../../hook/useModal";
import '../modal.scss'
import {GTextField} from "../../CustomMui/customMui";
import {BACK} from "../../../utils/links";
import {useTheme} from "../../../hook/useTheme";

const ModalAuth = () => {
    const {signIn} = useAuth()
    const {exitModal} = useModal()
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')

    const [authMsg, setAuthMsg] = useState('')

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
        try {
            let sendData = {...data, from: 'portal'}
            const response = await axios.post(`${BACK}/api/login`, sendData)
            setAuthMsg(response.data.message)
            if (response.status === 200) {
                setAuthMsg('')
                signIn(response.data.name, response.data.position, response.data.token);
                exitModal()
            }
        } catch (e) {
            if (e.response.status === 401) {
                setAuthMsg(e.response.data.message)
            } else {
                setAuthMsg('Неверные данные, ошибка логина или пароля')
            }
            console.log(e)
        }
    }

    const [show, setShow] = useState(false)
    const showPass = () =>{setShow(!show)}

    return (
        <Box
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{'& > :not(style)': {m: 1, width: '100'},}}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h5" gutterBottom className='modalAuthTitle' sx={{color: neonGreen}}>Авторизация в панель управления</Typography>
            <GTextField fullWidth id="login" label="E-mail" variant="standard" type='email' size='small'
                       {...register("login")} error={errors.login && true}
                       helperText={
                           errors.login ? <span style={{color: 'red'}}>{errors.login.message}</span>
                               : <span style={{height: '20px'}}> </span>
                       }
                        /*InputProps={{
                            startAdornment: (<InputAdornment position="start"><AlternateEmailIcon /></InputAdornment>),
                        }}*/
            />
            <GTextField fullWidth id="password" label="Пароль" variant="standard" type={ show ? 'text' : 'password'} size='small'
                       {...register("password")} error={errors.password && true}
                       helperText={
                           errors.password
                               ? <span style={{color: 'red'}}>{errors.password.message}</span>
                               : <span style={{height: '40px'}}> </span>
                       }
                       InputProps={{
                           /*startAdornment: (<InputAdornment position="start"><PasswordIcon /></InputAdornment>),*/
                           endAdornment:(<InputAdornment position="end" onClick={showPass}><IconButton className='black' sx={{padding: 0}}>
                               { show ?   <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                           </IconButton></InputAdornment>)
                       }}
            />
            <div >
                <Button sx={{float: 'right'}}  variant="contained" type='submit' size='small' color="success">Войти</Button>
                <span style={{float: 'left', color: "red"}}>{authMsg}</span>
            </div>
        </Box>
    );
};

export default ModalAuth;