import BlockShadow from "../../../elements/BlockShadow";
import TableHead from "../../../elements/Table/TableHead";
import Scroll from "../../../elements/Scroll";
import TableItem from "../../../elements/Table/TableItem";
import {useAuth} from "../../../hook/useAuth";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import {useModal} from "../../../hook/useModal";
import {useGetLicence} from "../../../hook/useGetLicence";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {resetDataForModal, setDataForModal} from "../../../elements/Modal/ModalSlice";
import Skelet from "../../../elements/Skelet";
import LicenceFilters from "./LicenceFilters";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Licence = () => {
    const {user} = useAuth()
    const {setModal} = useModal()
    const dispatch = useDispatch()
    const {data: licence, isLoading, isError} = useGetLicence()
    const [lic, setLic] = useState([])
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        setLic(licence)
        // eslint-disable-next-line no-use-before-define
    },[licence])

    const updateItem = (item = false) =>{
        dispatch(resetDataForModal())
        if (item._id) {
            dispatch(setDataForModal(item))
        }
        setModal('licence')
    }


    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!licence) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            <LicenceFilters updateItem={updateItem} lic={lic} setLic={setLic} check={check} setCheck={setCheck}/>
            <BlockShadow >
                <TableHead>
                    <div style={{width: '3%'}} >№</div>
                    <div style={{width: '15%'}} ><span> Ораганизация</span></div>
                    <div style={{width: '15%'}} ><span> Поставщик</span></div>
                    <div style={{width: '25%'}} className='listIcon'><span> Продукт</span></div>
                    <div style={{width: '20%'}} className='listIcon'>№ Лицензии</div>
                    <div style={{width: '10%'}} className='listIcon'><AccessTimeIcon/><span> Начало</span></div>
                    <div style={{width: '10%'}} className='listIcon'><AccessTimeIcon/><span> Конец</span></div>
                    <div style={{width: '12%'}} className='listIcon'><span> User/Кол-во</span></div>
                </TableHead>
            </BlockShadow>
            <Scroll h='h210'>
                {
                    lic?.map((item, i) => {
                        if (!check && !item.status) return
                        return (
                            <TableItem key={item._id} extra={!item.status && 'grey'}>
                                <div style={{width: '3%'}}>{i +1}</div>
                                <div style={{width: '15%'}}>{item.org}</div>
                                <div style={{width: '15%'}}>{item.seller}</div>
                                <div style={{width: '25%'}}>{item.vendor}</div>
                                <div style={{width: '20%'}}>{item.lic}</div>
                                <div style={{width: '10%', textAlign: 'center'}}>{item.start}</div>
                                <div style={{width: '10%', textAlign: 'center'}}>{item.exp}</div>
                                <div style={{width: '12%', textAlign: 'center'}}>{item.info}</div>
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

export default Licence;