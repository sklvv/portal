import React from 'react';
import TableHead from "../../../elements/Table/TableHead";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BlockShadow from "../../../elements/BlockShadow";
import Scroll from "../../../elements/Scroll";

const IPtable = () => {
    return (
        <div>
            <BlockShadow >
                <TableHead>
                    <div style={{width: '3%'}} >№</div>
                    <div style={{width: '20%'}} ><span> IP</span></div>
                    <div style={{width: '20%'}} ><span> Тип</span></div>
                    <div style={{width: '27%'}} ><span> Наименование</span></div>
                    <div style={{width: '20%'}} className='listIcon'>Описание</div>
                </TableHead>
            </BlockShadow>
            <Scroll h='h210'>

            </Scroll>

        </div>
    );
};

export default IPtable;