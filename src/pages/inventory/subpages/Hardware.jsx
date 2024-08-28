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

const Hardware = () => {
    const {user} = useAuth()
    const {setModal} = useModal()
    const dispatch = useDispatch()
    const {data: hardware, isLoading, isError} = useGetHardware()
    const [hard, setHard] = useState([])

    useEffect(()=>{
        setHard(hardware)
        // eslint-disable-next-line no-use-before-define
    },[hardware])

    const updateItem = (item = false) =>{
        dispatch(resetDataForModal())
        if (item._id) {
            dispatch(setDataForModal(item))
        }
        setModal('hardware')
    }

    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!hardware) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            <HardwareFilters updateItem={updateItem} hard={hard} setHard={setHard}/>
            <BlockShadow >
                <TableHead>
                    <div style={{width: '5%'}} >№</div>
                    <div style={{width: '20%'}} >Наименование</div>
                    <div style={{width: '20%'}} >Тип</div>
                    <div style={{width: '25%'}} >Инвентарный номер</div>
                    <div style={{width: '20%'}} >Заводской номер</div>
                </TableHead>
            </BlockShadow>
            <Scroll h='h210'>
                {
                    hard?.map((item, i) => {
                        /*if (!check && !item.status) return*/
                        return (
                            <TableItem key={item._id}>
                                <div style={{width: '5%'}}>{i +1}</div>
                                <div style={{width: '20%'}}>{item.name}</div>
                                <div style={{width: '20%'}}>{item.type}</div>
                                <div style={{width: '25%'}}>{item.inventory}</div>
                                <div style={{width: '20%'}}>{item.factory}</div>
                                {
                                    user && <div className='edit'><Button onClick={()=> updateItem(item)} size='small' color={'success'}><EditIcon/></Button></div>
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