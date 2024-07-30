import BlockShadow from "../../../elements/BlockShadow";
import TableHead from "../../../elements/Table/TableHead";
import Scroll from "../../../elements/Scroll";
import TableItem from "../../../elements/Table/TableItem";
import {useAuth} from "../../../hook/useAuth";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import StartIcon from '@mui/icons-material/Start';
import {useModal} from "../../../hook/useModal";
import {useGetLicence} from "../../../hook/useGetLicence";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {resetDataForModal, setDataForModal} from "../../../elements/Modal/ModalSlice";
import Skelet from "../../../elements/Skelet";
import LicenceFilters from "./LicenceFilters";

const Licence = () => {
    const {user} = useAuth()
    const {setModal} = useModal()
    const dispatch = useDispatch()
    const {data: licence, isLoading, isError} = useGetLicence()
    const [lic, setLic] = useState([])

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
            <LicenceFilters updateItem={updateItem}/>
            <BlockShadow >
                <TableHead>
                    <div style={{width: '3%'}} >№</div>
                    <div style={{width: '15%'}} ><span> Ораганизация</span></div>
                    <div style={{width: '15%'}} ><span> Поставщик</span></div>
                    <div style={{width: '12%'}} className='listIcon'><span> Продукт</span></div>
                    <div style={{width: '10%'}} className='listIcon'>№ Лицензии</div>
                    <div style={{width: '10%'}} className='listIcon'><span> Ключ</span></div>
                    <div style={{width: '10%'}} className='listIcon'><StartIcon/><span> Дата</span></div>
                    <div style={{width: '10%'}} className='listIcon'><SportsScoreIcon/><span> Дата</span></div>
                    <div style={{width: '15%'}} className='listIcon'><span> User/Кол-во</span></div>
                </TableHead>
            </BlockShadow>
            <Scroll>
                {
                    lic?.map((item, i) =>  <TableItem key={item._id}>
                        <div style={{width: '3%'}}>{i +1}</div>
                        <div style={{width: '15%'}}>{item.org}</div>
                        <div style={{width: '15%'}}>{item.seller}</div>
                        <div style={{width: '12%'}}>{item.vendor}</div>
                        <div style={{width: '10%'}}>{item.lic}</div>
                        <div style={{width: '10%'}}>{item.key} </div>
                        <div style={{width: '10%'}}>{item.start}</div>
                        <div style={{width: '10%'}}>{item.exp}</div>
                        <div style={{width: '15%'}}>{item.info}</div>
                        {
                            user && <div className='edit'><Button onClick={()=> updateItem(item)} size='small' color={'success'}><EditIcon/></Button></div>
                        }
                    </TableItem>)
                }
                <TableItem>
                    <div style={{width: '3%'}}>10</div>
                    <div style={{width: '15%'}}>2 Капитана</div>
                    <div style={{width: '15%'}}>Легион ООО</div>
                    <div style={{width: '12%'}}>Kaspersky Antivirus</div>
                    <div style={{width: '10%'}}>номер</div>
                    <div style={{width: '10%'}}>ключ </div>
                    <div style={{width: '10%'}}>14.07.2023</div>
                    <div style={{width: '10%'}}>19.08.2024</div>
                    <div style={{width: '15%'}}>- / 130</div>
                    {
                        user && <div className='edit'><Button onClick={()=> updateItem('item')} size='small' color={'success'}><EditIcon/></Button></div>
                    }
                </TableItem>

            </Scroll>
        </div>
    );
};

export default Licence;