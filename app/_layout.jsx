import { Slot } from 'expo-router';
import './globals.css';
import { Provider } from 'react-redux';
import store from '../store/store';

export default function RootLayout() {
	return (
		<Provider store={store}>
			<Slot />
		</Provider>
	);
}
