
import {useSelector} from "react-redux";

import lion from '../img/bg_lionRight2.png'
import lionBlack from '../img/bg_lionRight4.png'
import logoLight from '../img/header/logoLight.png';
import logoDark from '../img/header/logoDark.png';

/*главная тема*/
const dark = {
    text: "#ffffff", // цвет текста
    lion: lionBlack, // фон со львом
    logo: logoDark, // логотип
    bg: {
        main: "#515151",// фон основной страницы
        sideBar: '#333333',// фон сайдбара
        header: '#333333', // фон хедера
        modal:  "#7c7c7c", // фон модалки
    },
    select : '#333333', // select, dropdown
    divider: '#00000096', // divider for SB
    chart: { // цвета для графиков
        yellow: '#ffff00',
        red: '#db2823',
        green: '#9fdb21',
        grey: '#8795a1',
    }
}

const light = {
    text: "#000000",
    lion: lion,
    logo: logoLight,
    bg: {
        main: "#ffffff",
        sideBar: '#F5F5F5',
        header: '#F5F5F5',
        modal:  "#fff", // фон модалки
    },
    select : '',
    divider: '', // divider for SB
    chart: {
        yellow: '#eaee29',
        red: '#f11010',
        green: '#1cc700',
        grey: '#9f9f9f',
    }
}


export const useTheme = (param = false, param2 = false)=> {
    const mode = useSelector(state => state.header.mode);
    const theme =  mode === "dark" ? dark : light

    if (!param) {
        return mode === "dark" ? true : false
    } else if (param2){
        return theme[param][param2]
    }
     else {
        return theme[param]
    }


}