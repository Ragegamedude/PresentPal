import {StyleSheet} from "react-native";
import {StyleSettings} from "../constants/StyleSettings";
import {TextSettings} from "../constants/TextSettings";
import {IconSettings} from "../constants/IconSettings";

export const createGiftStyle = (currentTheme) =>
    StyleSheet.create({
      giftWrapper: {
        flexDirection: 'row',
        backgroundColor: currentTheme.colors.onBackground,
        marginHorizontal: StyleSettings.defaultPadding,
        marginTop: StyleSettings.defaultPadding,
        elevation: StyleSettings.defaultElevation,
        borderRadius: StyleSettings.defaultBorderRadius,
      },
      giftWrapper2: {
        flexDirection: 'row',
        backgroundColor: currentTheme.colors.onBackground,
        marginHorizontal: StyleSettings.defaultPadding,
        marginVertical: StyleSettings.defaultPadding,
        elevation: StyleSettings.defaultElevation,
        borderRadius: StyleSettings.defaultBorderRadius,
      },
      imageWrapper: {
        alignItems: 'center',
        marginLeft: StyleSettings.defaultPadding,
        marginVertical: StyleSettings.defaultPadding,
      },
      image: {
        marginVertical: StyleSettings.defaultMargin,
        marginLeft: StyleSettings.defaultMargin,
        width: IconSettings.giftImage,
        height: IconSettings.giftImage
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