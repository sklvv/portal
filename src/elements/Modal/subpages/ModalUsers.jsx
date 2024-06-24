import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Controller, useController, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {userSchema} from "../modalSchema";
import {useModal} from "../../../hook/useModal";
import {useGetPhoneBook_add, useGetPhoneBook_del} from "../../../hook/useGetPhoneBook";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    InputAdornment,
    Tooltip,
    Typography
} from "@mui/material";
import {GTextField} from "../../CustomMui/customMui";
import BadgeIcon from "@mui/icons-material/Badge";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Switch from "@mui/material/Switch";


const ModalUsers = () => {
    const dataForModal = useSelector(state => state.modal.dataForModal);
    const {
        register, setValue, control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(userSchema)
    });



    const {exitModal} = useModal()
    const mutation = useGetPhoneBook_add()
    const mutate_del = useGetPhoneBook_del()

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
    const onDelete = async (id)=>{
        mutate_del.mutate({_id: id})
        exitModal(1000)
    }

    if (mutation.isLoading) {return <span>Submitting...</span>;}
    if (mutation.isError) {return <span>Error: {mutation.error.message}</span>;}
    if (mutation.isSuccess) {return <div>Сохранение выполнено успешно</div>;}

    if (mutate_del.isLoading) {return <span>Submitting...</span>;}
    if (mutate_del.isError) {return <span>Error: {mutation.error.message}</span>;}
    if (mutate_del.isSuccess) {return <div>Удаление выполнено успешно</div>;}

    return (
        <div>
            <div style={{position: 'absolute', left: '-27px', top: '45%', color: '#ffffff'}}>
                <PersonSearchIcon/>
            </div>

            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '100'},}}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" gutterBottom className='modalAuthTitle'>Редактировать профиль пользователя</Typography>
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
                        <Tooltip title={<Typography variant="body2"  gutterBottom>Отправить пароль на почту</Typography>}>
                            <Button sx={{m: 1}} onClick={()=>{onDelete(dataForModal._id)}}  variant="contained" size='small' color='warning' startIcon={<DeleteForeverIcon />}>Сброс пароля</Button>
                        </Tooltip>
                        <Tooltip title={<Typography variant="body2"  gutterBottom>Удалить запись в БД</Typography>}>
                            <Button sx={{m: 1}} onClick={()=>{onDelete(dataForModal._id)}}  variant="contained" size='small' color="error" startIcon={<DeleteForeverIcon />}>Удалить</Button>
                        </Tooltip>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Divider>Авторизация в приложениях:</Divider>
                            <Controller
                                name="iboard" control={control}
                                render={({ field: { onChange, value } }) => (
                                    <FormControlLabel control={<Switch color='success' checked={value} onChange={onChange} />} label="Dashboard"/>
                                )}
                            />
                            <Controller
                                name="dashboard" control={control}
                                render={({ field: { onChange, value } }) => (
                                    <FormControlLabel control={<Switch color='success' checked={value} onChange={onChange} />} label="iBoard"/>
                                )}
                            />

                            <Controller
                                name="portal" control={control}
                                render={({ field: { onChange, value } }) => (
                                    <FormControlLabel control={<Switch color='success' checked={value} onChange={onChange} />} label="Portal" />
                                )}
                            />
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