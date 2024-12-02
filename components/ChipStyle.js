import {StyleSheet} from "react-native";
import {StyleSettings} from "../constants/StyleSettings";
import {IconSettings} from "../constants/IconSettings";
import {TextSettings} from "../constants/TextSettings";

export const createChipStyle = (currentTheme) => StyleSheet.create({
  chipWrapper: {
    flex: 1,
    backgroundColor: currentTheme.colors.onBackground,
    marginTop: StyleSettings.defaultPadding,
    borderRadius: StyleSettings.defaultBorderRadius,
    elevation: StyleSettings.defaultElevation,
  },
  chip:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  chipImage: {
    marginVertical: StyleSettings.defaultMargin,
    marginLeft: StyleSettings.defaultMargin,
    width: IconSettings.giftsChipSize,
    height: IconSettings.giftsChipSize
  },
  chipText: {
    marginVertical: StyleSettings.defaultMargin,
    marginHorizontal: StyleSettings.defaultMargin,
    color: currentTheme.colors.secondary,
    fontFamily: TextSettings.defaultFontRegular,
    fontSize: TextSettings.textSmallSize
  }
})