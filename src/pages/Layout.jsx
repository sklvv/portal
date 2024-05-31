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
            <main style={{background: useTheme('bg', 'main'),color: useTheme('text')}} >
                <div style={{
                    backgroundImage: `url(${useTheme('lion')})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom right',
                    backgroundSize: '34%',
                    backgroundBlendMode: 'hard-light'
                }}>
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