import { StyleSheet } from 'react-native';
import {StyleSettings} from "../constants/StyleSettings";
export const createGiftsScreenStyle = (currentTheme) =>
	StyleSheet.create({
		gifts: {
			flex: 1,
			backgroundColor: currentTheme.background
		},
		giftsWrapper : {
			flex: 1,
			marginTop: StyleSettings.defaultPadding,
		}

	});
