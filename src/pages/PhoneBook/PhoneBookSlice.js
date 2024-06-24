import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    phonebookList: [],


}

const phoneBookSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {

        setPhoneBookList: (state, action) => {
            state.phonebookList = action.payload
        },
    },
});

const {actions, reducer} = phoneBookSlice;

export default reducer;
export const {
    setPhoneBookList
} = actions;