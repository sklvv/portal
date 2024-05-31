import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import '../layout.scss'
import {ListItemIcon} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setActive} from "./SideMenuSlice";
import {Link} from "react-router-dom";
import {useTheme} from "../../hook/useTheme";

import {useEffect, useState} from "react";



const SideMenu = () => {
    const mode = useSelector(state => state.header.mode);
    const menuList = useSelector(state => state.sidemenu.menuList);
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.header.isAuth);

    /*надо ли???*/
    let authed = JSON.parse(localStorage.getItem('auth'))

    /*const [show, setShow] = useState(false)*/


    const [show, setShow] = useState(false)
    useEffect(()=>{

        if (isAuth){
            setShow(true)
        }

    },[isAuth])


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
                </Link>
            })
        }
      }
    const sidebarData = renderList(menuList)
    let sidebarAdmin = isAuth && renderList(menuList, true) || ''

    return (
        <div className='sideMenu' style={{background: useTheme('bg', 'sideBar')}}>
            <List>
                {
                    sidebarData ? sidebarData : ''
                }
            </List>
            {
                isAuth && <div>
                    <div className='divide'><span>Администрирование</span></div>
                    <List>
                        {
                            sidebarAdmin
                        }
                    </List>
                </div>
            }
            {/*<div className='divide'><span>Администрирование</span></div>
            <List>
                {
                    auth && sidebarAdmin
                }
            </List>*/}
        </div>
    );
};

export default SideMenu;

const SideBarList = ({item})=>{
    return (
        <ListItemButton sx={{height: 48,px: 2.5}}>
            {/*<img className='menuIcon' src={item.icon} alt={item.name}
                 style={{filter: useTheme() ? 'brightness(0) invert(1)': null}}
            />*/}
            {/*<ListItemIcon sx={{width: '44px', color: useTheme('text')}}>{item.icon}</ListItemIcon>*/}
            <ListItemIcon sx={{width: '44px', color: '#4ba93a'}}>{item.icon}</ListItemIcon>
            <div>{item.name}</div>
        </ListItemButton>
    )
}

