import { StyleSheet } from 'react-native';

export const createHomeScreenStyle = (currentTheme) =>
	StyleSheet.create({
		home: {
      backgroundColor: currentTheme.colors.background,
			flex: 1,
		}
	});
