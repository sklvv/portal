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
            <main style={{background: `url(${(useTheme('bg', 'main'))})`, color: useTheme('text')}} className='container' >
                {
                    useTheme()
                        ? <div>
                            <div className="stars"></div>
                            <div className="twinkling"></div>
                        </div>
                        : ''
                }
                <div className='lion' style={{backgroundImage: `url(${useTheme('lion')})`}}></div>
                <div className='pageWrapper'>
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