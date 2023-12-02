import {StyleSheet} from "react-native";
import {StyleSettings} from "../constants/StyleSettings";
import {TextSettings} from "../constants/TextSettings";

export const createStatusBarStyle = (currentTheme) =>
  StyleSheet.create({
    statusWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: currentTheme.primaryColor,
      marginTop: StyleSettings.defaultPadding,
      marginHorizontal: StyleSettings.defaultPadding,
      borderRadius: StyleSettings.defaultBorderRadius,
      elevation: StyleSettings.defaultElevation,
    },
    status: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: StyleSettings.defaultMargin,
      marginHorizontal: StyleSettings.defaultMargin,
    },
    statusHeadline: {
      fontFamily: TextSettings.defaultFontBold,
      fontSize: TextSettings.textSmallSize,
      color: currentTheme.secondaryColor,
    },
    statusText: {
      fontFamily: TextSettings.defaultFontLight,
      fontSize: TextSettings.textSmallSize,
      color: currentTheme.secondaryVariantColor,
    }
  });