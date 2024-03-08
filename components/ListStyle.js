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
        marginLeft: StyleSettings.defaultMargin,
        marginVertical: StyleSettings.defaultMargin,
      },
      contentWrapper: {
        flex: 1,
        marginLeft: StyleSettings.defaultMargin,
        marginVertical: StyleSettings.defaultMargin,
      },
      contentHeadline:{
        fontFamily: TextSettings.defaultFontBold,
        fontSize: TextSettings.textDefaultSize,
        color: currentTheme.colors.primary
      },
      contentDescription:{
        color: currentTheme.colors.secondary,
        fontFamily: TextSettings.defaultFontLight,
        fontSize: TextSettings.textSmallSize
      },
      functionWrapper: {
        justifyContent: 'center',
      },
      function:{
        backgroundColor: currentTheme.colors.primary,
        elevation: StyleSettings.defaultElevation,
        borderRadius: StyleSettings.defaultBorderRadius,
        padding: StyleSettings.defaultPadding,
        marginHorizontal: StyleSettings.defaultMargin,
        marginVertical: StyleSettings.defaultPadding,
      }

    });