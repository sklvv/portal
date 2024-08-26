import '../phoneBook.scss';
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import {useAuth} from "../../../hook/useAuth";
import TableItem from "../../../elements/Table/TableItem";

const PhoneBookList = ({item, updateItem}) => {
    const {name, position, dep, phone, org} = item
    const {user} = useAuth()
    return (
        <TableItem>
            <div style={{flexBasis: '25%'}}>{name}</div>
            <div style={{flexBasis: '25%'}}>{position}</div>
            <div style={{flexBasis: '20%'}}>{dep}</div>
            <div style={{flexBasis: '20%'}}>{org}</div>
            <div style={{flexBasis: '10%'}}>{phone}</div>
            {
                user && <div className='edit'><Button onClick={()=> updateItem(item)}  size='small' color={'success'}><EditIcon/></Button></div>
            }
        </TableItem>
    );
};

export default PhoneBookList;



