import React from 'react';
import './login.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {Box, Button, Divider, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import {palette} from "../../utils/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import {resetSchema} from "./verify";

const ResetPassword = () => {
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
        resolver: yupResolver(resetSchema)
    });

    const onSubmit = (data) => {
        /*signIn('user', ()=> navigate(fromPage, {replace: true}));*/
        navigate('/login', {replace: true})
    }

    return (
        <div>
            <Divider  sx={{color:palette.grey["500"], fontSize: '18px', mb: 1}}>Восстановление пароля</Divider>
            {/*<Typography sx={{fontWeight: 600}} align='left' variant="h6" gutterBottom>Восстановление пароля</Typography>*/}
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '100'},}}
                noValidate
                autoComplete="off"
            >
                <TextField fullWidth  id="email" label="E-mail"  variant="outlined" type='email' size='small'
                           {...register("email")}
                           error={errors.email && true}
                           helperText={errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
                />
                <Button fullWidth variant="outlined" type='submit' size='small' color="success">Сброс пароля</Button>
            </Box>
            <Box sx={{textAlign: 'right', mt: 2}}>
                <Typography variant="caption" display="block" gutterBottom color={palette.grey["500"]}>
                    Уже зарегистрированы? <Link to='/login'>Войти</Link>
                </Typography>
            </Box>
        </div>
    );
};

export  {ResetPassword};


