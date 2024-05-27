import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    holdingList: [],
    zakazchikList: [],
    configuredRealizationData: [],
    filteredData: [],
    listToDisplay: 'configuredRealizationData'

}

const realizationSlice = createSlice({
    name: 'realisation',
    initialState,
    reducers: {
        /*список селектов для холдинга*/
        setHoldingList: (state, action) => {
            state.holdingList = action.payload
        },
        /*список селектов для заказчика*/
        setZakazchikList: (state, action) => {
            state.zakazchikList = action.payload
        },
        /*модифицированная инфа, основная для работы*/
        setConfiguredRealizationData: (state, action) => {
            state.configuredRealizationData = action.payload
        },
        /*отфильтрованный массив*/
        setFilteredData: (state, action) => {
            state.filteredData = action.payload
        },
    },

});

const {actions, reducer} = realizationSlice;

export default reducer;
export const {
    setHoldingList, setZakazchikList, setConfiguredRealizationData, setFilteredData,
} = actions;