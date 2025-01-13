import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	projectsArr: [],
	searchQuery: "",
	selectedRequestId: "",
	selectedProjectId: "",
};

const swaggerSlice = createSlice({
	name: "swagger",
	initialState,
	reducers: {
		setProjectsArr: (s, a) => {
			s.projectsArr = [...a.payload];
		},
		setSearchQuery: (s, a) => {
			s.searchQuery = a.payload;
		},
		setSelectedRequestId: (s, a) => {
			s.selectedRequestId = a.payload;
		},
		setSelectedProjectId: (s, a) => {
			s.selectedProjectId = a.payload;
		},
	},
});

const { actions, reducer } = swaggerSlice;

export default reducer;
export const {
	setProjectsArr,
	setSearchQuery,
	setSelectedRequestId,
	setSelectedProjectId,
} = actions;
