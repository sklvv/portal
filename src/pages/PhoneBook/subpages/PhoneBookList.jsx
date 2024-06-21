import '../phoneBook.scss';
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import {useAuth} from "../../../hook/useAuth";
import TableItem from "../../../elements/Table/TableItem";

const PhoneBookList = ({item, updateItem}) => {
    const {name, position, dep, phone} = item
    const {user} = useAuth()
    return (
        <TableItem>
            <div style={{flexBasis: '30%'}}>{name}</div>
            <div style={{flexBasis: '30%'}}>{position}</div>
            <div style={{flexBasis: '25%'}}>{dep}</div>
            <div style={{flexBasis: '15%'}}>{phone}</div>
            {
                user && <div className='edit'><Button onClick={()=> updateItem(item)}  size='small' color={'success'}><EditIcon/></Button></div>
            }
        </TableItem>
    );
};

export default PhoneBookList;