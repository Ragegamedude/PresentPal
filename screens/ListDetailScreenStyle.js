import {StyleSheet} from "react-native";

export const createListDetailScreenStyle = (currentTheme) => StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: currentTheme.colors.background
  },
})