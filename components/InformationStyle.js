import {StyleSheet} from "react-native";
import {StyleSettings} from "../constants/StyleSettings";
import {TextSettings} from "../constants/TextSettings";

export const createInformationStyle = (currentTheme) =>
    StyleSheet.create({
      informationWrapper: {
        backgroundColor: currentTheme.colors.onBackground,
        flexDirection: 'row',
        marginHorizontal: StyleSettings.defaultPadding,
        borderRadius: StyleSettings.defaultBorderRadius,
        elevation: StyleSettings.defaultElevation,
        marginTop: StyleSettings.defaultPadding
      },
      informationImageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: StyleSettings.defaultMargin,
      },
      informationImage: {
        width: 64,
        height: 64,
      },
      informationTextWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: StyleSettings.defaultMargin,
        marginVertical: StyleSettings.defaultMargin,
      },
      informationHeadline: {
        fontFamily: TextSettings.defaultFontBold,
        fontSize: TextSettings.textDefaultSize,
        color: currentTheme.colors.primary
      },
      informationText: {
        color: currentTheme.colors.secondary,
        fontFamily: TextSettings.defaultFontLight,
        fontSize: TextSettings.textXSSize
      },
      informationIconWrapper: {
        marginHorizontal: StyleSettings.defaultPadding,
        marginVertical: StyleSettings.defaultPadding,

      },
      function: {
        borderRadius: StyleSettings.defaultBorderRadius,
        padding: StyleSettings.defaultPadding,
      }
    })