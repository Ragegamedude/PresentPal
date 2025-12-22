import { StyleSheet } from 'react-native';
import { StyleSettings } from '../constants/StyleSettings';

export const createSocialButtonsBarStyle = (currentTheme) =>
	StyleSheet.create({
		socialBarWrapper: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			marginHorizontal: StyleSettings.defaultPadding / 2,
			marginTop: StyleSettings.defaultPadding / 2,
		},
		socialButton: {
			flex: 1,
			elevation: StyleSettings.defaultElevation,
			backgroundColor: currentTheme.colors.onBackground,
			borderRadius: StyleSettings.defaultBorderRadius,
			marginHorizontal: StyleSettings.defaultPadding / 2,
			paddingVertical: StyleSettings.defaultMargin,
			alignItems: 'center',
			justifyContent: 'center'
		},
		socialButtonTouch: {
			borderRadius: StyleSettings.defaultBorderRadius
		}
	});
