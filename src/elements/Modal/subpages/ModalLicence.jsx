import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useTheme} from "../../../hook/useTheme";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LicenceSchema, phoneBookSchema} from "../modalSchema";
import {useModal} from "../../../hook/useModal";
import {useGetPhoneBook_add, useGetPhoneBook_del} from "../../../hook/useGetPhoneBook";
import {useGetLicence_add, useGetLicence_del} from "../../../hook/useGetLicence";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {Box, Button, InputAdornment, Tooltip, Typography} from "@mui/material";
import {GTextField} from "../../CustomMui/customMui";
import BadgeIcon from "@mui/icons-material/Badge";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LanIcon from "@mui/icons-material/Lan";
import PhoneIcon from "@mui/icons-material/Phone";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const ModalLicence = () => {
    const dataForModal = useSelector(state => state.modal.dataForModal);
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')
    const {
        register, setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(LicenceSchema)
    });
    const {exitModal} = useModal()
    const mutation = useGetLicence_add()
    const mutate_del = useGetLicence_del()

    useEffect(()=>{
        if (dataForModal){
            Object.entries(dataForModal).forEach(
                ([name, value]) => setValue(name, value)
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
            <div className='modalIcon' style={{boxShadow: neonGreenShadow}}>{ dataForModal ? <EditIcon/> : <PersonAddIcon/>}</div>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '100'},}}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" gutterBottom className='modalAuthTitle' sx={{color: neonGreen}}>
                    { dataForModal ? 'Изменить запись' : 'Добавить запись'}
                </Typography>
                <GTextField fullWidth id="org" label="Организация*" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><BadgeIcon /></InputAdornment>),
                            }}
                            {...register("org")} error={errors.org && true}
                            helperText={
                                errors.name ? <span style={{color: 'red'}}>{errors.org.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="seller" label="Поставщик" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><HomeRepairServiceIcon /></InputAdornment>),
                            }}
                            {...register("seller")} error={errors.seller && true}
                            helperText={
                                errors.position ? <span style={{color: 'red'}}>{errors.seller.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="vendor" label="Продукт" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><DirectionsCarIcon /></InputAdornment>),
                            }}
                            {...register("vendor")} error={errors.vendor && true}
                            helperText={
                                errors.car ? <span style={{color: 'red'}}>{errors.vendor.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="lic" label="№ Лицензии" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><DirectionsCarIcon /></InputAdornment>),
                            }}
                            {...register("lic")} error={errors.lic && true}
                            helperText={
                                errors.car ? <span style={{color: 'red'}}>{errors.lic.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="key" label="Ключ" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><LanIcon /></InputAdornment>),
                            }}
                            {...register("key")} error={errors.key && true}
                            helperText={
                                errors.dep ? <span style={{color: 'red'}}>{errors.key.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="start" label="Дата начало" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><DirectionsCarIcon /></InputAdornment>),
                            }}
                            {...register("start")} error={errors.start && true}
                            helperText={
                                errors.car ? <span style={{color: 'red'}}>{errors.start.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="exp" label="Дата конец" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><DirectionsCarIcon /></InputAdornment>),
                            }}
                            {...register("exp")} error={errors.exp && true}
                            helperText={
                                errors.car ? <span style={{color: 'red'}}>{errors.exp.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="info" label="User Кол-во" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><LanIcon /></InputAdornment>),
                            }}
                            {...register("info")} error={errors.info && true}
                            helperText={
                                errors.dep ? <span style={{color: 'red'}}>{errors.info.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="notes" label="Заметки" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><LanIcon /></InputAdornment>),
                            }}
                            {...register("notes")} error={errors.notes && true}
                            helperText={
                                errors.dep ? <span style={{color: 'red'}}>{errors.notes.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="amount" label="Сумма" variant="standard" type='text' size='small'
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><LanIcon /></InputAdornment>),
                            }}
                            {...register("amount")} error={errors.amount && true}
                            helperText={
                                errors.dep ? <span style={{color: 'red'}}>{errors.amount.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />


                <div >
                    <Tooltip title={<Typography variant="body2"  gutterBottom>Сохранить данные</Typography>}>
                        <Button sx={{float: 'right'}}  variant="contained" type='submit' size='small' color="success" startIcon={<SaveIcon />}>Сохранить</Button>
                    </Tooltip>
                    <Tooltip title={<Typography variant="body2"  gutterBottom>Удалить запись в БД</Typography>}>
                        <Button onClick={()=>{onDelete(dataForModal._id)}}  variant="contained" size='small' color="error" startIcon={<DeleteForeverIcon />}>Удалить</Button>
                    </Tooltip>
                </div>
            </Box>
        </div>
    );
};

export default ModalLicence;