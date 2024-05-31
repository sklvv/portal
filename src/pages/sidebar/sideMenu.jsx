import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import '../layout.scss'
import {Divider, ListItemIcon} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setActive} from "./SideMenuSlice";
import {Link} from "react-router-dom";
import {useTheme} from "../../hook/useTheme";
import {useEffect} from "react";
import {useAuth} from "../../hook/useAuth";



const SideMenu = () => {
    const mode = useSelector(state => state.header.mode);
    const menuList = useSelector(state => state.sidemenu.menuList);
    const dispatch = useDispatch()
    const {auth} = useAuth()

    const color = useTheme('divider')

    const renderList = (data, admin = false)=>{
        if (data){
            let newData = []
            if (admin ){
                newData = data.filter(i => i.admin === true)
            } else {
                newData = data.filter(i => i.admin !== true)
            }
            return newData.map(item => {
                return  <Link to={`/${item.link}`} key={item.id}>
                    <ListItem disablePadding  className={item.active ? 'active' : null}
                              onClick={()=> dispatch(setActive(item.id))}
                              sx={{'&:hover': {backgroundColor: mode === 'dark' ? 'rgb(81 81 81)' : ''}}}
                    >
                            <SideBarList item={item}/>
                    </ListItem>
                    <Divider sx={{borderColor: color}}/>
                </Link>
            })
        }
      }
    const sidebarData = renderList(menuList)
    let sidebarAdmin = renderList(menuList, true)

    useEffect(()=>{
        if (!auth){
            sidebarAdmin = ''
        }
    },[auth])

    return (
        <div className='sideMenu' style={{background: useTheme('bg', 'sideBar')}}>
            <List>{sidebarData ? sidebarData : ''}</List>
            {
                auth
                    ? <div>
                        <div className='divide'><span>Администрирование</span></div>
                        <List>{sidebarAdmin}</List>
                    </div>
                    : ''
            }
        </div>
    );
};

export default SideMenu;

const SideBarList = ({item})=>{
    return (
        <ListItemButton sx={{height: 48,px: 2.5}}>
            <ListItemIcon sx={{width: '44px', color: '#4ba93a'}}>{item.icon}</ListItemIcon>
            <div>{item.name}</div>
        </ListItemButton>
    )
}

