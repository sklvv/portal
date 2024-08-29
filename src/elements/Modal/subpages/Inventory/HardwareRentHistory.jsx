import React, {useEffect, useState} from 'react';
import TableHead from "../../../Table/TableHead";
import BlockShadow from "../../../BlockShadow";
import {useGetHardwareRentHistory} from "../../../../hook/useGetHardware";
import TableItem from "../../../Table/TableItem";

const HardwareRentHistory = ({inventory}) => {
    const {data: hardwareRent, isError} = useGetHardwareRentHistory(inventory)
    const [hardHistory, setHardHistory] = useState([])

    useEffect(()=>{
        setHardHistory(hardwareRent)
        // eslint-disable-next-line no-use-before-define
    },[hardwareRent])

    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!hardwareRent) {return <h3>Нет данных с сервера</h3>}
    return (
        <div>
            <BlockShadow >
                <TableHead>
                    <div style={{width: '5%'}} >№</div>
                    <div style={{width: '30%'}} >Ответственный</div>
                    <div style={{width: '20%'}} >Дата выдачи</div>
                    <div style={{width: '20%'}} >Дата возврата</div>
                    <div style={{width: '25%'}} >Кто принял</div>
                </TableHead>
            </BlockShadow>
            <div>
                {
                    hardHistory?.map((item, i) => {
                        return (
                            <TableItem key={item._id}>
                                <div style={{width: '5%'}}>{i + 1}</div>
                                <div style={{width: '30%'}}>{item.person}</div>
                                <div style={{width: '20%'}}>{item.start}</div>
                                <div style={{width: '20%'}}>{item.end}</div>
                                <div style={{width: '25%'}}>{item.whoGet}</div>
                            </TableItem>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HardwareRentHistory;