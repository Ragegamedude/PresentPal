import {Dimensions, StyleSheet} from 'react-native';
import {StyleSettings} from "../constants/StyleSettings";
import {TextSettings} from "../constants/TextSettings";
import {IconSettings} from "../constants/IconSettings";

const windowWidth = Dimensions.get('window').width;

export default createModalStyle = (currentTheme) =>
  StyleSheet.create({
    modalWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: currentTheme.colors.backdrop
    },
    modal: {
      width: windowWidth - StyleSettings.defaultPaddingModal,
      borderRadius: StyleSettings.defaultBorderRadius,
      backgroundColor: currentTheme.colors.onBackground
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingVertical: StyleSettings.defaultMargin,
      paddingHorizontal: StyleSettings.defaultMargin,
      borderTopStartRadius: StyleSettings.defaultBorderRadius,
      borderTopEndRadius: StyleSettings.defaultBorderRadius,
      backgroundColor: currentTheme.colors.background,
      borderBottomWidth: StyleSettings.defaultBorderWidth,
      borderBottomColor: currentTheme.colors.primary,
      elevation: StyleSettings.defaultElevation
    },
    modalHeaderIcon: {
      marginHorizontal: StyleSettings.defaultPadding
    },
    modalHeaderText: {
      marginLeft: StyleSettings.defaultPadding,
      fontSize: TextSettings.textXLSize,
      fontFamily: TextSettings.defaultFontBold,
      color: currentTheme.colors.secondary
    },
    modalContent: {
      borderBottomEndRadius: StyleSettings.defaultBorderRadius,
      borderBottomStartRadius: StyleSettings.defaultBorderRadius,
      backgroundColor: currentTheme.colors.background,
    },

    modalContentWrapper: {
      marginTop: StyleSettings.defaultPadding,
    },

    modalContentHeadline: {
      marginHorizontal: StyleSettings.defaultMargin + StyleSettings.defaultPadding,
      marginTop: StyleSettings.defaultMargin,
      fontSize: TextSettings.textDefaultSize,
      fontFamily: TextSettings.defaultFontMedium,
      color: currentTheme.colors.secondary
    },
    modalContentText: {
      marginHorizontal: StyleSettings.defaultMargin + StyleSettings.defaultPadding,
      marginTop: StyleSettings.defaultPadding,
      fontSize: TextSettings.textXSSize,
      fontFamily: TextSettings.defaultFontLight,
      color: currentTheme.colors.secondary
    },
    modalContentWarningText: {
      marginHorizontal: StyleSettings.defaultMargin,
      marginTop: StyleSettings.defaultMargin,
      fontSize: TextSettings.textXSSize,
      fontFamily: TextSettings.defaultFontLight,
      color: currentTheme.colors.secondary
    },
    modalContentInputFieldWrapper: {
      marginTop: StyleSettings.defaultPadding,
      marginHorizontal: StyleSettings.defaultMargin,
      borderRadius: StyleSettings.defaultBorderRadius,
      elevation: StyleSettings.defaultElevation,
      backgroundColor: currentTheme.colors.onBackground,
    },
    modalContentInputField: {
      fontSize: TextSettings.textXSSize,
      fontFamily: TextSettings.defaultFontLight,
      backgroundColor: currentTheme.colors.onBackground,
    },
    modalContentInputFieldOutline: {
      borderRadius: StyleSettings.defaultBorderRadius,
    },

    modalContentInputHelperText: {
      marginHorizontal: StyleSettings.defaultMargin,
    },
    modalButtonWrapper: {
      flexDirection: 'row'
    },
    modalContentButton: {
      flex: 1,
      backgroundColor: currentTheme.colors.primary,
      paddingVertical: StyleSettings.defaultPaddingButton,
      marginVertical: StyleSettings.defaultMargin,
      marginHorizontal: StyleSettings.defaultMargin,
      borderRadius: StyleSettings.defaultBorderRadius,
      elevation: StyleSettings.defaultElevation
    },
    modalContentButton2: {
      flex: 1,
      backgroundColor: currentTheme.colors.primary,
      paddingVertical: StyleSettings.defaultPaddingButton,
      marginVertical: StyleSettings.defaultMargin,
      marginLeft: StyleSettings.defaultMargin,
      marginRight: StyleSettings.defaultMargin / 2,
      borderRadius: StyleSettings.defaultBorderRadius,
      elevation: StyleSettings.defaultElevation
    },
    modalContentButton3: {
      flex: 1,
      backgroundColor: currentTheme.colors.primary,
      paddingVertical: StyleSettings.defaultPaddingButton,
      marginVertical: StyleSettings.defaultMargin,
      marginLeft: StyleSettings.defaultMargin / 2,
      marginRight: StyleSettings.defaultMargin,
      borderRadius: StyleSettings.defaultBorderRadius,
      elevation: StyleSettings.defaultElevation
    },
    modalContentButtonText: {
      fontSize: TextSettings.textDefaultSize,
      fontFamily: TextSettings.defaultFontRegular,
      textAlign: 'center',
      color: currentTheme.colors.onPrimary
    },
    modalInputWrapper: {
      flexDirection: 'row',
      marginTop: StyleSettings.defaultPadding
    },
    modalInputButton: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: currentTheme.colors.onBackground,
    },
    modalInputButton2: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: currentTheme.colors.primary,
      marginRight: StyleSettings.defaultMargin,
      borderTopEndRadius: StyleSettings.defaultBorderRadius,
      borderBottomEndRadius: StyleSettings.defaultBorderRadius,
      elevation: StyleSettings.defaultElevation
    },
    modalInputButtonWrapperIcon: {
      marginHorizontal: StyleSettings.defaultMargin,
      borderRadius: IconSettings.countryFlagBorderRadius
    },
    modalInputButtonIcon: {
      marginHorizontal: StyleSettings.defaultMargin,
      borderRadius: IconSettings.countryFlagBorderRadius
    },
    modalInputField: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: currentTheme.colors.onBackground,
      marginHorizontal: StyleSettings.defaultMargin,
      borderTopEndRadius: StyleSettings.defaultBorderRadius,
      borderTopStartRadius: StyleSettings.defaultBorderRadius,
      borderBottomStartRadius: StyleSettings.defaultBorderRadius,
      borderBottomEndRadius: StyleSettings.defaultBorderRadius,
      elevation: StyleSettings.defaultElevation
    },
    modalInputFieldTextActive: {
      marginVertical: StyleSettings.defaultMargin / 2,
      marginHorizontal: StyleSettings.defaultMargin / 2,
      fontSize: TextSettings.textDefaultSize,
      fontFamily: TextSettings.defaultFontBold,
      color: currentTheme.colors.primary
    },
    modalInputFieldTextInactive: {
      marginVertical: StyleSettings.defaultMargin / 2,
      marginHorizontal: StyleSettings.defaultMargin / 2,
      fontSize: TextSettings.textDefaultSize,
      fontFamily: TextSettings.defaultFontLight,
      color: currentTheme.colors.secondary
    },
    settingsSectionLanguageWrapper: {
      marginTop: StyleSettings.defaultMargin / 2,
    },
    modalDefaultImageSelectorTextWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: StyleSettings.defaultPadding,
      marginHorizontal: StyleSettings.defaultMargin,
      borderRadius: StyleSettings.defaultBorderRadius,
    },
    modalDefaultImageSelectorText: {
      fontSize: TextSettings.textXSSize,
      color: currentTheme.colors.secondary,
    },

    modalDefaultImageSelector: {
      justifyContent: 'space-evenly',
      alignItems: 'space-between',
      backgroundColor: currentTheme.colors.onBackground,
      borderRadius: StyleSettings.defaultBorderRadius,
      elevation: StyleSettings.defaultElevation
    },
    modalDefaultImageSelectorCheckbox: {
      marginLeft: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    modalDefaultImageButtonWrapper: {
      marginTop: StyleSettings.defaultMargin / 2,
      flexDirection: 'row',
    },
    modalDefaultImageButton1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: StyleSettings.defaultMargin,
      marginRight: StyleSettings.defaultPadding / 2,
    },
    modalDefaultImageButton2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: currentTheme.colors.onBackground,
      marginHorizontal: StyleSettings.defaultPadding / 2,
    },
    modalDefaultImageButton3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: currentTheme.colors.onBackground,
      marginRight: StyleSettings.defaultMargin,
      marginLeft: StyleSettings.defaultPadding / 2,
    },
    modalDefaultImage:{
      backgroundColor: 'transparent',
    }
  });