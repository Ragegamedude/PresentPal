import {StyleSheet} from "react-native";
import {StyleSettings} from "../constants/StyleSettings";
import {TextSettings} from "../constants/TextSettings";

export const createListStyle = (currentTheme) =>
    StyleSheet.create({
      listWrapper: {
        flexDirection: 'row',
        backgroundColor: currentTheme.colors.onBackground,
        marginHorizontal: StyleSettings.defaultPadding,
        marginTop: StyleSettings.defaultPadding,
        elevation: StyleSettings.defaultElevation,
        borderRadius: StyleSettings.defaultBorderRadius,
      },
      listWrapper2: {
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
        color: currentTheme.colors.secondary,
        marginTop: StyleSettings.defaultPadding,
      },
      birthday: {
        fontFamily: TextSettings.defaultFontMedium,
        fontSize: TextSettings.textSmallestSize,
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
        fontSize: TextSettings.textSmallSize
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
        fontSize: TextSettings.textSmallestSize,
      },
      functionWrapper: {
        marginVertical: StyleSettings.defaultPadding,
        justifyContent: 'center',
      },
      function: {
        borderRadius: StyleSettings.defaultBorderRadius,
        padding: StyleSettings.defaultPadding,
        marginHorizontal: StyleSettings.defaultPadding,
        marginVertical: StyleSettings.defaultPadding,
      }

    });