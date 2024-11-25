import {StyleSheet} from "react-native";
import {TextSettings} from "../constants/TextSettings";
import {StyleSettings} from "../constants/StyleSettings";

export const createLoadingContentStyle = (currentTheme) => StyleSheet.create({
  loadingContentWrapper: {
    flex: 1,
    backgroundColor: currentTheme.colors.backdrop,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContentIndicator: {},
  loadingText: {
    marginTop: StyleSettings.defaultMargin,
    fontSize: TextSettings.textDefaultSize,
    fontFamily: TextSettings.defaultFontBold,
    color: currentTheme.colors.secondary,
  },

})
