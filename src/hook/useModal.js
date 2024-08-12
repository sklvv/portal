import {useDispatch} from "react-redux";
import {closeModal, openModal} from "../elements/Modal/ModalSlice";


export const useModal = ()=> {
    const dispatch = useDispatch()

    const setModal= (variant) => dispatch(openModal(variant))

    const exitModal = (time = 100) => {
        setTimeout(() => {
            dispatch(closeModal())
        }, time);
    }

    return {setModal,exitModal}
}