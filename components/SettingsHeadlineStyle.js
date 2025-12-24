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
      marginVertical: StyleSettings.defaultPadding / 2,
    },
    settingsHeadline: {
      marginHorizontal: StyleSettings.defaultMargin / 2,
      marginVertical: StyleSettings.defaultMargin / 2,
      fontFamily: TextSettings.defaultFontBold,
      fontSize: TextSettings.textXLSize,
      color: currentTheme.colors.secondary,
    }
  })