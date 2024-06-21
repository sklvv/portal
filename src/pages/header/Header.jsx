import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box, IconButton,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";
import {useAuth} from "../../hook/useAuth";
import './header.scss'
import {useDispatch, useSelector} from "react-redux";
import {setMode} from './HeaderSlice'
import DropMenu from "./DropMenu";
import {useTheme} from "../../hook/useTheme";
import EngineeringIcon from '@mui/icons-material/Engineering';
import {useModal} from "../../hook/useModal";
import Switch from "@mui/material/Switch";


const Header = () => {
    const activePageName = useSelector(state => state.sidemenu.activePageName);
    const {signOut,checkLogin, user} = useAuth()
    const dispatch = useDispatch();
    const {setModal} = useModal()


    /* получить текущую тему*/
    const getTheme = localStorage.getItem('theme')

    // смена темы
    const toggleTheme = (newTheme) => {
        localStorage.setItem('theme', newTheme);
        dispatch(setMode(newTheme))
    }
    // смена темы без авторизации
    const [switchState, setSwitchState] = useState(true)
    const unAuthTheme = ()=>{
        let x = localStorage.getItem('theme')
        setSwitchState(!switchState)
        let y = x === 'dark' ? 'light' : 'dark'
        toggleTheme(y)
    }
    const tooltipState = switchState ? 'Вкл. темную тему' : 'Вкл. светлую тему'


    // разлогинить
    const handleLogout = () => {
        signOut();
    }

    const [time, setTime] = useState(new Date())
    const formattedTime = time.toLocaleTimeString().substring(0, 5);

    useEffect(() => {
        window.setInterval(() => setTime(new Date()), 60 * 1000);
        toggleTheme(getTheme)
        if (getTheme === 'dark'){setSwitchState(false)}
        else {setSwitchState(true)}
        checkLogin()

    }, []);

    const ruDate = new Intl.DateTimeFormat("ru", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
        .format(new Date())
        .replace(/(\u0433\.?)/, "");

    const isTheme = useTheme('text')

      return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{background: useTheme('bg', 'header')}}>
                <Toolbar  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: '0 !important', pr: '0 !important'}}>
                    <Box className='logo' >
                        <img src={useTheme('logo')} alt="Portal" style={{width: '190px'}}/>
                        <Typography component="div" sx={{fontWeight: 600, fontSize: '14px', color: '#4cb242'}}>Portal</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexGrow: 1,
                        justifyContent: 'space-between',
                        color: useTheme('text')}}
                    >
                        <Box sx={{pl: '24px'}}>
                            <Typography  component="div">{formattedTime}</Typography>
                            <Typography component="div">{ruDate}</Typography>
                        </Box>
                        <Typography  component="div" sx={{fontSize: 24, fontWeight: 500}}>{activePageName}</Typography>
                        {
                            user
                            ? <DropMenu user={user} toggleTheme={toggleTheme} handleLogout={handleLogout} />
                            : <div>
                                    <Tooltip title={<Typography variant="body2" gutterBottom>{tooltipState}</Typography>}>
                                        <Switch onClick={unAuthTheme} checked={switchState} color="success"/>
                                    </Tooltip>
                                    <Tooltip title={<Typography variant="body2" gutterBottom>Авторизация</Typography>}>
                                        <IconButton size="large" sx={{color: isTheme, paddingRight: '10px'}} onClick={()=>setModal('auth')}><EngineeringIcon /></IconButton>
                                    </Tooltip>
                              </div>
                        }
                        {/*<DropMenu userName={userName} toggleTheme={toggleTheme} handleLogout={handleLogout} />*/}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;