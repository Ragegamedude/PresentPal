import {StyleSheet} from 'react-native';
import {TextSettings} from '../constants/TextSettings';
import {StyleSettings} from '../constants/StyleSettings';

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
        backgroundColor: currentTheme.colors.onBackground,
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
        backgroundColor: currentTheme.colors.primary
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
        color: currentTheme.colors.secondary,
        fontFamily: TextSettings.defaultFontBold,
        fontSize: TextSettings.textDefaultSize
      },
      settingsDescription: {
        color: currentTheme.colors.secondary,
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
      }
    })
