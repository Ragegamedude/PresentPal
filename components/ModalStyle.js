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
        backgroundColor: currentTheme.colors.onBackground,
        borderBottomWidth: StyleSettings.defaultBorderWidth,
        borderBottomColor: currentTheme.colors.primary,
        elevation: StyleSettings.defaultElevation
      },
      modalHeaderIcon: {
        marginHorizontal: StyleSettings.defaultPadding
      },
      modalHeaderText: {
        marginLeft: StyleSettings.defaultMargin,
        fontSize: TextSettings.textBigSize,
        fontFamily: TextSettings.defaultFontBold,
        color: currentTheme.colors.secondary
      },
      modalContent: {
        borderBottomEndRadius: StyleSettings.defaultBorderRadius,
        borderBottomStartRadius: StyleSettings.defaultBorderRadius,
        backgroundColor: currentTheme.colors.onbackground,
      },
      modalContentHeadline: {
        marginHorizontal: StyleSettings.defaultMargin,
        marginTop: StyleSettings.defaultMargin,
        fontSize: TextSettings.textDefaultSize,
        fontFamily: TextSettings.defaultFontMedium,
        color: currentTheme.colors.secondary
      },
      modalContentText: {
        marginHorizontal: StyleSettings.defaultMargin,
        marginTop: StyleSettings.defaultPadding,
        fontSize: TextSettings.textSmallSize,
        fontFamily: TextSettings.defaultFontLight,
        color: currentTheme.colors.secondary
      },
      modalContentWarningText: {
        marginHorizontal: StyleSettings.defaultMargin,
        marginTop: StyleSettings.defaultMargin,
        fontSize: TextSettings.textSmallSize,
        fontFamily: TextSettings.defaultFontLight,
        color: currentTheme.colors.secondary
      },
      modalContentInputField: {
        marginHorizontal: StyleSettings.defaultMargin,
        marginTop: StyleSettings.defaultPadding,
        fontSize: TextSettings.textSmallSize,
        fontFamily: TextSettings.defaultFontLight,
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
      modalInputButtonIcon: {
        marginHorizontal: IconSettings.countryFlagMargin,
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
      modalInputFieldTextInactive: {
        marginVertical: StyleSettings.defaultMargin / 2,
        marginHorizontal: StyleSettings.defaultMargin / 2,
        fontSize: TextSettings.textDefaultSize,
        fontFamily: TextSettings.defaultFontBold,
        color: currentTheme.colors.primary
      },
      modalInputFieldTextActive: {
        marginVertical: StyleSettings.defaultMargin / 2,
        marginHorizontal: StyleSettings.defaultMargin / 2,
        fontSize: TextSettings.textDefaultSize,
        fontFamily: TextSettings.defaultFontLight,
        color: currentTheme.colors.secondary
      },
      settingsSectionLanguageWrapper: {
        marginTop: StyleSettings.defaultMargin / 2,
      }
    });