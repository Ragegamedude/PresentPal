import { StyleSheet } from 'react-native';
export const createGiftsScreenStyle = (currentTheme) =>
	StyleSheet.create({
		gifts: {
			flex: 1,
			backgroundColor: currentTheme.background
		}
	});
