import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
	name: 'global',
	initialState: {
		dto: { cell: { tasks: [] } },
		userClicks: [],
		activeTaskIndex: 0,
	},
	activeTaskIndex: 0,
	reducers: {
		setDTO: (state, action) => {
			state.dto = action.payload;
		},
		addUserClick: (state, action) => {
			state.userClicks.push(action.payload);
		},
		setActiveTaskIndex: (state, action) => {
			state.activeTaskIndex = action.payload;
		},
	},
});

export const { setDTO, addUserClick, setActiveTaskIndex } = globalSlice.actions;
export default globalSlice.reducer;
