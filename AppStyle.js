import { StyleSheet } from 'react-native';
import { StyleSettings } from './constants/StyleSettings';
import { TextSettings } from './constants/TextSettings';

export default createAppStyle = (currentTheme) =>
	StyleSheet.create({
		introductionWrapper: {
			width: '100%',
			height: '100%',
			backgroundColor: currentTheme.colors.background
		},
		introductionLanguageWrapper: {
			marginHorizontal: StyleSettings.defaultMargin,
			marginTop: StyleSettings.defaultMargin * 2,
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'row'
		},
		introductionLanguage: {
			marginHorizontal: StyleSettings.defaultPadding
		},
		introductionHeadlineWrapper: {
			marginHorizontal: StyleSettings.defaultMargin,
			marginTop: StyleSettings.defaultMargin * 2,
			alignItems: 'center'
		},
		introductionHeadline: {
			color: currentTheme.colors.secondary,
			fontFamily: TextSettings.defaultFontRegular,
			fontSize: TextSettings.textIntroductionHeadlineSize
		},
		introductionIntroduction: {
			color: currentTheme.colors.secondary,
			fontFamily: TextSettings.defaultFontRegular,
			fontSize: TextSettings.textBigSize
		},
		introductionContentWrapper: {
			height: '60%',
			marginHorizontal: StyleSettings.defaultMargin,
			justifyContent: 'center',
			alignItems: 'center'
		},
		introductionDescriptionWrapper: {
			marginHorizontal: StyleSettings.defaultMargin,
			marginBottom: 100,
			justifyContent: 'center',
			alignItems: 'center'
		},
		introductionDescription: {
			color: currentTheme.colors.secondary,
			fontFamily: TextSettings.defaultFontRegular,
			fontSize: TextSettings.textDefaultSize,
			textAlign: 'center'
		},
		introductionText: {
			color: currentTheme.colors.secondary,
			fontFamily: TextSettings.defaultFontRegular,
			fontSize: TextSettings.textDefaultSize
		},
		activeDotStyle: {
			backgroundColor: currentTheme.colors.secondary
		},
		inactiveDotStyle: {
			backgroundColor: currentTheme.colors.primary
		}
	});
