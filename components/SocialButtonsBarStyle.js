import { StyleSheet } from 'react-native';
import { StyleSettings } from '../constants/StyleSettings';

export const createSocialButtonsBarStyle = (currentTheme) =>
	StyleSheet.create({
		socialBarWrapper: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			marginHorizontal: StyleSettings.defaultPadding / 2
		},
		socialButton: {
			flex: 1,
			elevation: StyleSettings.defaultElevation,
			backgroundColor: currentTheme.primaryColor,
			borderRadius: StyleSettings.defaultBorderRadius,
			marginTop: StyleSettings.defaultPadding,
			marginBottom: StyleSettings.defaultPadding / 2,
			marginHorizontal: StyleSettings.defaultPadding / 2,
			paddingVertical: StyleSettings.defaultMargin,
			alignItems: 'center',
			justifyContent: 'center'
		},
		socialButtonTouch: {
			borderRadius: StyleSettings.defaultBorderRadius
		}
	});
