import React from 'react';
import {useAuth} from "../../../hook/useAuth";
import BlockShadow from "../../../elements/BlockShadow";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const TransportList = ({item, updateItem}) => {
    const {name, car, number, phone} = item
    const {user} = useAuth()
    return (
        <BlockShadow>
            <div className='list'>
                <div>{name}</div>
                <div>{car}</div>
                <div>{number}</div>
                <div>{phone}</div>
                {
                    user && <div className='edit'><Button onClick={()=> updateItem(item)}  size='small' color={'success'}><EditIcon/></Button></div>
                }

            </div>
        </BlockShadow>
    );
};

export default TransportList;