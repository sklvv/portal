import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userList: [],


}

const userAdmin = createSlice({
    name: 'userAdmin',
    initialState,
    reducers: {
        setUserList: (state, action) => {
            state.userList = action.payload
        },
    },
});

const {actions, reducer} = userAdmin;

export default reducer;
export const {
    setUserList
} = actions;