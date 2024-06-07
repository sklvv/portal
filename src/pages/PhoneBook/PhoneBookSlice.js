import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    phonebook: [],
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
        setPhoneBook: (state, action) => {
            state.phonebook = action.payload
        },
    },
});

const {actions, reducer} = modalSlice;

export default reducer;
export const {
    setDataForModal, resetDataForModal,setPhoneBook
} = actions;