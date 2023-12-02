import { StyleSheet } from 'react-native';
export const createConverterScreenStyle = (currentTheme) =>
	StyleSheet.create({
		converter: {
			flex: 1,
			backgroundColor: currentTheme.background
		}
	});
