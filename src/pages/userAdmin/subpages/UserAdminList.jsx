import '../usersAdmin.scss';
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import {useAuth} from "../../../hook/useAuth";
import TableItem from "../../../elements/Table/TableItem";


const UserAdminList = ({item, updateItem}) => {
    const {login, name, position, iboard, dashboard, portal} = item
    const {user} = useAuth()

    return (
        <TableItem>
            <div style={{flexBasis: '25%'}}>{name}</div>
            <div style={{flexBasis: '25%'}}>{login}</div>
            <div style={{flexBasis: '20%'}}>{position}</div>
            <div style={{flexBasis: '10%'}}>{ iboard ? <span style={{color: 'green'}}>OK</span> : <span style={{color: 'red'}}>НЕТ</span>}</div>
            <div style={{flexBasis: '10%'}}>{ dashboard ? <span style={{color: 'green'}}>OK</span> : <span style={{color: 'red'}}>НЕТ</span>}</div>
            <div style={{flexBasis: '10%'}}>{ portal ? <span style={{color: 'green'}}>OK</span> : <span style={{color: 'red'}}>НЕТ</span>}</div>

            {
                user && <div className='edit'><Button onClick={()=> updateItem(item)}  size='small' color={'success'}><EditIcon/></Button></div>
            }
        </TableItem>
    );
};

export default UserAdminList;