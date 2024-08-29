import React from 'react';
import '../modal.scss'
import ElemTab from "../../Tabs/ElemTab";
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "../../../hook/useTheme";
import {useModal} from "../../../hook/useModal";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import {Box, Button, ButtonGroup, IconButton, Select, Tooltip, Typography} from "@mui/material";
import {GFormControl, GInputLabel, GTextField} from "../../CustomMui/customMui";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from "@mui/icons-material/Save";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {HardwareSchema} from "../modalSchema";

const ModalHardwareRent = () => {
    const dataForModal = useSelector(state => state.modal.dataForModal);
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')
    const {exitModal} = useModal()
    const dispatch = useDispatch()

    const {
        register, setValue, control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(HardwareSchema)
    });

    const onSubmit = async (data) => {

        exitModal(1000)
    }

    console.log(dataForModal)
    const {name, inventory} = dataForModal

    return (
        <div>
            <div className='modalIcon' style={{boxShadow: neonGreenShadow}}><ManageAccountsIcon/></div>
            <ElemTab arr={['Аренда', 'История']} inner='modal'>
                <Box
                    onSubmit={handleSubmit(onSubmit)}
                    component="form"
                    sx={{'& > :not(style)': {m: 1, width: '100'},}}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h5" gutterBottom className='modalAuthTitle' sx={{color: neonGreen}}>
                        Выдача оборудования
                    </Typography>
                    <div className='nameBlock'><span>Наименование: </span>{name}</div>
                    <div className='nameBlock'><span>Инв. номер: </span>{inventory}</div>

                    <GTextField fullWidth id="factory" label="Ответственный" variant="standard" type='text' size='small'
                                {...register("factory")} error={errors.factory && true}
                                helperText={
                                    errors.factory ? <span style={{color: 'red'}}>{errors.factory.message}</span>
                                        : <span style={{height: '20px'}}> </span>
                                }
                    />

                    <GTextField style={{width: "45%"}} id="name" label="Дата выдачи" variant="standard" type='text' size='small'
                                {...register("name")} error={errors.name && true}
                                helperText={
                                    errors.name ? <span style={{color: 'red'}}>{errors.name.message}</span>
                                        : <span style={{height: '20px'}}> </span>
                                }
                    />
                    <GTextField style={{width: "45%"}} id="name" label="Дата возврата" variant="standard" type='text' size='small'
                                {...register("name")} error={errors.name && true}
                                helperText={
                                    errors.name ? <span style={{color: 'red'}}>{errors.name.message}</span>
                                        : <span style={{height: '20px'}}> </span>
                                }
                    />





                    <div >
                        <Tooltip title={<Typography variant="body2"  gutterBottom>Сохранить данные</Typography>}>
                            <Button sx={{float: 'right'}}  variant="contained" type='submit' size='small' color="success" startIcon={<SaveIcon />}>Сохранить</Button>
                        </Tooltip>
                        { dataForModal &&
                            <ButtonGroup variant="contained" size='small' sx={{verticalAlign: 'bottom'}}>

                            </ButtonGroup>
                        }
                    </div>
                </Box>
                <div>dfgdfg</div>
            </ElemTab>
        </div>
    );
};

export default ModalHardwareRent;