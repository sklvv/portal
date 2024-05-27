import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import '../layout.scss'
import {Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import guardian_black from '../../img/sidebar/guardian_black.png'
import {setActive} from "./SideMenuSlice";
import {Link} from "react-router-dom";
import {useTheme} from "../../hook/useTheme";

const SideMenu = () => {
    const mode = useSelector(state => state.header.mode);
    const menuList = useSelector(state => state.sidemenu.menuList);
    const dispatch = useDispatch()

    const renderList = (data)=>{
        if (data){
            return data.map(item => {
                return  <Link to={`/${item.link}`} key={item.id}>
                    <ListItem disablePadding  className={item.active ? 'active' : null}
                              onClick={()=> dispatch(setActive(item.id))}
                              sx={{'&:hover': {backgroundColor: mode === 'dark' ? 'rgb(81 81 81)' : ''}}}
                    >
                        {
                            item.id === 8
                            ?
                                <SpecialId8 item={item}/>
                            :
                                <SideBarList item={item}/>
                        }
                    </ListItem>
                </Link>
            })
        }
      }
    const sidebarData = renderList(menuList)

    return (
        <div className='sideMenu' style={{background: useTheme('bg', 'sideBar')}}>
            <List>
                {
                    sidebarData ? sidebarData : ''
                }
            </List>
        </div>
    );
};

export default SideMenu;

const SideBarList = ({item})=>{
    return (
        <ListItemButton sx={{height: 48,px: 2.5}}>
            <img className='menuIcon' src={item.icon} alt={item.name}
                 style={{filter: useTheme() ? 'brightness(0) invert(1)': null}}
            />
            <div>{item.name}</div>
        </ListItemButton>
    )
}

const SpecialId8 = (item) => {
    return (
            <ListItemButton sx={{height: 80,px: 2.5}}>
                <img className='menuIcon' src={guardian_black} alt={item.name}
                     style={{filter: useTheme() ? 'brightness(0) invert(1)': null}}/>
                <div>
                    <Typography component="div">Потери</Typography>
                    <Typography component="div">Разрывы</Typography>
                    <Typography component="div">Развитие</Typography>
                </div>
            </ListItemButton>
    )
}