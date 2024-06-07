import React, {useEffect} from 'react';
import BlockShadow from "../../elements/BlockShadow";
import './phoneBook.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LanIcon from '@mui/icons-material/Lan';
import PhoneBookFilters from "./subpages/PhoneBookFilters";
import PhoneBookList from "./subpages/PhoneBookList";
import {useModal} from "../../hook/useModal";
import {useDispatch, useSelector} from "react-redux";
import {resetDataForModal, setDataForModal, setPhoneBook} from "./PhoneBookSlice";
import {useGetPhoneBook} from "../../hook/useGetQuery";
import Skelet from "../../elements/Skelet";
import {useQueryClient} from "react-query";

const PhoneBook = () => {
    const {data: phonebook, isLoading, isError} = useGetPhoneBook()

    /*const phonebook = useSelector(state => state.phonebook.phonebook);*/
    const dispatch = useDispatch()
    const {setModal} = useModal()

    const updateItem = (item = false) =>{
        dispatch(resetDataForModal())
        if (item._id) {
            dispatch(setDataForModal(item))
        }
         setModal('phoneBook')
    }

    /*useEffect(()=>{
        dispatch(setPhoneBook(phonebook))
    },[phonebook])*/



    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!phonebook) {return <h3>Нет данных с сервера</h3>}

    return (
        <div>
            <PhoneBookFilters updateItem={updateItem}/>
            <BlockShadow>
                <div className='listHeader' >
                    <div className='listIcon'><BadgeIcon/> <span> Ф.И.О.</span></div>
                    <div className='listIcon'><HomeRepairServiceIcon/> <span> Должность</span></div>
                    <div className='listIcon'><LanIcon/> <span> Отдел</span></div>
                    <div className='listIcon'><PhoneIcon/> <span> Телефон</span></div>
                </div>
            </BlockShadow>
            { phonebook?.map((item) => <PhoneBookList key={item._id} item={item} updateItem={updateItem}/>)}
        </div>
    )
};

export default PhoneBook;