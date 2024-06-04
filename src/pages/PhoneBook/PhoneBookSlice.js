import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    dataForModal: false,

}

const modalSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
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
    setDataForModal, resetDataForModal
} = actions;