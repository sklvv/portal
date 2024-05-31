import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    open: false,
    variant: ''
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
    },
});

const {actions, reducer} = modalSlice;

export default reducer;
export const {
    openModal,closeModal
} = actions;