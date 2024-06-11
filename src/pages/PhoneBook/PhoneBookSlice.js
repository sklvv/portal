import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    phonebookList: [],
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
        setPhoneBookList: (state, action) => {
            state.phonebookList = action.payload
        },
    },
});

const {actions, reducer} = modalSlice;

export default reducer;
export const {
    setDataForModal, resetDataForModal,setPhoneBookList
} = actions;