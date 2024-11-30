import {StyleSheet} from 'react-native';
import {StyleSettings} from "../constants/StyleSettings";

export const createGiftsScreenStyle = (currentTheme) =>
    StyleSheet.create({
      gifts: {
        flex: 1,
        backgroundColor: currentTheme.colors.background
      },
      giftsWrapper: {
        flex: 1,
      },
      chipWrapper: {
        flex: 1,
        flexDirection: "row",
        marginBottom: StyleSettings.defaultPadding
      },
      chips1: {
        flex: 1,
        flexDirection: "column",
        marginLeft: StyleSettings.defaultPadding,
        marginRight: StyleSettings.defaultPadding / 2,
      },
      chips2: {
        flex: 1,
        flexDirection: "column",
        marginLeft: StyleSettings.defaultPadding / 2,
        marginRight: StyleSettings.defaultPadding,
      },
    });
