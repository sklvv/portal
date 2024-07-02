import '../transport.scss'
import {useAuth} from "../../../hook/useAuth";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import TableItem from "../../../elements/Table/TableItem";

const TransportList = ({item, updateItem}) => {
    const {name, car, number, phone, carmodel} = item
    const {user} = useAuth()
    return (
        <TableItem>
            <div style={{flexBasis: '30%'}}>{name}</div>
            <div style={{flexBasis: '10%'}}>{car}</div>
            <div style={{flexBasis: '10%'}}>{carmodel}</div>
            <div style={{flexBasis: '15%'}}>{number}</div>
            <div style={{flexBasis: ''}}>{phone}</div>
            {
                user && <div className='edit'><Button onClick={()=> updateItem(item)}  size='small' color={'success'}><EditIcon/></Button></div>
            }
        </TableItem>
    );
};

export default TransportList;