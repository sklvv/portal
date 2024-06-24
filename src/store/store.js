import { configureStore } from '@reduxjs/toolkit';
import header from "../pages/header/HeaderSlice";
import modal from '../elements/Modal/ModalSlice'
import sidemenu from "../pages/sidebar/SideMenuSlice";
import phonebook from "../pages/phoneBook/PhoneBookSlice"
import transport from "../pages/transport/TransportSlice"
import userAdmin from "../pages/userAdmin/UserAdminSlice"


const store = configureStore({
  reducer: {header, modal, sidemenu, phonebook, transport, userAdmin},
  middleware: getDefaultMiddleware => getDefaultMiddleware(
      {
        serializableCheck: false,
      }
  ),
  devTools: process.env.NODE_ENV !== 'production',

})

export default store;

