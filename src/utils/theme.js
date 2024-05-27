import lion from '../img/bg_lionRight2.png'
import lionBlack from '../img/bg_lionRight4.png'
import logoLight from '../img/header/logoLight.png';
import logoDark from '../img/header/logoDark.png';

/*главная тема*/
export const dark = {
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
    chart: { // цвета для графиков
        yellow: '#ffff00',
        red: '#db2823',
        green: '#9fdb21',
        grey: '#8795a1',
    }
}

export const light = {
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
    chart: {
        yellow: '#eaee29',
        red: '#f11010',
        green: '#1cc700',
        grey: '#9f9f9f',
    }
}


/*export const color = {
    grey: '#333333',
    grey_: '#33333385',
    black: '#1C1B1B',
    yellow: '#ffff00',
    red: '#db2823',
    green: '#9fdb21',
    grey2: '#8795a1',
}*/


export const palette = {
    color: {
        grey: '#333333',
        grey_: '#33333385',
        black: '#1C1B1B',
    },
    black: "#000000",
    white: "#ffffff",
    red: "#F60209",
    yellow: "#F9DE05",
    green: "#2DB432",
    grey: {
        500: "#7C7C7C",
        600: "#9F9F9F",
        700: "#F5F5F5",
    },
    primary: {
        //dark
        10: "#ffffff",
        100: "#dedfdf",
        200: "#bdbfc0",
        300: "#9c9ea0",
        400: "#1f2026",
        500: "#515151",
        600: "#7C7C7C",
        700: "#B00000",
        800: "#F7F21A",
        900: "#2DB432",
        1000: "#E6E6E6",
    },
    secondary: {
        //light
        10: "#ffffff",
        100: "#dedfdf",
        200: "#bdbfc0",
        300: "#9c9ea0",
        400: "#1f2026",
        500: "#7C7C7C",
        600: "#484b4e",
        700: "#B00000",
        800: "#F7F21A",
        900: "#2DB432",
        1000: "#E6E6E6",
    },
    tertiary: {
        500: "#8884d8",
    },

    barLine: {
        500: "#8884d8",
        600: "#82ca9d",
    },
    background: {
        default: "#5a5e61",
    },
};

export const themeSettings = {
    palette: {
        background: {
            default: palette.background.default,
        },
        barLine: {
            ...palette.barLine,
        },
    },
};

export const themeMode = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        ...palette.primary,
                        main: palette.grey[600],
                    },
                    secondary: {
                        ...palette.secondary,
                        main: palette.grey[600],
                    },
                    tertiary: {
                        ...palette.tertiary,
                        main: palette.grey[600],
                    },
                    background: {
                        default: palette.primary[500],
                    },
                }
                : {
                    primary: {
                        ...palette.primary,
                        main: palette.primary[10],
                    },
                    secondary: {
                        ...palette.secondary,
                        main: palette.secondary[10],
                    },
                    tertiary: {
                        ...palette.tertiary,
                        main: palette.grey[600],
                    },
                    background: {
                        default: palette.primary[1000],
                    },
                }),
        },
        typography: {
            allVariants: {
                color: mode === "dark" ? palette.white : palette.black,
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    text: {
                        color: mode === "dark" ? palette.white : palette.black,
                    },
                    outlined: {
                        color: mode === "dark" ? palette.white : palette.black,
                    },
                    contained: {
                        color: mode === "dark" ? palette.white : palette.black,
                    },
                },
            },
        },
    };
};
