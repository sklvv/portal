import './modal.scss'
import ModalAuth from "./subpages/ModalAuth";
import ModalPhoneBook from "./subpages/ModalPhoneBook";
import ModalTransport from "./subpages/ModalTransport";



export const modalData = (variant, mode)=>{

    switch (variant){
        case 'auth':
            return <ModalAuth />
            break;
        case 'phoneBook':
            return  <ModalPhoneBook />
            break;
        case 'transport':
            return  <ModalTransport />
            break;
        default:
            return "Default";
            break;
    }
}