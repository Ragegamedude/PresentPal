import { StyleSheet } from 'react-native';
import {StyleSettings} from "../constants/StyleSettings";

export const createGiftFinderStyle = (currentTheme) =>
    StyleSheet.create({
    giftFinderWrapper: {
        marginHorizontal: StyleSettings.defaultMargin / 2,
        elevation: StyleSettings.defaultElevation,
        backgroundColor: currentTheme.primaryColor,
        borderRadius: StyleSettings.defaultBorderRadius,
    }
});