import { configureStore } from '@reduxjs/toolkit';
import header from "../pages/header/HeaderSlice";
import modal from '../elements/Modal/ModalSlice'
import sidemenu from "../pages/sidebar/SideMenuSlice";



const store = configureStore({
  reducer: {header, modal, sidemenu},
  middleware: getDefaultMiddleware => getDefaultMiddleware(
      {
        serializableCheck: false,
      }
  ),
  devTools: process.env.NODE_ENV !== 'production',

})

export default store;

