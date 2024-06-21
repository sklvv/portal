import '../transport.scss'
import {useAuth} from "../../../hook/useAuth";
import BlockShadow from "../../../elements/BlockShadow";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import TableItem from "../../../elements/Table/TableItem";

const TransportList = ({item, updateItem}) => {
    const {name, car, number, phone, carmodel} = item
    const {user} = useAuth()
    return (
        <TableItem>
            <div>{name}</div>
            <div>{car}</div>
            <div>{carmodel}</div>
            <div>{number}</div>
            <div>{phone}</div>
            {
                user && <div className='edit'><Button onClick={()=> updateItem(item)}  size='small' color={'success'}><EditIcon/></Button></div>
            }
        </TableItem>
    );
};

export default TransportList;