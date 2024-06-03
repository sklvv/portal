import React from 'react';
import BlockShadow from "../../elements/BlockShadow";
import './phoneBook.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LanIcon from '@mui/icons-material/Lan';
import PhoneBookFilters from "./subpages/PhoneBookFilters";
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";

const PhoneBook = () => {
    return (
        <div>
            <PhoneBookFilters/>
            <BlockShadow>
                <div className='listHeader'>
                    <div className='listIcon'><BadgeIcon/> <span> Ф.И.О.</span></div>
                    <div className='listIcon'><HomeRepairServiceIcon/> <span> Должность</span></div>
                    <div className='listIcon'><LanIcon/> <span> Отдел</span></div>
                    <div className='listIcon'><PhoneIcon/> <span> Телефон</span></div>
                </div>
            </BlockShadow>
            <BlockShadow>
                <div className='list'>
                    <div>Нуртинова Алиса Алекcеевна</div>
                    <div>Инженер по комплектации оборудования</div>
                    <div>БСС</div>
                    <div>156</div>
                    <div className='edit'><Button size='small' color={'success'}><EditIcon/></Button></div>
                </div>
            </BlockShadow>
            <BlockShadow>
                <div className='list'>
                    <div>Савельев Евгений Леонидович</div>
                    <div>CDO</div>
                    <div>ИТ Отдел</div>
                    <div>168</div>
                </div>
            </BlockShadow>
            <BlockShadow>
                <div className='list'>
                    <div>Зайцев Данил Юрьевич</div>
                    <div>Системный администратор</div>
                    <div>ИТ Отдел</div>
                    <div>246</div>
                </div>
            </BlockShadow>


        </div>
    );
};

export default PhoneBook;