import {useDispatch} from "react-redux";
import {closeModal, openModal} from "../elements/Modal/ModalSlice";
import {useState} from "react";


export const useModal = ()=> {
    const dispatch = useDispatch()
    const [extra, setExtra] = useState(false)

    const setModal= (variant) => dispatch(openModal(variant))
    const exitModal = () => dispatch(closeModal())

    return {setModal,exitModal, setExtra}
}