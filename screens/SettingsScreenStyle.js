import { StyleSheet } from 'react-native';

export const createSettingsScreenStyle = (currentTheme) =>
	StyleSheet.create({
		settings: {
			flex: 1,
			backgroundColor: currentTheme.background
		}
	});
