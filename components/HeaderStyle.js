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
			marginLeft: StyleSettings.defaultPadding,
			padding: StyleSettings.defaultPadding
		},
		centerContainer: {
			flex: 1,
			marginVertical: StyleSettings.defaultMargin
		},
		centerText: {
			color: currentTheme.colors.secondary,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textHeaderSize,
			marginLeft: StyleSettings.defaultPadding
		},
		centerTextWithoutIcon: {
			color: currentTheme.colors.secondary,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textHeaderSize,
			marginLeft: StyleSettings.defaultMargin
		},
		rightContainer: {
			marginRight: StyleSettings.defaultPadding
		},
		rightIcon: {
			borderRadius: StyleSettings.defaultBorderRadius,
			paddingVertical: StyleSettings.defaultPadding,
			paddingHorizontal: StyleSettings.defaultPadding
		}
	});
