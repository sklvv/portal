import {createSlice} from '@reduxjs/toolkit'
import production_black from "../../img/sidebar/production_black.png";
import sales_black from "../../img/sidebar/sales_black.png";
import goal_black from "../../img/sidebar/goal_black.png";
import economics_black from "../../img/sidebar/economics_black.png";
import finance_black from "../../img/sidebar/finance_black.png";
import equality_black from "../../img/sidebar/equality_black.png";
import resources_black from "../../img/sidebar/resources_black.png";
import guardian_black from '../../img/sidebar/guardian_black.png'

const initialState = {
    activePageName: 'Портал',
    menuList: [
        {
            id: 1,
            icon: production_black,
            name: 'Портал',
            active: true,
            link: 'main'
        },
        {
            id: 2,
            icon: sales_black,
            name: 'Телефоны',
            active: false,
            link: 'phoneBook'
        },
        {
            id: 3,
            icon: goal_black,
            name: 'Пользователи',
            active: false,
            link: 'userAdmin'
        },
        {
            id: 4,
            icon: economics_black,
            name: 'Конфиг. iBoard',
            active: false,
            link: 'iboardAdmin'
        },
        {
            id: 5,
            icon: finance_black,
            name: 'Конфиг. Dashboard',
            active: false,
            link: 'dashboardAdmin'
        },
        {
            id: 6,
            icon: equality_black,
            name: 'Инвентаризация ИТ',
            active: false,
            link: 'inventory'
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