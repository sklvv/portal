import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {userSchema} from "../modalSchema";
import {useModal} from "../../../hook/useModal";
import {
    Box,
    Button,
    Divider,
    FormControlLabel,
    InputAdornment,
    Tooltip,
    Typography
} from "@mui/material";
import {GTextField} from "../../CustomMui/customMui";
import BadgeIcon from "@mui/icons-material/Badge";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SaveIcon from "@mui/icons-material/Save";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LockResetIcon from '@mui/icons-material/LockReset';
import Switch from "@mui/material/Switch";
import {useGetUsers_SendConfirm, useGetUsers_update, useGetUsers_updatePass} from "../../../hook/useGetUsers";
import {useTheme} from "../../../hook/useTheme";


const ModalUsers = () => {
    const dataForModal = useSelector(state => state.modal.dataForModal);
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')
    const {
        register, setValue, control,getValues,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(userSchema)
    });

    const {exitModal} = useModal()
    const mutation = useGetUsers_update()
    const mutation_pass = useGetUsers_updatePass()
    const mutation_sendConfirm = useGetUsers_SendConfirm()
    const [pass, setPass] = useState('')

    useEffect(()=>{
        if (dataForModal){
            Object.entries(dataForModal).forEach(
                ([name, value]) => {
                    if (name === 'auth'){
                        setValue('iboard', value.iboard.login)
                        setValue('dashboard', value.dashboard.login)
                        setValue('portal', value.portal.login)
                    }
                    setValue(name, value)
                }
            );
        }
    },[dataForModal])

    const onSubmit = async (data) => {
        mutation.mutate(data);
        exitModal(1000)
    }

    const onPassUpdate =async () => {
        let email = getValues('login')
        let name = getValues('name')
        if (pass.length >= 6){
            await mutation_pass.mutate({'login': email, 'pass': pass, 'name': name});
            exitModal(1000)
            setPass('')
        }
    }
    const onConfirmAccess =async () => {
        let email = getValues('login')
        let name = getValues('name')
        await mutation_sendConfirm.mutate({'login': email, 'name': name});
        exitModal(1000)
    }


    if (mutation.isLoading) {return <span>Submitting...</span>;}
    if (mutation.isError) {return <span>Error: {mutation.error.message}</span>;}
    if (mutation.isSuccess) {return <div>Сохранение выполнено успешно</div>;}

    if (mutation_pass.isLoading) {return <span>Submitting...</span>;}
    if (mutation_pass.isError) {return <span>Error: {mutation_pass.error.message}</span>;}
    if (mutation_pass.isSuccess) {return <div>Сохранение выполнено успешно</div>;}

    if (mutation_sendConfirm.isLoading) {return <span>Submitting...</span>;}
    if (mutation_sendConfirm.isError) {return <span>Error: {mutation_sendConfirm.error.message}</span>;}
    if (mutation_sendConfirm.isSuccess) {return <div>Сохранение выполнено успешно</div>;}

    return (
        <div>
            <div className='modalIcon' style={{boxShadow: neonGreenShadow}}>
                <PersonSearchIcon/>
            </div>

            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '100'},}}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" gutterBottom className='modalAuthTitle' sx={{color: neonGreen}}>Редактировать профиль пользователя</Typography>
                <GTextField fullWidth id="name" label="Ф.И.О." variant="standard" type='email' size='small'
                            InputProps={{startAdornment: (<InputAdornment position="start"><BadgeIcon /></InputAdornment>)}}
                            {...register("name")} error={errors.name && true}
                            helperText={
                                errors.name ? <span style={{color: 'red'}}>{errors.name.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="login" label="Почтовый адрес" variant="standard" type='email' size='small'
                            InputProps={{startAdornment: (<InputAdornment position="start"><BadgeIcon /></InputAdornment>)}}
                            {...register("login")} error={errors.login && true}
                            helperText={
                                errors.login ? <span style={{color: 'red'}}>{errors.login.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="position" label="Должность" variant="standard" type='email' size='small'
                            InputProps={{startAdornment: (<InputAdornment position="start"><HomeRepairServiceIcon /></InputAdornment>)}}
                            {...register("position")} error={errors.position && true}
                            helperText={
                                errors.position ? <span style={{color: 'red'}}>{errors.position.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <div style={{display: 'flex', marginBottom: '30px', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Divider>Управление:</Divider>
                        <GTextField sx={{m: 1}} fullWidth id="password" label="Обновление пароля" variant="standard" type='email' size='small'
                                    onChange={(e) => setPass(e.target.value)} value={pass}
                        />
                        <Tooltip title={<Typography variant="body2"  gutterBottom>Отправить пароль на почту</Typography>}>
                            <Button sx={{m: 1}}  onClick={onPassUpdate} variant="contained" size='small' color='warning' startIcon={<LockResetIcon />}>Сброс пароля</Button>
                        </Tooltip>


                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Divider>Авторизация в приложениях:</Divider>
                            <Controller
                                name="dashboard" control={control}
                                render={({ field: { onChange, value } }) => (
                                    <FormControlLabel control={<Switch color='success' checked={!!value} onChange={onChange} />} label="Dashboard"/>
                                )}
                            />
                            <Controller
                                name="iboard" control={control}
                                render={({ field: { onChange, value } }) => (
                                    <FormControlLabel control={<Switch color='success' checked={!!value} onChange={onChange} />} label="iBoard"/>
                                )}
                            />

                            <Controller
                                name="portal" control={control}
                                render={({ field: { onChange, value } }) => (
                                    <FormControlLabel control={<Switch color='success' checked={!!value} onChange={onChange} />} label="Portal" />
                                )}
                            />
                        <Tooltip title={<Typography variant="body2"  gutterBottom>Письмо пользователю что запись активированна</Typography>}>
                            <Button sx={{m: 1}} onClick={onConfirmAccess}  variant="contained" size='small' color='warning' startIcon={<LockResetIcon />}>Уведомить пользователя</Button>
                        </Tooltip>
                    </div>
                </div>

                <div >
                    <Tooltip title={<Typography variant="body2"  gutterBottom>Сохранить данные</Typography>}>
                        <Button sx={{float: 'right'}}  variant="contained" type='submit' size='small' color="success" startIcon={<SaveIcon />}>Сохранить</Button>
                    </Tooltip>

                </div>
            </Box>
        </div>
    );
};

export default ModalUsers;