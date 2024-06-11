import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    open: false,
    variant: '', // указания типа модалки, какую будет выведено
    dataForModal: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.variant = action.payload
            state.open = true;
        },
        closeModal: (state) => {
            state.open = false;
        },
        setDataForModal: (state, action) => {
            state.dataForModal = action.payload
        },
        setIconForModal: (state) => {
            state.iconForModal = true
        },
        resetDataForModal: (state) => {
            state.dataForModal = false
        },
    },
});

const {actions, reducer} = modalSlice;

export default reducer;
export const {
    openModal,closeModal, setDataForModal, resetDataForModal
} = actions;