import './layout.scss'
import {Outlet} from "react-router-dom";
import Header from "./header/Header";
import SideMenu from "./sidebar/sideMenu";
import {useTheme} from "../hook/useTheme";

const Layout = () => {

    return (
        <>
            <header>
                <Header/>
            </header>
            {/*<main style={{background: `url(${(useTheme('bg', 'main'))})`, backgroundSize: 'contain',color: useTheme('text')}} >*/}
            <main style={{color: useTheme('text')}} className='container' >
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div style={{
                    backgroundImage: `url(${useTheme('lion')})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom right',
                    backgroundSize: '34%',
                    /*backgroundBlendMode: 'hard-light',*/
                    position: 'fixed',
                    zIndex: 0,
                    right: '0%',
                    width: '105%',
                    height: '100%'
                }}> </div>
                <div>
                    <SideMenu/>
                    <div className='pageContainer'>
                        <Outlet />
                    </div>
                </div>
            </main>

            <footer>

            </footer>
        </>
    );
};

export  {Layout};