import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    transportList: [],
    dataForModal: false,

}

const transportSlice = createSlice({
    name: 'transport',
    initialState,
    reducers: {
        setTransportList: (state, action) => {
            state.transportList = action.payload
        },
    },
});

const {actions, reducer} = transportSlice;

export default reducer;
export const {
    setTransportList
} = actions;