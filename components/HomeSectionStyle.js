import { StyleSheet } from 'react-native';
import { StyleSettings } from '../constants/StyleSettings';
import { TextSettings } from '../constants/TextSettings';

export const createHomeSectionStyle = (currentTheme) =>
	StyleSheet.create({
		homeSectionContainer: {
			flex: 1,
			flexDirection: 'row',
			marginTop: StyleSettings.defaultPadding,
			marginHorizontal: StyleSettings.defaultPadding,
			backgroundColor: currentTheme.primaryColor,
			elevation: StyleSettings.defaultElevation,
			borderRadius: StyleSettings.defaultBorderRadius
		},
		homeSectionContainer2: {
			flex: 1,
			flexDirection: 'row',
			marginVertical: StyleSettings.defaultPadding,
			marginHorizontal: StyleSettings.defaultPadding,
			backgroundColor: currentTheme.primaryColor,
			elevation: StyleSettings.defaultElevation,
			borderRadius: StyleSettings.defaultBorderRadius
		},
		homeSection: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center'
		},
		homeSectionDividerWrapper: {
			justifyContent: 'center',
			alignItems: 'center',
			marginVertical: StyleSettings.defaultMargin / 2
		},
		homeSectionDivider: {
			width: StyleSettings.defaultDividerWidth,
			height: '100%',
			backgroundColor: currentTheme.secondaryVariantColor
		},
		homeSectionLeftContainer: {
			alignItems: 'center',
			marginHorizontal: StyleSettings.defaultMargin
		},
		homeSectionRightContainer: {
			flex: 1,
			marginRight: StyleSettings.defaultMargin,
			marginBottom: StyleSettings.defaultMargin
		},
		homeSectionHeaderIcon: {
			marginTop: StyleSettings.defaultMargin
		},
		homeSectionRightContent: {
			marginTop: StyleSettings.defaultMargin,
			marginLeft: StyleSettings.defaultMargin
		},
		homeSectionRightHeaderCategoryText: {
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontMedium,
			fontSize: TextSettings.textSmallSize
		},
		homeSectionLeftDate: {
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontLight,
			fontSize: TextSettings.textSmallestSize
		},
		homeSectionLeftUser: {
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textSmallestSize,
			marginTop: StyleSettings.defaultPadding
		},
		homeSectionRightHeaderTitleText: {
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textDefaultSize
		},
		homeSectionRightHeaderSubTitleText: {
			color: currentTheme.secondaryVariantColor,
			fontFamily: TextSettings.defaultFontLight,
			fontSize: TextSettings.textSmallSize
		},
		homeSectionRightReadMore: {
			marginTop: StyleSettings.defaultPadding,
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontLight,
			fontSize: TextSettings.textSmallSize
		}
	});
