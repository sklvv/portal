import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "../../../hook/useTheme";
import {useModal} from "../../../hook/useModal";
import {useGetHardware_add} from "../../../hook/useGetHardware";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {HardwareSchema} from "../modalSchema";
import {resetDataForModal} from "../ModalSlice";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {Box, Button, ButtonGroup, IconButton, Select, Tooltip, Typography} from "@mui/material";
import {GFormControl, GInputLabel, GTextField} from "../../CustomMui/customMui";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from "@mui/icons-material/Save";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const ModalHardware = () => {
    const dataForModal = useSelector(state => state.modal.dataForModal);
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')
    const {exitModal} = useModal()
    const dispatch = useDispatch()
    const mutation = useGetHardware_add()

    const [clone, setClone] = useState(false)
    const [select, setsetSelect] = useState('ПУСТО');

    const {
        register, setValue, control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(HardwareSchema)
    });

    useEffect(()=>{
        if (dataForModal){
            Object.entries(dataForModal).forEach(
                ([name, value]) => setValue(name, value)
            );
            setsetSelect(dataForModal['type'])
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

    const handleChangeSelect = (e) => {
        const item = e.target.value
        setValue('type', item)
        setsetSelect(item);
    }

    const text = useTheme('text')
    const selectText = useTheme('select')

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
                <GFormControl sx={{width: '100%', borderBottom: '0.1rem solid #ffffff4a;'}} variant="standard" size='small'>
                    <GInputLabel id="type-label" sx={{color: text}}
                                 error={errors.type && true} {...register("type")}
                                 helperText={
                                     errors.type ? <span style={{color: 'red'}}>{errors.type.message}</span>
                                         : <span style={{height: '20px'}}> </span>
                                 }
                    >Тип</GInputLabel>
                    <Select
                        labelId="type-label"
                        id="type"
                        value={select}
                        onChange={handleChangeSelect}
                        sx={{color: text}}
                        inputProps={{
                            MenuProps: {
                                MenuListProps: {
                                    sx: {
                                        backgroundColor: selectText,
                                        color: text
                                    }
                                }
                            }
                        }}
                    >
                        <MenuItem  value={'ПУСТО'}>ПУСТО</MenuItem>
                        <MenuItem  value={'Сервер'}>Ноутбук</MenuItem>
                        <MenuItem  value={'Маршрутизатор'}>Маршрутизатор</MenuItem>
                        <MenuItem  value={'Оргтехника'}>Оргтехника</MenuItem>
                        <MenuItem  value={'ПК'}>ПК</MenuItem>
                        <MenuItem  value={'Wifi роутер'}>Другое</MenuItem>
                    </Select>
                </GFormControl>
                <GTextField style={{width: "45%"}} id="inventory" label="Инвентарный номер" variant="standard" type='text' size='small'
                            {...register("inventory")} error={errors.inventory && true}
                            helperText={
                                errors.inventory ? <span style={{color: 'red'}}>{errors.inventory.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />

                <GTextField style={{width: "45%"}} id="factory" label="Заводской номер" variant="standard" type='text' size='small'
                            {...register("factory")} error={errors.factory && true}
                            helperText={
                                errors.factory ? <span style={{color: 'red'}}>{errors.factory.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />

                <GTextField style={{width: "45%"}} id="price" label="Стоимость" variant="standard" type='text' size='small'
                            {...register("price")} error={errors.price && true}
                            helperText={
                                errors.price ? <span style={{color: 'red'}}>{errors.price.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField style={{width: "45%"}} id="date" label="Дата покупки" variant="standard" type='text' size='small'
                            {...register("date")} error={errors.date && true}
                            helperText={
                                errors.date ? <span style={{color: 'red'}}>{errors.date.message}</span>
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

export default ModalHardware;