import './modal.scss'
import ModalAuth from "./subpages/ModalAuth";
import ModalPhoneBook from "./subpages/ModalPhoneBook";



export const modalData = (variant, mode)=>{
    let modalText = ''

    switch (variant){
        case 'auth':
            modalText =  <>
                <ModalAuth />
             </>
            break;
        case 'phoneBook':
            modalText =  <>
                <ModalPhoneBook />
            </>
            break;
        default:
            modalText = "Default";
            break;
    }

    return modalText;
}