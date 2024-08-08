import ListItemButton from "@mui/material/ListItemButton";
import '../layout.scss'
import {Divider, ListItemIcon} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setActive} from "./SideMenuSlice";
import {Link, NavLink} from "react-router-dom";
import {useTheme} from "../../hook/useTheme";
import {useEffect} from "react";
import {useAuth} from "../../hook/useAuth";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import CallIcon from "@mui/icons-material/Call";
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ApiIcon from '@mui/icons-material/Api';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

const SideMenu = () => {
    const mode = useSelector(state => state.header.mode);
    const menuList = useSelector(state => state.sidemenu.menuList);
    const dispatch = useDispatch()
    const {auth} = useAuth()
    const color = useTheme('divider')
    const currentPath = (window.location.pathname).replace('/', '');

    const themeColor = useTheme() ? '' : 'themeColor'

    /*useEffect(()=>{
        dispatch(setPage(currentPath))
    },[])*/



    return (
        <div className='sideMenu' style={{background: useTheme('bg', 'sideBar')}}>
            <SimpleTreeView>
                <Tree name={'Тел. справочник'} ico={<CallIcon/>} link={'phoneBook'} />
                <Tree name={'Ресурсы'} ico={<CloudSyncIcon/>} link={'resources'} />
            </SimpleTreeView>
            {
                auth
                ? <SimpleTreeView>
                        <div className='divide'><span>Администрирование</span></div>
                        <Tree name={'Пользователи'} ico={<CoPresentIcon/>} link={'userAdmin'} />
                        <Tree name={'iBoard'} ico={<ApiIcon/>} link={'iboardAdmin'} />
                        <Tree name={'Dashboard'} ico={<ApiIcon/>} link={'dashboardAdmin'} />
                        <Tree name={'Учёт'} ico={<ImportantDevicesIcon/>} link={'inventory'} />
                        <Tree name={'Транспорт'} ico={<DriveEtaIcon/>} link={'transport'} />
                    </SimpleTreeView>
                : ''
            }
            <SimpleTreeView sx={{position: 'absolute', bottom: '64px', width: '100%'}}>
                <Link to={'/versionLog'} onClick={()=>{dispatch(setActive('versionLog'))}}>
                    <TreeItem itemId={'versionLog'} className={themeColor}
                              label={
                                  <ListItemButton sx={{height: 40}}>
                                      <ListItemIcon className='ver' sx={{width: '44px', color: useTheme('text')}}><PrivacyTipIcon/></ListItemIcon>
                                      <div style={{color: '#18f12f'}}>О версии</div>
                                  </ListItemButton>
                              }>
                    </TreeItem>
                </Link>
            </SimpleTreeView>

        </div>
    );
};

export default SideMenu;

const Tree = ({name, img = false, ico = false, link = false, children})=>{
    const links = link ? `/${link}` : ''
    const color = useTheme('divider')
    const themeColor = useTheme() ? 'xxx' : 'themeColor'
    const dispatch = useDispatch()
    const neon = useTheme('neonGreen')

    const activate = (page)=>{
        dispatch(setActive(page))
    }


    return (
        <NavLink to={links} onClick={()=>{activate(name)}} >
            <TreeItem itemId={name + Math.random()} className={themeColor}
                      label={
                          <ListItemButton sx={{height: 40}}>
                              { img &&
                                  <img className={`menuIcon ${themeColor}`} src={img} alt={name}/>
                              }
                              { ico &&
                                  <ListItemIcon className={`menuIcon img `} sx={{width: '44px', color: neon}}>{ico}</ListItemIcon>
                              }
                              <div>{name}</div>
                          </ListItemButton>
                      }>{children}</TreeItem>
            <Divider sx={{borderColor: color}}/>
        </NavLink>
    )
}
