import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "../../../../hook/useTheme";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LicenceSchema} from "../../modalSchema";
import {useModal} from "../../../../hook/useModal";
import {useGetLicence_add, useGetLicence_del} from "../../../../hook/useGetLicence";
import EditIcon from "@mui/icons-material/Edit";
import {Box, Button, ButtonGroup, FormControlLabel, IconButton, Tooltip, Typography} from "@mui/material";
import {GTextField} from "../../../CustomMui/customMui";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from "@mui/icons-material/Save";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import {resetDataForModal} from "../../ModalSlice";
import Switch from "@mui/material/Switch";

const ModalLicence = () => {
    const dataForModal = useSelector(state => state.modal.dataForModal);
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')
    const {exitModal} = useModal()
    const dispatch = useDispatch()
    const [clone, setClone] = useState(false)
    const {
        register, setValue, control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(LicenceSchema)
    });
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
        let newData = Object.assign({}, data);
        if (clone){
            delete newData._id
            setClone(false)
        }
        mutation.mutate(newData);
        exitModal(1000)
    }
    const onDelete = async (id)=>{
        mutate_del.mutate({_id: id})
        exitModal(1000)
    }
    const onClone = () => {
        setClone(true)
        dispatch(resetDataForModal())
    }

    if (mutation.isLoading) {return <span>Submitting...</span>;}
    if (mutation.isError) {return <span>Error: {mutation.error.message}</span>;}
    if (mutation.isSuccess) {return <div>Сохранение выполнено успешно</div>;}

    if (mutate_del.isLoading) {return <span>Submitting...</span>;}
    if (mutate_del.isError) {return <span>Error: {mutation.error.message}</span>;}
    if (mutate_del.isSuccess) {return <div>Удаление выполнено успешно</div>;}

    return (
        <div>
            <div className='modalIcon' style={{boxShadow: neonGreenShadow}}>{ dataForModal ? <EditIcon/> : <AddCircleOutlineIcon/>}</div>
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
                <GTextField style={{width: "45%"}} id="org" label="Организация*" variant="standard" type='text' size='small'
                            {...register("org")} error={errors.org && true}
                            helperText={
                                errors.org ? <span style={{color: 'red'}}>{errors.org.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="seller" label="Поставщик" variant="standard" type='text' size='small'
                            {...register("seller")} error={errors.seller && true}
                            helperText={
                                errors.seller ? <span style={{color: 'red'}}>{errors.seller.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="vendor" label="Продукт*" variant="standard" type='text' size='small'
                            {...register("vendor")} error={errors.vendor && true}
                            helperText={
                                errors.vendor ? <span style={{color: 'red'}}>{errors.vendor.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="lic" label="№ Лицензии" variant="standard" type='text' size='small'
                            {...register("lic")} error={errors.lic && true}
                            helperText={
                                errors.lic ? <span style={{color: 'red'}}>{errors.lic.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="key" label="Ключ*" variant="standard" type='text' size='small'
                            {...register("key")} error={errors.key && true}
                            helperText={
                                errors.key ? <span style={{color: 'red'}}>{errors.key.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="start" label="Дата начало" variant="standard" type='text' size='small'
                            {...register("start")} error={errors.start && true}
                            helperText={
                                errors.start ? <span style={{color: 'red'}}>{errors.start.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="exp" label="Дата конец" variant="standard" type='text' size='small'
                            {...register("exp")} error={errors.exp && true}
                            helperText={
                                errors.exp ? <span style={{color: 'red'}}>{errors.exp.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="info" label="User Кол-во" variant="standard" type='text' size='small'
                            {...register("info")} error={errors.info && true}
                            helperText={
                                errors.info ? <span style={{color: 'red'}}>{errors.info.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="amount" label="Сумма ₽" variant="standard" type='text' size='small'
                            {...register("amount")} error={errors.amount && true}
                            helperText={
                                errors.amount ? <span style={{color: 'red'}}>{errors.amount.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="notes" label="Заметки" variant="standard" type='text' size='small' multiline rows={6}
                            {...register("notes")} error={errors.notes && true}
                            helperText={
                                errors.notes ? <span style={{color: 'red'}}>{errors.notes.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <Controller
                    name="status" control={control}
                    render={({ field: { onChange, value } }) => (
                        <FormControlLabel control={<Switch color='success' checked={!!value} onChange={onChange} />} label="Лицензия активна"/>
                    )}
                />

                <div >
                    <Tooltip title={<Typography variant="body2"  gutterBottom>Сохранить данные</Typography>}>
                        <Button sx={{float: 'right'}}  variant="contained" type='submit' size='small' color="success" startIcon={<SaveIcon />}>Сохранить</Button>
                    </Tooltip>
                    { dataForModal &&
                        <ButtonGroup variant="contained" size='small' sx={{verticalAlign: 'bottom'}}>
                            <Tooltip title={<Typography variant="body2" gutterBottom>Создать новый, клонированием</Typography>}>
                                <IconButton onClick={onClone} color="warning" size='small'><FileCopyIcon /></IconButton>
                            </Tooltip>

                        </ButtonGroup>
                    }
                    {/*<Tooltip title={<Typography variant="body2"  gutterBottom>Удалить запись в БД</Typography>}>
                        <Button onClick={()=>{onDelete(dataForModal._id)}}  variant="contained" size='small' color="error" startIcon={<DeleteForeverIcon />}>Удалить</Button>
                    </Tooltip>*/}
                </div>
            </Box>
        </div>
    );
};

export default ModalLicence;

