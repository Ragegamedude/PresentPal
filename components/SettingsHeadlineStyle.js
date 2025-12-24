import {StyleSheet} from 'react-native';
import {StyleSettings} from "../constants/StyleSettings";
import {TextSettings} from "../constants/TextSettings";

export const createSettingsHeadlineStyle = (currentTheme) =>
  StyleSheet.create({
    settingsHeadlineWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: StyleSettings.defaultMargin,
      marginTop: StyleSettings.defaultMargin,
      marginBottom: StyleSettings.defaultPadding,
    },
    settingsHeadline: {
      marginHorizontal: StyleSettings.defaultPadding,
      fontFamily: TextSettings.defaultFontBold,
      fontSize: TextSettings.textXLSize,
      color: currentTheme.colors.secondary,
    }
  })