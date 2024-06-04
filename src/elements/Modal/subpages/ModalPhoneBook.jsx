import React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import {useSelector} from "react-redux";
import {Box, Button, IconButton, InputAdornment, Typography} from "@mui/material";
import {GTextField} from "../../CustomMui/customMui";
import SaveIcon from '@mui/icons-material/Save';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LanIcon from '@mui/icons-material/Lan';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {phoneBookSchema} from "../modalSchema";

const ModalPhoneBook = () => {
    const dataForModal = useSelector(state => state.phonebook.dataForModal);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(phoneBookSchema)
    });

    const onSubmit = async (data) => {
        console.log(data)
    }


    return (
        <div>
            <div style={{position: 'absolute', left: '-28px', top: '5%', color: '#ffffff'}}>
                { dataForModal.length > 1 ? <EditIcon/> : <PersonAddIcon/>}

            </div>

            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '100'},}}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" gutterBottom className='modalAuthTitle'>Добавить/Изменить запись</Typography>
                <GTextField fullWidth id="name" label="Ф.И.О." variant="standard" type='email' size='small'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"><BadgeIcon /></InputAdornment>
                                ),
                            }}
                            {...register("name")} error={errors.name && true}
                            helperText={
                                errors.name ? <span style={{color: 'red'}}>{errors.name.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="position" label="Должность" variant="standard" type='email' size='small'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"><HomeRepairServiceIcon /></InputAdornment>
                                ),
                            }}
                            {...register("position")} error={errors.position && true}
                            helperText={
                                errors.position ? <span style={{color: 'red'}}>{errors.position.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="dep" label="Отдел" variant="standard" type='email' size='small'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"><LanIcon /></InputAdornment>
                                ),
                            }}
                            {...register("dep")} error={errors.dep && true}
                            helperText={
                                errors.dep ? <span style={{color: 'red'}}>{errors.dep.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />
                <GTextField fullWidth id="phone" label="Телефон" variant="standard" type='email' size='small'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"><PhoneIcon /></InputAdornment>
                                ),
                            }}
                            {...register("phone")} error={errors.phone && true}
                            helperText={
                                errors.phone ? <span style={{color: 'red'}}>{errors.phone.message}</span>
                                    : <span style={{height: '20px'}}> </span>
                            }
                />

                <div >
                    <Button sx={{float: 'right'}}  variant="contained" type='submit' size='small' color="success" startIcon={<SaveIcon />}>Сохранить</Button>
                </div>
            </Box>
        </div>
    );
};

export default ModalPhoneBook;