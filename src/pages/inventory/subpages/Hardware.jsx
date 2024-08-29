import React, {useEffect, useState} from 'react';
import {useAuth} from "../../../hook/useAuth";
import {useModal} from "../../../hook/useModal";
import {useDispatch} from "react-redux";
import {useGetHardware} from "../../../hook/useGetHardware";
import {resetDataForModal, setDataForModal} from "../../../elements/Modal/ModalSlice";
import Skelet from "../../../elements/Skelet";
import TableHead from "../../../elements/Table/TableHead";
import BlockShadow from "../../../elements/BlockShadow";
import TableItem from "../../../elements/Table/TableItem";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Scroll from "../../../elements/Scroll";
import HardwareFilters from "./HardwareFilters";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const Hardware = () => {
    const {user} = useAuth()
    const {setModal} = useModal()
    const dispatch = useDispatch()
    const {data: hardware, isLoading, isError} = useGetHardware()
    const [hard, setHard] = useState([])
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        setHard(hardware)
        // eslint-disable-next-line no-use-before-define
    },[hardware])

    const updateItem = (type, item = false) =>{
        dispatch(resetDataForModal())
        if (type === 'update'){
            if (item._id) {
                dispatch(setDataForModal(item))
            }
            setModal('hardware')
        } else if (type === 'rent'){
            dispatch(setDataForModal(item))
            setModal('hardwareRent')
        }


    }

    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!hardware) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            <HardwareFilters updateItem={updateItem} hard={hard} setHard={setHard} check={check} setCheck={setCheck}/>
            <BlockShadow >
                <TableHead>
                    <div style={{width: '5%'}} >№</div>
                    <div style={{width: '20%'}} >Наименование</div>
                    <div style={{width: '15%'}} >Тип</div>
                    <div style={{width: '20%'}} >Инвентарный номер</div>
                    <div style={{width: '10%'}} >Статус</div>
                    <div style={{width: '20%'}} >Ответственный</div>
                </TableHead>
            </BlockShadow>
            <Scroll h='h210'>
                {
                    hard?.map((item, i) => {
                        if (!check && item.status) return
                        return (
                            <TableItem key={item._id} extra={item.status && 'grey'}>
                                <div style={{width: '5%'}}>{i +1}</div>
                                <div style={{width: '20%'}}>{item.name}</div>
                                <div style={{width: '15%'}}>{item.type}</div>
                                <div style={{width: '20%'}}>{item.inventory}</div>
                                <div style={{width: '10%'}}>
                                    {
                                        item.status
                                            ? <span style={{color: 'red'}}>ВЫДАНО</span>
                                            : <span style={{color: 'green'}}>СКЛАД</span>
                                    }
                                </div>
                                <div style={{width: '20%'}}>{item.person}</div>
                                {
                                    user && <div className='edit'>
                                        <Button onClick={()=> updateItem('update',item)} size='small' color={'success'}><EditIcon/></Button>
                                        <Button onClick={()=> updateItem('rent', item)} size='small' color={'success'}><ManageAccountsIcon/></Button>
                                    </div>
                                }
                            </TableItem>
                        )
                    })
                }
            </Scroll>
        </div>
    );
};

export default Hardware;

