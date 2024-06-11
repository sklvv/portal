import '../phoneBook.scss';
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import BlockShadow from "../../../elements/BlockShadow";
import React from "react";
import {useAuth} from "../../../hook/useAuth";

const PhoneBookList = ({item, updateItem}) => {
    const {name, position, dep, phone} = item
    const {user} = useAuth()
    return (
        <BlockShadow>
            <div className='list'>
                <div>{name}</div>
                <div>{position}</div>
                <div>{dep}</div>
                <div>{phone}</div>
                {
                    user && <div className='edit'><Button onClick={()=> updateItem(item)}  size='small' color={'success'}><EditIcon/></Button></div>
                }

            </div>
        </BlockShadow>
    );
};

export default PhoneBookList;