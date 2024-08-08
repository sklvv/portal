import './modal.scss'
import ModalAuth from "./subpages/ModalAuth";
import ModalPhoneBook from "./subpages/ModalPhoneBook";
import ModalTransport from "./subpages/ModalTransport";
import ModalUsers from "./subpages/ModalUsers";
import ModalLicence from "./subpages/ModalLicence";
import ModalResMailGroups from "./subpages/ModalResMailGroups";



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
        case 'licence':
            return  <ModalLicence />
            break;
        case 'users':
            return  <ModalUsers />
            break;
        case 'ModalResMailGroups':
            return  <ModalResMailGroups />
            break;
        default:
            return "Default";
            break;
    }
}