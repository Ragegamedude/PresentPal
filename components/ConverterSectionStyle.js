import { Dimensions, StyleSheet } from 'react-native';
import { TextSettings } from '../constants/TextSettings';
import { StyleSettings } from '../constants/StyleSettings';

const windowWidth = Dimensions.get('window').width;

export default createConverterSectionStyle = (currentTheme) =>
	StyleSheet.create({
		converterSectionWrapper: {
			flex: 1,
			marginHorizontal: StyleSettings.defaultPadding,
			marginTop: StyleSettings.defaultPadding
		},
		converterSectionWrapper2: {
			flex: 1,
			marginHorizontal: StyleSettings.defaultPadding,
			marginVertical: StyleSettings.defaultPadding
		},
		converterSectionContainer: {
			flex: 1,
			elevation: StyleSettings.defaultElevation,
			flexDirection: 'row',
			justifyContent: 'center',
			backgroundColor: currentTheme.primaryColor,
			borderRadius: StyleSettings.defaultBorderRadius
		},
		converterSection: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center'
		},
		converterSectionDividerWrapper: {
			justifyContent: 'center',
			alignItems: 'center',
			marginVertical: StyleSettings.defaultMargin / 2
		},
		converterSectionDivider: {
			width: StyleSettings.defaultDividerWidth,
			height: '100%',
			backgroundColor: currentTheme.secondaryVariantColor
		},
		converterIconSection: {
			flex: 0.2,
			justifyContent: 'center',
			alignItems: 'center',
			marginHorizontal: StyleSettings.defaultPadding,
			paddingVertical: StyleSettings.defaultMargin
		},
		converterDescriptionSection: {
			flex: 1,
			justifyContent: 'center',
			marginLeft: StyleSettings.defaultMargin
		},
		converterHeadline: {
			color: currentTheme.secondaryColor,
			fontFamily: TextSettings.defaultFontBold,
			fontSize: TextSettings.textDefaultSize,
			marginRight: StyleSettings.defaultMargin
		},
		converterDescription: {
			color: currentTheme.secondaryVariantColor,
			fontFamily: TextSettings.defaultFontLight,
			fontSize: TextSettings.textSmallSize,
			marginRight: StyleSettings.defaultMargin
		},
		converterSectionModalWrapper: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: currentTheme.transparentBackground
		},
		converterSectionModal: {
			width: windowWidth - StyleSettings.defaultPaddingModal,
			borderRadius: StyleSettings.defaultBorderRadius,
			backgroundColor: currentTheme.background
		},
		converterSectionModalHeader: {
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
		converterSectionModalHeaderIcon: {
			marginHorizontal: StyleSettings.defaultPadding
		},
		converterSectionModalHeaderText: {
			marginLeft: StyleSettings.defaultMargin,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontBold,
			color: currentTheme.secondaryColor
		},
		converterSectionModalContent: {
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: StyleSettings.defaultBorderRadius,
			backgroundColor: currentTheme.backgroundColor
		},
		converterSectionModalContentText: {
			marginHorizontal: StyleSettings.defaultPadding,
			marginVertical: StyleSettings.defaultPadding,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryVariantColor
		},
		converterSectionModalButtonWrapper: {
			flexDirection: 'row'
		},
		converterSectionModalContentButton2: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: currentTheme.primaryColor,
			paddingVertical: StyleSettings.defaultPadding,
			marginVertical: StyleSettings.defaultMargin,
			marginLeft: StyleSettings.defaultMargin,
			marginRight: StyleSettings.defaultMargin / 2,
			borderRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		converterSectionModalContentButton3: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: currentTheme.primaryColor,
			paddingVertical: StyleSettings.defaultPadding,
			marginVertical: StyleSettings.defaultMargin,
			marginLeft: StyleSettings.defaultMargin / 2,
			marginRight: StyleSettings.defaultMargin,
			borderRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		converterSectionModalContentButtonText: {
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			textAlign: 'center',
			color: currentTheme.secondaryColor
		},
		converterSectionModalContentButtonTextDeactivated: {
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			textAlign: 'center',
			color: currentTheme.secondaryVariantColor
		},
		converterSectionModalInputWrapper: {
			flexDirection: 'row',
			marginTop: StyleSettings.defaultPadding
		},
		converterSectionModalInputField: {
			flexDirection: 'row',
			flex: 1,
			backgroundColor: currentTheme.primaryColor,
			marginRight: StyleSettings.defaultMargin,
			borderTopEndRadius: StyleSettings.defaultBorderRadius,
			borderBottomEndRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		converterSectionModalInputFieldTextInactive: {
			marginVertical: StyleSettings.defaultMargin / 2,
			marginHorizontal: StyleSettings.defaultMargin / 2,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryVariantColor
		},
		converterSectionModalInputFieldTextActive: {
			marginVertical: StyleSettings.defaultMargin / 2,
			marginHorizontal: StyleSettings.defaultMargin / 2,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryColor
		},
		converterSectionModalInputButton: {
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: currentTheme.primaryColor,
			marginLeft: StyleSettings.defaultMargin,
			borderTopStartRadius: StyleSettings.defaultBorderRadius,
			borderBottomStartRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		converterSectionModalInputButtonIcon: {
			marginHorizontal: StyleSettings.defaultMargin
		},
		converterSectionModalErrorWrapper: {
			width: '100%',
			marginTop: StyleSettings.defaultMargin
		},
		converterSectionModalErrorField: {
			backgroundColor: currentTheme.primaryColor,
			marginHorizontal: StyleSettings.defaultMargin,
			paddingVertical: StyleSettings.defaultMargin,
			borderRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		converterSectionModalErrorHeadlineText: {
			marginHorizontal: StyleSettings.defaultMargin,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryColor
		},
		converterSectionModalErrorText: {
			marginHorizontal: StyleSettings.defaultMargin,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.error
		},
		converterSectionModalSuccessWrapper: {
			width: '100%',
			marginTop: StyleSettings.defaultMargin
		},
		converterSectionModalSuccessField: {
			backgroundColor: currentTheme.primaryColor,
			marginHorizontal: StyleSettings.defaultMargin,
			paddingVertical: StyleSettings.defaultMargin,
			borderRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		converterSectionModalSuccessHeadlineText: {
			marginHorizontal: StyleSettings.defaultMargin,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryColor
		},
		converterSectionModalSuccessText: {
			marginHorizontal: StyleSettings.defaultMargin,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.success
		},
		converterSectionModalSuccessProgressbar: {
			marginTop: StyleSettings.defaultMargin / 2,
			marginHorizontal: StyleSettings.defaultMargin,
			height: 20,
			backgroundColor: currentTheme.secondaryColor,
			borderRadius: StyleSettings.defaultBorderRadius,
			elevation: StyleSettings.defaultElevation
		},
		converterSectionModalImageFormatWrapper: {
			borderEndColor: currentTheme.rippleEffectColor,
			borderEndWidth: StyleSettings.defaultDividerWidth
		},
		converterSectionModalImageFormatTextActive: {
			marginVertical: StyleSettings.defaultMargin / 2,
			marginHorizontal: StyleSettings.defaultMargin / 2,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryColor
		},
		converterSectionModalImageFormatTextInactive: {
			marginVertical: StyleSettings.defaultMargin / 2,
			marginHorizontal: StyleSettings.defaultMargin / 2,
			fontSize: TextSettings.textDefaultSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryVariantColor
		},
		converterSectionModalHintWrapper: {
			marginTop: StyleSettings.defaultMargin,
			marginHorizontal: StyleSettings.defaultMargin
		},
		converterSectionModalHint: {
			fontSize: TextSettings.textSmallestSize,
			fontFamily: TextSettings.defaultFontLight,
			color: currentTheme.secondaryColor
		}
	});
