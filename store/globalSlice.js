import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
	name: 'global',
	initialState: {
		dto: null,
		userClicks: [],
	},
	reducers: {
		setDTO: (state, action) => {
			state.dto = action.payload;
		},
		addUserClick: (state, action) => {
			state.userClicks.push(action.payload);
		},
	},
});

export const { setDto, addUserClick } = globalSlice.actions;
export default globalSlice.reducer;
