import {StyleSheet} from 'react-native';
import {TextSettings} from "../constants/TextSettings";

export const createListsScreenStyle = (currentTheme) =>
    StyleSheet.create({
      lists: {
        flex: 1,
        backgroundColor: currentTheme.colors.background
      },

      fabActionLabel: {
        fontSize: TextSettings.textDefaultSize,
        fontFamily: TextSettings.defaultFontRegular,
      }
    });
