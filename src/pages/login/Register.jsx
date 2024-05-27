import React, {useState} from 'react';
import './login.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {Box, Button, Divider, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import {palette} from "../../utils/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import {registerSchema} from "./verify";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth()
    const fromPage = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(registerSchema)
    });

    const [regMsg, setRegMsg] = useState('')
    const [regMsg2, setRegMsg2] = useState('')

    const onSubmit = async (data) => {
        /*signIn('user', ()=> navigate(fromPage, {replace: true}));*/
        /*console.log(regMsg)
        console.log(data)*/
        try {
           const res = await axios.post('https://backend.s3grdn.ru/api/register', data)
/*            console.log(res.data.result.id)*/
            if (res.data.result.id === 200){
                setRegMsg("Пользователь успешно зарегистрирован")
                setTimeout(function (){
                    setRegMsg2('Дождитесь подтверждения вашей учетной записи администратором')
                }, 1000)
                setTimeout(function (){
                    navigate(fromPage, {replace: true})
                }, 5000)

            }
        } catch (e) {

        }


    }

    return (
        <div>
            <Divider  sx={{color:palette.grey["500"], fontSize: '18px', mb: 1}}>Регистрация в системе</Divider>
            {/*<Typography sx={{fontWeight: 600}} align='left' variant="h6" gutterBottom>Регистрация в системе</Typography>*/}
            <Typography align='right' variant="subtitle1" sx={{color: palette.grey["500"]}}>{regMsg}</Typography>
            <Typography align='right' variant="subtitle1" sx={{color: palette.grey["500"]}}>{regMsg2}</Typography>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '100'},}}
                noValidate
                autoComplete="off"
            >
                <TextField fullWidth  id="name" label="Имя"  variant="outlined" type='text' size='small'
                           {...register("name")}
                           error={errors.name && true}
                           helperText={errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
                />
                <TextField fullWidth  id="email" label="E-mail"  variant="outlined" type='email' size='small'
                           {...register("login")}
                           error={errors.login && true}
                           helperText={errors.login && <span style={{color: 'red'}}>{errors.login.message}</span>}
                />
                <TextField fullWidth  id="password" label="Пароль" variant="outlined" type='password' size='small'
                           {...register("password")}
                           error={errors.password && true}
                           helperText={errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
                />
                <TextField fullWidth  id="cpassword" label="Повторите пароль" required variant="outlined" type='password' size='small'

                           {...register("cpassword")}
                           error={errors.cpassword && true}
                           helperText={errors.cpassword && <span style={{color: 'red'}}>{errors.cpassword.message}</span>}
                />
                <Button fullWidth variant="outlined" type='submit' size='small' color="success">Зарегистрироваться</Button>
            </Box>
            <Box sx={{textAlign: 'right', mt: 2}}>
                <Typography variant="caption" display="block" gutterBottom color={palette.grey["500"]}>
                    Уже зарегистрированы? <Link to='/login'>Войти</Link>
                </Typography>
            </Box>
        </div>
    );
};

export  {Register};


