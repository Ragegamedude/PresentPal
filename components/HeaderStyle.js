import { StyleSheet } from 'react-native';
import { StyleSettings } from '../constants/StyleSettings';
import { TextSettings } from '../constants/TextSettings';
export const createHeaderStyle = (currentTheme) =>
	StyleSheet.create({
		headerWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			backgroundColor: currentTheme.backgroundColor,
			borderBottomColor: currentTheme.transparentBackground,
			borderBottomWidth: 1
		},
		leftContainer: {},
		leftIcon: {
			marginLeft: StyleSettings.defaultMargin
		},
		centerContainer: {
			flex: 1,
			marginVertical: StyleSettings.defaultMargin
		},
		centerText: {
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textHeaderSize,
			marginLeft: StyleSettings.defaultPadding
		},
		rightContainer: {},
		rightIcon: {
			marginRight: StyleSettings.defaultMargin
		}
	});
