import {StyleSheet} from "react-native";
import {StyleSettings} from "../constants/StyleSettings";

export const createListDetailScreenStyle = (currentTheme) => StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: currentTheme.colors.background
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StyleSettings.defaultPadding,
    marginHorizontal: StyleSettings.defaultPadding,
    backgroundColor: currentTheme.colors.onBackground,
    borderTopStartRadius: StyleSettings.defaultBorderRadius,
    borderTopEndRadius: StyleSettings.defaultBorderRadius,
    elevation: StyleSettings.defaultElevation,
  },
  image: {
    marginVertical: StyleSettings.defaultMargin,
  }
})