import { StyleSheet } from 'react-native';
export const createListsScreenStyle = (currentTheme) =>
	StyleSheet.create({
		lists: {
			flex: 1,
			backgroundColor: currentTheme.colors.background
		}
	});
