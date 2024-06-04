import React from 'react';
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
import {resetDataForModal, setDataForModal} from "./PhoneBookSlice";

const PhoneBook = () => {

    const data = [
        {
            id: 1,
            name: 'Нуртинова Алиса Алекcеевна',
            position: 'Инженер по комплектации оборудования',
            dep: 'БСС',
            phone: '156',
        },
        {
            id: 2,
            name: 'Савельев Евгений Леонидович',
            position: 'CDO',
            dep: 'ИТ Отдел',
            phone: '168',
        },
        {
            id: 3,
            name: 'Зайцев Данил Юрьевич',
            position: 'Системный администратор',
            dep: 'ИТ Отдел',
            phone: '246',
        },
    ]

    const dispatch = useDispatch()
    const dataForModal = useSelector(state => state.phonebook.dataForModal);

    const {setModal} = useModal()
    const updateItem = (item = false) =>{
        dispatch(resetDataForModal())
        if (item) {
            dispatch(setDataForModal(item))
        }
         setModal('phoneBook')
    }

    return (
        <div>
            <PhoneBookFilters updateItem={updateItem}/>
            <BlockShadow>
                <div className='listHeader'>
                    <div className='listIcon'><BadgeIcon/> <span> Ф.И.О.</span></div>
                    <div className='listIcon'><HomeRepairServiceIcon/> <span> Должность</span></div>
                    <div className='listIcon'><LanIcon/> <span> Отдел</span></div>
                    <div className='listIcon'><PhoneIcon/> <span> Телефон</span></div>
                </div>
            </BlockShadow>
            { data.map((item) => <PhoneBookList key={item.id} item={item} updateItem={updateItem}/>)}
        </div>
    )
};

export default PhoneBook;