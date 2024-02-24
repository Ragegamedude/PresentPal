import { Dimensions, StyleSheet } from 'react-native';
import { TextSettings } from '../constants/TextSettings';
import { StyleSettings } from '../constants/StyleSettings';

const windowWidth = Dimensions.get('window').width;

export default createSettingsSectionStyle = (currentTheme) =>
	StyleSheet.create({
		settingsSectionWrapper: {
			flex: 1,
			marginHorizontal: StyleSettings.defaultPadding,
			marginVertical: StyleSettings.defaultPadding / 2
		},
		settingsSectionContainer: {
			flex: 1,
			elevation: StyleSettings.defaultElevation,
			flexDirection: 'row',
			justifyContent: 'center',
			backgroundColor: currentTheme.primaryColor,
			borderRadius: StyleSettings.defaultBorderRadius
		},
		settingsSection: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center'
		},
		settingsSectionDividerWrapper: {
			justifyContent: 'center',
			alignItems: 'center',
			marginVertical: StyleSettings.defaultMargin / 2
		},
		settingsSectionDivider: {
			width: StyleSettings.defaultDividerWidth,
			height: '100%',
			backgroundColor: currentTheme.secondaryVariantColor
		},
		settingsIconSection: {
			flex: 0.2,
			justifyContent: 'center',
			alignItems: 'center',
			marginHorizontal: StyleSettings.defaultMargin,
			paddingVertical: StyleSettings.defaultMargin
		},
		settingsDescriptionSection: {
			flex: 1,
			justifyContent: 'center',
			marginLeft: StyleSettings.defaultMargin,
			marginVertical: StyleSettings.defaultMargin
		},
		settingsFunctionSection: {
			flex: 0.2,
			justifyContent: 'center',
			alignItems: 'center',
			marginHorizontal: StyleSettings.defaultMargin
		},
		settingsHeadline: {
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textDefaultSize
		},
		settingsDescription: {
			color: currentTheme.secondaryVariantColor,
			fontFamily: TextSettings.defaultFontLight,
			fontSize: TextSettings.textSmallSize
		},
		settingsFunctionText: {
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textDefaultSize
		},
		settingsFunctionLanguage: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center'
		},
		settingsSectionModalWrapper: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: currentTheme.transparentBackground
		},
		settingsSectionModal: {
			width: windowWidth - StyleSettings.defaultPaddingModal,
			borderRadius: StyleSettings.defaultBorderRadius,
			backgroundColor: currentTheme.background
		},
		settingsSectionModalHeader: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			paddingVertical: StyleSettings.defaultMargin,
			paddingHorizontal: StyleSettings.defaultMargin,
			borderTopStartRadius: StyleSettings.defaultBorderRadius,
			borderTopEndRadius: StyleSettings.defaultBorderRadius,
			backgroundColor: currentTheme.primaryColor,
			elevation: StyleSettings.defaultElevation
		},
		settingsSectionModalHeaderIcon: {
			marginHorizontal: StyleSettings.defaultPadding
		},
		settingsSectionModalHeaderText: {
			marginLeft: StyleSettings.defaultMargin,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontBold,
			color: currentTheme.secondaryColor
		},
		settingsSectionModalContent: {
			borderRadius: StyleSettings.defaultBorderRadius,
			backgroundColor: currentTheme.backgroundColor
		},
		settingsSectionModalContentHeadline: {
			marginHorizontal: StyleSettings.defaultMargin,
			marginTop: StyleSettings.defaultPadding,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontMedium,
			color: currentTheme.secondaryVariantColor
		},
		settingsSectionModalContentText: {
			marginHorizontal: StyleSettings.defaultMargin,
			marginTop: StyleSettings.defaultPadding,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryVariantColor
		},
		settingsSectionModalButtonWrapper: {
			flexDirection: 'row'
		},
		settingsSectionModalContentButton: {
			flex: 1,
			backgroundColor: currentTheme.primaryColor,
			paddingVertical: StyleSettings.defaultPadding,
			marginVertical: StyleSettings.defaultMargin,
			marginHorizontal: StyleSettings.defaultMargin,
			borderRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		settingsSectionModalContentButton2: {
			flex: 1,
			backgroundColor: currentTheme.primaryColor,
			paddingVertical: StyleSettings.defaultPadding,
			marginVertical: StyleSettings.defaultMargin,
			marginLeft: StyleSettings.defaultMargin,
			marginRight: StyleSettings.defaultMargin / 2,
			borderRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		settingsSectionModalContentButton3: {
			flex: 1,
			backgroundColor: currentTheme.primaryColor,
			paddingVertical: StyleSettings.defaultPadding,
			marginVertical: StyleSettings.defaultMargin,
			marginLeft: StyleSettings.defaultMargin / 2,
			marginRight: StyleSettings.defaultMargin,
			borderRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		settingsSectionModalContentButtonText: {
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			textAlign: 'center',
			color: currentTheme.secondaryColor
		},
		settingsSectionModalInputWrapper: {
			flexDirection: 'row',
			marginTop: StyleSettings.defaultPadding
		},
		settingsSectionModalInputButton: {
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: currentTheme.primaryColor,
			marginLeft: StyleSettings.defaultMargin,
			borderTopStartRadius: StyleSettings.defaultBorderRadius,
			borderBottomStartRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		settingsSectionModalInputButton2: {
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: currentTheme.primaryColor,
			marginRight: StyleSettings.defaultMargin,
			borderTopEndRadius: StyleSettings.defaultBorderRadius,
			borderBottomEndRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		settingsSectionModalInputButtonIcon: {
			marginHorizontal: StyleSettings.defaultMargin
		},
		settingsSectionModalInputField: {
			flexDirection: 'row',
			flex: 1,
			backgroundColor: currentTheme.primaryColor,
			marginRight: StyleSettings.defaultMargin,
			borderTopEndRadius: StyleSettings.defaultBorderRadius,
			borderBottomEndRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		settingsSectionModalInputFieldTextInactive: {
			marginVertical: StyleSettings.defaultMargin / 2,
			marginHorizontal: StyleSettings.defaultMargin / 2,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryVariantColor
		},
		settingsSectionModalInputFieldTextActive: {
			marginVertical: StyleSettings.defaultMargin / 2,
			marginHorizontal: StyleSettings.defaultMargin / 2,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryColor
		}
	});
