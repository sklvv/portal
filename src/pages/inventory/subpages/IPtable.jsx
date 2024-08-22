import React, {useEffect, useState} from 'react';
import TableHead from "../../../elements/Table/TableHead";
import BlockShadow from "../../../elements/BlockShadow";
import Scroll from "../../../elements/Scroll";
import {useAuth} from "../../../hook/useAuth";
import {useModal} from "../../../hook/useModal";
import {useDispatch} from "react-redux";
import {useGetIPtables} from "../../../hook/useGetIPtables";
import Skelet from "../../../elements/Skelet";
import TableItem from "../../../elements/Table/TableItem";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import IPtableFilters from "./IPtableFilters";
import {resetDataForModal, setDataForModal} from "../../../elements/Modal/ModalSlice";

const IPtable = () => {
    const {user} = useAuth()
    const {setModal} = useModal()
    const dispatch = useDispatch()
    const {data: iptables, isLoading, isError} = useGetIPtables()
    const [ipt, setIpt] = useState([])

    useEffect(()=>{
        setIpt(iptables)
        // eslint-disable-next-line no-use-before-define
    },[iptables])

    const updateItem = (item = false) =>{
        dispatch(resetDataForModal())
        if (item._id) {
            dispatch(setDataForModal(item))
        }
        setModal('iptables')
    }

    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!iptables) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            <IPtableFilters updateItem={updateItem} ipt={ipt} setIpt={setIpt}/>
            <BlockShadow >
                <TableHead>
                    <div style={{width: '5%'}} >№</div>
                    <div style={{width: '20%'}} ><span> IP</span></div>
                    <div style={{width: '20%'}} ><span> Тип</span></div>
                    <div style={{width: '25%'}} ><span> Наименование</span></div>
                    <div style={{width: '20%'}} className='listIcon'>Описание</div>
                </TableHead>
            </BlockShadow>
            <Scroll h='h210'>
                {
                    ipt?.map((item, i) => {
                        /*if (!check && !item.status) return*/
                        return (
                            <TableItem key={item._id}>
                                <div style={{width: '5%'}}>{i +1}</div>
                                <div style={{width: '20%'}}>{item.ip}</div>
                                <div style={{width: '20%'}}>{item.type}</div>
                                <div style={{width: '25%'}}>{item.name}</div>
                                <div style={{width: '20%'}}>{item.info}</div>
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

export default IPtable;