import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography
} from "@mui/material";
import {useAuth} from "../../hook/useAuth";
import {useNavigate} from "react-router";
import './header.scss'
import {useDispatch, useSelector} from "react-redux";
import {setMode} from './HeaderSlice'
import DropMenu from "./DropMenu";
import {useTheme} from "../../hook/useTheme";


const Header = () => {
    const navigate = useNavigate();
    const {signOut} = useAuth()
    const dispatch = useDispatch();
    const activePageName = useSelector(state => state.sidemenu.activePageName);

    const userName = localStorage.getItem('name') || ''

    /* получить текущую тему*/
    const getTheme = ()=>{
        return  JSON.parse(localStorage.getItem('theme'))
    }

    // смена темы
    const toggleTheme = () => {
        let theme = JSON.parse(localStorage.getItem('theme'))
        let toggle = !theme
        localStorage.setItem('theme', JSON.stringify(toggle));
        dispatch(setMode(toggle))
    }

    // разлогинить
    const handleLogout = () => {
        localStorage.setItem('auth', JSON.stringify(false));
        signOut(()=> navigate('/', {replace: true}));
    }

    const [time, setTime] = useState(new Date())
    const formattedTime = time.toLocaleTimeString().substring(0, 5);

    useEffect(() => {
        window.setInterval(() => setTime(new Date()), 60 * 1000);
        dispatch(setMode(getTheme()))
    }, []);

    const ruDate = new Intl.DateTimeFormat("ru", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
        .format(new Date())
        .replace(/(\u0433\.?)/, "");


      return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{background: useTheme('bg', 'header')}}>
                <Toolbar  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: '0 !important', pr: '0 !important'}}>
                    <Box className='logo' >
                        <img src={useTheme('logo')} alt="iBoard" style={{width: '190px'}}/>
                        <Typography component="div" sx={{fontWeight: 600, fontSize: '14px', color: '#4cb242'}}>iBOARD</Typography>
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
                        <Typography variant="h6" component="div" sx={{fontWeight: 600}}>{activePageName}</Typography>
                        <DropMenu userName={userName} toggleTheme={toggleTheme} handleLogout={handleLogout} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;