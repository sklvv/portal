import '../usersAdmin.scss';
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import {useAuth} from "../../../hook/useAuth";
import TableItem from "../../../elements/Table/TableItem";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const UserAdminList = ({item, updateItem}) => {
    const {login, name, position, iboard, dashboard, portal} = item
    const {user} = useAuth()

    return (
        <TableItem>
            <div style={{flexBasis: '25%'}}>{name}</div>
            <div style={{flexBasis: '25%'}}>{login}</div>
            <div style={{flexBasis: '20%'}}>{position}</div>
            <div style={{flexBasis: '10%', position: 'relative'}}><CheckBtn item={dashboard}/></div>
            <div style={{flexBasis: '10%', position: 'relative'}}><CheckBtn item={iboard}/></div>
            <div style={{flexBasis: '10%', position: 'relative'}}><CheckBtn item={portal}/></div>
            {
                user && <div className='edit'><Button onClick={()=> updateItem(item)}  size='small' color={'success'}><EditIcon/></Button></div>
            }
        </TableItem>
    );
};

export default UserAdminList;

const CheckBtn = ({item}) => {
    return (
        <>
        { item
            ? <Button className='status green' size='small' ><CheckBoxIcon/></Button>
            : <Button className='status red' size='small' ><CheckBoxOutlineBlankIcon/></Button>
        }
        </>
    )
}