import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalSlice';

const store = configureStore({
	reducer: {
		global: globalReducer,
	},
	devTools: true,
});

export default store;
