import React, {useMemo} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Page404 from "./pages/404/Page404";
import {Layout} from "./pages/Layout";
import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import {createTheme, ThemeProvider} from "@mui/material";
import {themeMode} from "./utils/theme";
import TransitionsModal from "./elements/Modal/Modal";
import PhoneBook from "./pages/phoneBook/PhoneBook";
import UserAdmin from "./pages/userAdmin/UserAdmin";
import Transport from "./pages/transport/Transport";
import Resources from "./pages/resources/Resources";
import Inventory from "./pages/inventory/Inventory";



function App() {
    const theme = useMemo(() => createTheme(themeMode),[]);

    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path='*' element={<Page404/>}/>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<PhoneBook/>}/>
                        {/*<Route  path='/main' element={<Main />}/>*/}
                        <Route  path='/phoneBook' element={<PhoneBook />}/>
                        <Route  path='/userAdmin' element={<RequireAuth><UserAdmin /></RequireAuth>}/>
                        <Route  path='/iboardAdmin' element={<Page404 />}/>
                        <Route  path='/dashboardAdmin' element={<Page404 />}/>
                        <Route  path='/inventory' element={<Inventory/>}/>
                        <Route  path='/resources' element={<Resources />}/>
                        <Route  path='/transport' element={<Transport />}/>
                    </Route>
                </Routes>
                <TransitionsModal/>
            </ThemeProvider>
        </AuthProvider>
    );
}


export default App;