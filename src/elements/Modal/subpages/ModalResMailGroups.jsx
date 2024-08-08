import React from 'react';
import {useSelector} from "react-redux";
import {useModal} from "../../../hook/useModal";

const ModalResMailGroups = () => {
    const dataForModal = useSelector(state => state.modal.dataForModal);
    const {exitModal} = useModal()

    exitModal(1000)

    return (
        <div>
            <b style={{color: 'green'}}>{dataForModal}</b> скопирован в буфер обмена
        </div>
    );
};

export default ModalResMailGroups;