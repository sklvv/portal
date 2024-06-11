import BlockShadow from "../../elements/BlockShadow";
import './transport.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LanIcon from '@mui/icons-material/Lan';
import {useModal} from "../../hook/useModal";
import {useDispatch, useSelector} from "react-redux";
import {useGetPhoneBook} from "../../hook/useGetQuery";
import Skelet from "../../elements/Skelet";
import {useEffect} from "react";
import TransportList from "./subpages/TransportList";
import TransportFilters from "./subpages/TransportFilters";
import {setTransportList} from "./TransportSlice";
import {resetDataForModal, setDataForModal} from "../../elements/Modal/ModalSlice";


const PhoneBook = () => {
    const {data: transport, isLoading, isError} = useGetPhoneBook()
    const dispatch = useDispatch()
    const {setModal} = useModal()
    const transportList = useSelector(state => state.transport.transportList);

    const updateItem = (item = false) =>{
        dispatch(resetDataForModal())
        if (item._id) {
            dispatch(setDataForModal(item))
        }
        setModal('transport')
    }

    useEffect(()=>{
        dispatch(setTransportList(transport))
    },[transport])



    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!transport) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            <TransportFilters updateItem={updateItem}/>
            <BlockShadow >
                <div  className='listHeader'>
                    <div className='listIcon'><BadgeIcon/> <span> Ф.И.О.</span></div>
                    <div className='listIcon'><HomeRepairServiceIcon/> <span> ДОЛЖНОСТЬ</span></div>
                    <div className='listIcon'><LanIcon/> <span> ОТДЕЛ</span></div>
                    <div className='listIcon'><PhoneIcon/> <span> ТЕЛЕФОН</span></div>
                </div>
            </BlockShadow>
            { transportList?.map((item) => <TransportList key={item._id} item={item} updateItem={updateItem}/>)}
        </div>
    )
};

export default PhoneBook;
