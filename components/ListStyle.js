import {StyleSheet} from "react-native";
import {StyleSettings} from "../constants/StyleSettings";
import {TextSettings} from "../constants/TextSettings";

export const createListStyle = (currentTheme) =>
  StyleSheet.create({
    listWrapper: {
      flex: 1,
      marginHorizontal: StyleSettings.defaultPadding,
      marginVertical: StyleSettings.defaultPadding / 2,
    },
    listContainer: {
      flex: 1,
      elevation: StyleSettings.defaultElevation,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: currentTheme.colors.onBackground,
      borderRadius: StyleSettings.defaultBorderRadius
    },
    list: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    imageWrapper: {
      alignItems: 'center',
      marginLeft: StyleSettings.defaultMargin,
      marginVertical: StyleSettings.defaultMargin,
    },
    date: {
      fontFamily: TextSettings.defaultFontMedium,
      fontSize: TextSettings.textXXSSize,
      color: currentTheme.colors.secondary,
      marginTop: StyleSettings.defaultPadding,
    },
    event: {
      fontFamily: TextSettings.defaultFontMedium,
      fontSize: TextSettings.textXXSSize,
      color: currentTheme.colors.secondary,
      marginBottom: StyleSettings.defaultPadding,
    },
    contentWrapper: {
      flex: 1,
      marginLeft: StyleSettings.defaultMargin,
      marginVertical: StyleSettings.defaultMargin,
    },
    content: {
      flex: 1,
    },
    contentHeadline: {
      fontFamily: TextSettings.defaultFontBold,
      fontSize: TextSettings.textDefaultSize,
      color: currentTheme.colors.primary
    },
    contentDescription: {
      color: currentTheme.colors.secondary,
      fontFamily: TextSettings.defaultFontLight,
      fontSize: TextSettings.textXSSize
    },
    statsWrapper: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: currentTheme.colors.primary,
      marginTop: StyleSettings.defaultPadding,
    },
    statsFirst: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: StyleSettings.defaultBorderRadius,
      marginVertical: StyleSettings.defaultPadding,
    },
    statsSecond: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: StyleSettings.defaultBorderRadius,
      marginLeft: StyleSettings.defaultMargin,
      marginVertical: StyleSettings.defaultPadding,
    },
    statKey: {},
    statValue: {
      color: currentTheme.colors.secondary,
      fontFamily: TextSettings.defaultFontLight,
      fontSize: TextSettings.textXXSSize,
      marginLeft: StyleSettings.defaultPadding,
    },
    functionWrapper: {
      marginLeft: StyleSettings.defaultPadding,
    },
    function: {
      padding: StyleSettings.defaultPadding,
      borderRadius: StyleSettings.defaultBorderRadius,
      marginHorizontal: StyleSettings.defaultPadding,
      marginVertical: StyleSettings.defaultPadding,
    }

  });