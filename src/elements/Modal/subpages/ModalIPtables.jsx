import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "../../../hook/useTheme";
import {useModal} from "../../../hook/useModal";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {IPtablesSchema} from "../modalSchema";
import {useGetIPtables_add} from "../../../hook/useGetIPtables";
import {resetDataForModal} from "../ModalSlice";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {Box, Button, ButtonGroup, FormControlLabel, IconButton, Tooltip, Typography} from "@mui/material";
import {GTextField} from "../../CustomMui/customMui";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const ModalIPtables = () => {
    const dataForModal = useSelector(state => state.modal.dataForModal);
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')
    const {exitModal} = useModal()
    const dispatch = useDispatch()
    const mutation = useGetIPtables_add()
    const [clone, setClone] = useState(false)

    const {
        register, setValue, control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(IPtablesSchema)
    });

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

    const onClone = () => {
        setClone(true)
        dispatch(resetDataForModal())
    }

    if (mutation.isLoading) {return <span>Submitting...</span>;}
    if (mutation.isError) {return <span>Error: {mutation.error.message}</span>;}
    if (mutation.isSuccess) {return <div>Сохранение выполнено успешно</div>;}

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
                <GTextField fullWidth id="name" label="Наименование" variant="standard" type='text' size='small'
                            {...register("name")} error={errors.name && true}
                            helperText={
                                errors.name ? <span style={{color: 'red'}}>{errors.name.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="ip" label="IP*" variant="standard" type='text' size='small'
                            {...register("ip")} error={errors.ip && true}
                            helperText={
                                errors.ip ? <span style={{color: 'red'}}>{errors.ip.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />


                <GTextField style={{width: "45%"}} id="type" label="Тип" variant="standard" type='text' size='small'
                            {...register("type")} error={errors.type && true}
                            helperText={
                                errors.type ? <span style={{color: 'red'}}>{errors.type.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="info" label="Описание" variant="standard" type='text' size='small'
                            {...register("info")} error={errors.info && true}
                            helperText={
                                errors.info ? <span style={{color: 'red'}}>{errors.info.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />

                <GTextField fullWidth id="notes" label="Заметки" variant="standard" type='text' size='small' multiline rows={4}
                            {...register("notes")} error={errors.notes && true}
                            helperText={
                                errors.notes ? <span style={{color: 'red'}}>{errors.notes.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
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
                </div>
            </Box>
        </div>
    );
};

export default ModalIPtables;