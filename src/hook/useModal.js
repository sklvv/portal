import {useDispatch} from "react-redux";
import {openModal} from "../elements/Modal/ModalSlice";


export const useModal = ()=> {
    const dispatch = useDispatch()

    const setModal= (variant) => dispatch(openModal(variant))

    return {setModal}
}