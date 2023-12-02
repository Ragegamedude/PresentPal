import { StyleSheet } from 'react-native';
import { StyleSettings } from '../constants/StyleSettings';
import { TextSettings } from '../constants/TextSettings';
export const createHeadlineSectionStyle = (currentTheme) =>
	StyleSheet.create({
		headlineSectionWrapper: {
			marginTop: StyleSettings.defaultPadding,
			marginHorizontal: StyleSettings.defaultPadding,
			backgroundColor: currentTheme.primaryColor,
			elevation: StyleSettings.defaultElevation,
			borderRadius: StyleSettings.defaultBorderRadius
		},
		headlineSectionText: {
			marginVertical: StyleSettings.defaultMargin,
			marginHorizontal: StyleSettings.defaultMargin,
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textBigSize
		}
	});
