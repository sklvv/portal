import * as React from 'react';
import './modal.scss'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {useDispatch, useSelector} from "react-redux";
import {closeModal, openModal} from "./ModalSlice";
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";
import {modalData} from "./modalData";
import {useTheme} from "../../hook/useTheme";



export default function TransitionsModal() {
    const dispatch = useDispatch();
    const handleClose = () => dispatch(closeModal());
    const open = useSelector(state => state.modal.open);
    const variant = useSelector(state => state.modal.variant);
    const mode = useSelector(state => state.header.mode);
    let modalText = modalData(variant, mode)

    return (
        <div >
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                disableAutoFocus={false}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={{backgroundColor: useTheme('bg', 'modal'),
                        color: useTheme('text')
                    }} className='modal'>
                        <div className='modalBtn'>
                            <IconButton onClick={handleClose} size="large">
                                <CloseIcon fontSize='inherit'/>
                            </IconButton>
                        </div>
                        <div style={{color: useTheme('text')}}>
                            {modalText}
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
