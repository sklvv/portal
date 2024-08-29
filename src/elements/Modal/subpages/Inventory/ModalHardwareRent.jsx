import React, {useEffect} from 'react';
import './ModalInventory.scss'
import ElemTab from "../../../Tabs/ElemTab";
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "../../../../hook/useTheme";
import {useModal} from "../../../../hook/useModal";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import {Box, Button, ButtonGroup, ListItemIcon, ListItemText, Tooltip, Typography} from "@mui/material";
import {GTextField} from "../../../CustomMui/customMui";
import SaveIcon from "@mui/icons-material/Save";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {HardwareRentSchema, HardwareSchema} from "../../modalSchema";
import AttributionIcon from '@mui/icons-material/Attribution';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import {useGetHardware_rent} from "../../../../hook/useGetHardware";
import TableHead from "../../../Table/TableHead";
import BlockShadow from "../../../BlockShadow";
import HardwareRentHistory from "./HardwareRentHistory";

const ModalHardwareRent = () => {
    const dataForModal = useSelector(state => state.modal.dataForModal);
    const neonGreen = useTheme('neonGreen')
    const neonGreenShadow = useTheme('neonGreenShadow')
    const {exitModal} = useModal()
    const dispatch = useDispatch()
    const {name, inventory, status} = dataForModal
    const mutation = useGetHardware_rent()

    const {
        register, setValue, control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(HardwareRentSchema)
    });

    useEffect(()=>{
        if (dataForModal){
            Object.entries(dataForModal).forEach(
                ([name, value]) => setValue(name, value)
            );
        }
    },[dataForModal])

    const onSubmit = async (data) => {
        let newData = {
            person: data.person,
            start: data.start,
            end: data.end,
            _id: data._id,
            status: data.status,
            inventory: data.inventory,
        }
        mutation.mutate(newData);
        exitModal(1000)
    }


    if (mutation.isLoading) {return <span>Submitting...</span>;}
    if (mutation.isError) {return <span>Error: {mutation.error.message}</span>;}
    if (mutation.isSuccess) {return <div>Сохранение выполнено успешно</div>;}

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
                    <div className='hardInfoBlock'>
                        <div>
                            <div className='nameBlock'><span>Наименование: </span>{name}</div>
                            <div className='nameBlock'><span>Инв. номер: </span>{inventory}</div>
                        </div>
                        <div className='nameBlock '>
                            <span>Статус: </span>{status ? <span style={{color: 'red'}}>Выдано</span> : <span style={{color: 'green'}}>На складе</span>}
                        </div>


                    </div>

                    <GTextField fullWidth id="person" label="Ответственный" variant="standard" type='text' size='small'
                                disabled={ status ? true : false}
                                {...register("person")} error={errors.person && true}
                                helperText={
                                    errors.person ? <span style={{color: 'red'}}>{errors.person.message}</span>
                                        : <span style={{height: '20px'}}> </span>
                                }
                    />

                    <GTextField style={{width: "47%"}} id="start" label="Дата выдачи" variant="standard" type='text' size='small'
                                disabled={ status ? true : false}
                                {...register("start")} error={errors.start && true}
                                helperText={
                                    errors.start ? <span style={{color: 'red'}}>{errors.start.message}</span>
                                        : <span style={{height: '20px'}}> </span>
                                }
                    />
                    <GTextField style={{width: "47%"}} id="end" label="Дата возврата" variant="standard" type='text' size='small'
                                {...register("end")} error={errors.end && true}
                                helperText={
                                    errors.end ? <span style={{color: 'red'}}>{errors.end.message}</span>
                                        : <span style={{height: '20px'}}> </span>
                                }
                    />

                    <div >
                        <Tooltip title={<Typography variant="body2"  gutterBottom>
                            {
                                status ? 'Вернуть оборудование на склад' : 'Выдать оборудование ответственному'
                            }
                        </Typography>}>
                            <Button sx={{float: 'right'}}  variant="contained" type='submit' size='small' color="success" startIcon={<PublishedWithChangesIcon />}>
                                {
                                    status ? 'Вернуть' : 'Выдать'
                                }
                            </Button>
                        </Tooltip>
                    </div>
                </Box>
                <div>
                    <HardwareRentHistory inventory={inventory}/>

                </div>
            </ElemTab>
        </div>
    );
};

export default ModalHardwareRent;