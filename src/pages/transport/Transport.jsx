import BlockShadow from "../../elements/BlockShadow";
import './transport.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import {useModal} from "../../hook/useModal";
import {useDispatch, useSelector} from "react-redux";
import Skelet from "../../elements/Skelet";
import {useEffect} from "react";
import TransportList from "./subpages/TransportList";
import TransportFilters from "./subpages/TransportFilters";
import {setTransportList} from "./TransportSlice";
import {resetDataForModal, setDataForModal} from "../../elements/Modal/ModalSlice";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import {useGetTransport} from "../../hook/useGetTransport";
import {useTheme} from "../../hook/useTheme";
import TableHead from "../../elements/Table/TableHead";
import Scroll from "../../elements/Scroll";



const PhoneBook = () => {
    const {data: transport, isLoading, isError} = useGetTransport()
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
                <TableHead>
                    <div className='listIcon'><BadgeIcon/> <span> Ф.И.О.</span></div>
                    <div className='listIcon'><DirectionsCarIcon/> <span> МАРКА</span></div>
                    <div className='listIcon'><DirectionsCarIcon/> <span> МОДЕЛЬ</span></div>
                    <div className='listIcon'><DisplaySettingsIcon/> <span> ГОС НОМЕР</span></div>
                    <div className='listIcon'><PhoneIcon/> <span> ТЕЛЕФОН</span></div>
                </TableHead>
            </BlockShadow>
            <Scroll>
            { transportList?.map((item) => <TransportList key={item._id} item={item} updateItem={updateItem}/>)}
            </Scroll>
        </div>
    )
};

export default PhoneBook;
