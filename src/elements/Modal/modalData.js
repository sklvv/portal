import './modal.scss'
import ModalAuth from "./subpages/ModalAuth";



export const modalData = (variant, mode)=>{
    let modalText = ''

    switch (variant){
        case 'auth':
            modalText =  <>
                <ModalAuth />
             </>
            break;
        default:
            modalText = "Default";
            break;
    }

    return modalText;
}