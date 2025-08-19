import {StyleSheet} from 'react-native';
import {TextSettings} from "../constants/TextSettings";
import {StyleSettings} from '../constants/StyleSettings';

export const createListsScreenStyle = (currentTheme) =>
  StyleSheet.create({
    lists: {
      backgroundColor: currentTheme.colors.background,
      flex: 1,
    },
    fabActionLabel: {
      fontSize: TextSettings.textDefaultSize,
      fontFamily: TextSettings.defaultFontRegular,
      color: currentTheme.colors.secondary
    },
    contentEmpty: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentEmptyText: {
      marginHorizontal: StyleSettings.defaultMargin,
      fontSize: TextSettings.textDefaultSize,
      fontFamily: TextSettings.defaultFontRegular,
      color: currentTheme.colors.secondary,
      textAlign: 'center'
    }
  });
