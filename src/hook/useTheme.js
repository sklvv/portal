import {useSelector} from "react-redux";
import lion from '../img/bg_lionRight2.png'
import logoLight from '../img/header/logoLight.png';
import logoDark from '../img/header/logoDark.png';
import lionGreen from '../img/lionGrey10.png'


/*главная тема*/
const dark = {
    text: "#ffffff", // цвет текста
    lion: lionGreen, // фон со львом
    logo: logoDark, // логотип
    bg: {
        main: '',// фон основной страницы
        sideBar: '#100f0f',// фон сайдбара
        header: '#100f0f', // фон хедера
       /* modal:  "#7c7c7c",*/ // фон модалки
        modal:  "#0e0f0e", // фон модалки
    },
    select : '#333333', // select, dropdown
    divider: '#80808096', // divider for SB
    chart: { // цвета для графиков
        yellow: '#ffff00',
        red: '#db2823',
        green: '#9fdb21',
        grey: '#8795a1',
    },
    listHeader: '#171717',
    listHeaderText: '#9f9f9f',
    scroll: 'black',
    neonGreen: '#17fa2f',
    neonGreenShadow: '-1px 1px 10px #1dd530, 0px -2px 10px #1dd530', //неон тень на модальных окнах


}

const light = {
    text: "#000000",
    lion: lion,
    logo: logoLight,
    bg: {
        main: "#fafafb",
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
    },
    listHeader: '#f5f5f5',
    listHeaderText: '#444444',
    scroll: '#dddddd',
    neonGreen: '#4cb242',
    neonGreenShadow: ''
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