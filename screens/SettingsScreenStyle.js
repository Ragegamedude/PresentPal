import {StyleSheet} from 'react-native';
import { StyleSettings } from '../constants/StyleSettings';

export const createSettingsScreenStyle = (currentTheme) =>
  StyleSheet.create({
    settings: {
      flex: 1,
      backgroundColor: currentTheme.background,
    },
    settingsWrapper: {
      marginTop: StyleSettings.defaultPadding /2
    }
  });
