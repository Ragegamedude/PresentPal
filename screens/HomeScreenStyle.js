import { StyleSheet } from 'react-native';

export const createHomeScreenStyle = (currentTheme) =>
	StyleSheet.create({
		home: {
			flex: 1,
			backgroundColor: currentTheme.background
		}
	});
