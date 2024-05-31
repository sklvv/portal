import {createSlice} from '@reduxjs/toolkit'
import CallIcon from '@mui/icons-material/Call';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ApiIcon from '@mui/icons-material/Api';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

const initialState = {
    activePageName: 'Портал',
    menuList: [
        {
            id: 1,
            icon: <NotListedLocationIcon/>,
            name: 'Портал',
            active: true,
            link: 'main',
            admin: false,
        },
        {
            id: 2,
            icon: <CallIcon/>,
            name: 'Тел. справочник',
            active: false,
            link: 'phoneBook',
            admin: false,
        },
        {
            id: 3,
            icon: <CoPresentIcon/>,
            name: 'Пользователи',
            active: false,
            link: 'userAdmin',
            admin: true,
        },
        {
            id: 4,
            icon: <ApiIcon/>,
            name: 'iBoard',
            active: false,
            link: 'iboardAdmin',
            admin: true,
        },
        {
            id: 5,
            icon: <ApiIcon/>,
            name: 'Dashboard',
            active: false,
            link: 'dashboardAdmin',
            admin: true,
        },
        {
            id: 6,
            icon: <ImportantDevicesIcon/>,
            name: 'Учет техники',
            active: false,
            link: 'inventory',
            admin: true,
        },
        {
            id: 7,
            icon: <CloudSyncIcon/>,
            name: 'Ресурсы',
            active: false,
            link: 'resources',
            admin: false,
        },

    ],
}

const sidemenuSlice = createSlice({
    name: 'sidemenu',
    initialState,
    reducers: {
        setActive: (state,action) => {
            let x = []
            state.menuList.forEach((item => {
                if (item.id === action.payload){
                    item.active = true
                    state.activePageName = item.name
                } else {
                    item.active = false
                }
                x.push(item)
            }))
            state.menuList = x

        },
    },
});

const {actions, reducer} = sidemenuSlice;

export default reducer;
export const {
    setActive,
} = actions;