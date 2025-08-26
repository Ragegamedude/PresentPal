import { StyleSheet } from 'react-native';
import { StyleSettings } from '../constants/StyleSettings';
import { TextSettings } from '../constants/TextSettings';
export const createHeaderStyle = (currentTheme) =>
	StyleSheet.create({
		headerWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			backgroundColor: currentTheme.colors.onBackground,
			borderBottomColor: currentTheme.colors.primary,
			borderBottomWidth: StyleSettings.defaultBorderWidth
		},
		leftContainer: {
		},
		leftIcon: {
			borderRadius: StyleSettings.defaultBorderRadius,
			padding: StyleSettings.defaultMargin/2,
			marginLeft: StyleSettings.defaultPadding
		},
		centerContainer: {
			flex: 1,
			marginVertical: StyleSettings.defaultMargin
		},
		centerText: {
			color: currentTheme.colors.secondary,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textHeaderSize,
			marginLeft: StyleSettings.defaultMargin
		},
		rightContainer: {
		},
		rightIcon: {
			borderRadius: StyleSettings.defaultBorderRadius,
			marginRight: StyleSettings.defaultMargin
		}
	});
