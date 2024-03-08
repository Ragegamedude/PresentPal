import {StyleSheet} from "react-native";
import {StyleSettings} from "../constants/StyleSettings";
import {TextSettings} from "../constants/TextSettings";

export const createListStyle = (currentTheme) =>
    StyleSheet.create({
      listWrapper: {
        flexDirection: 'row',
        backgroundColor: currentTheme.colors.onBackground,
        marginHorizontal: StyleSettings.defaultPadding,
        marginVertical: StyleSettings.defaultPadding,
        elevation: StyleSettings.defaultElevation,
        borderRadius: StyleSettings.defaultBorderRadius,
      },
      imageWrapper: {
        alignItems: 'center',
        marginLeft: StyleSettings.defaultMargin,
        marginVertical: StyleSettings.defaultMargin,
      },
      date: {
        fontFamily: TextSettings.defaultFontMedium,
        fontSize: TextSettings.textSmallestSize,
        color: currentTheme.colors.primary,
        marginTop: StyleSettings.defaultPadding,
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
        fontSize: TextSettings.textSmallSize
      },
      stat: {
        color: currentTheme.colors.secondary,
        fontFamily: TextSettings.defaultFontLight,
        fontSize: TextSettings.textSmallSize
      },
      functionWrapper: {
        marginVertical: StyleSettings.defaultPadding,
        justifyContent: 'center',
      },
      function: {
        backgroundColor: currentTheme.colors.background,
        elevation: StyleSettings.defaultElevation,
        borderRadius: StyleSettings.defaultBorderRadius,
        padding: StyleSettings.defaultPadding,
        marginHorizontal: StyleSettings.defaultMargin,
        marginVertical: StyleSettings.defaultPadding,
      }

    });