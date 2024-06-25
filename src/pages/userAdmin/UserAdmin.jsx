import BlockShadow from "../../elements/BlockShadow";
import ApiIcon from '@mui/icons-material/Api';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {useEffect} from "react";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import './usersAdmin.scss'
import {useDispatch, useSelector} from "react-redux";
import {useModal} from "../../hook/useModal";
import {useGetUsers} from "../../hook/useGetUsers";
import Skelet from "../../elements/Skelet";
import TableHead from "../../elements/Table/TableHead";
import BadgeIcon from "@mui/icons-material/Badge";
import Scroll from "../../elements/Scroll";
import {setUserList} from "./UserAdminSlice";
import {resetDataForModal, setDataForModal} from "../../elements/Modal/ModalSlice";
import UserAdminList from "./subpages/UserAdminList";


const UserAdmin = () => {
    const {data: users, isLoading, isError} = useGetUsers()
    const dispatch = useDispatch()
    const {setModal} = useModal()
    const userList = useSelector(state => state.userAdmin.userList);

    useEffect(()=>{
        dispatch(setUserList(users))
        // eslint-disable-next-line no-use-before-define
    },[users])

    const updateItem = (item = false) =>{
        dispatch(resetDataForModal())
        if (item._id) {
            dispatch(setDataForModal(item))
        }
        setModal('users')
    }

    if (isLoading) {return <Skelet/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!users) {return <h3>Нет данных с сервера</h3>}

    console.log(users)
    return (
        <div>
            <BlockShadow >
                <TableHead>
                    <div style={{flexBasis: '25%'}} className='listIcon'><BadgeIcon/> <span> Ф.И.О.</span></div>
                    <div style={{flexBasis: '25%'}} className='listIcon'><AlternateEmailIcon/> <span> Почта</span></div>
                    <div style={{flexBasis: '20%'}} className='listIcon'><AdminPanelSettingsIcon/> <span> Роль</span></div>
                    <div style={{flexBasis: '10%'}} className='listIcon'><ApiIcon/> <span> iBoard</span></div>
                    <div style={{flexBasis: '10%'}} className='listIcon'><ApiIcon/> <span> Dashboard</span></div>
                    <div style={{flexBasis: '10%'}} className='listIcon'><ApiIcon/> <span> Portal</span></div>
                </TableHead>
            </BlockShadow>
            <Scroll>
                { userList?.map((item) => <UserAdminList key={item._id} item={item} updateItem={updateItem}/>)}
            </Scroll>





        </div>
    );
};

export default UserAdmin;