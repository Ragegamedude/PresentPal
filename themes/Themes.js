export const AvailableThemes = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const Themes = {
  light: {
    colors: {
      primary: "rgb(246,161,5)",
      onPrimary: "rgb(255,255,255)",
      primaryContainer: "rgb(246,161,5)", //FAB
      onPrimaryContainer: "rgb(255,255,255)",
      secondary: "rgb(90,90,90)",
      onSecondary: "rgb(255, 255, 255)",
      secondaryContainer: "rgb(246,161,5)",
      onSecondaryContainer: "rgb(255, 255, 255)",
      tertiary: "rgb(128, 81, 88)",
      onTertiary: "rgb(255, 255, 255)",
      tertiaryContainer: "rgb(255, 217, 221)",
      onTertiaryContainer: "rgb(50, 16, 23)",
      error: "rgb(186, 26, 26)",
      onError: "rgb(255, 255, 255)",
      errorContainer: "rgb(255, 218, 214)",
      onErrorContainer: "rgb(65, 0, 2)",
      background: "rgb(250, 250, 250)",
      onBackground: "rgb(255,255,255)",
      surface: "rgb(250, 250, 250)",
      onSurface: "rgb(90,90,90)",
      surfaceVariant: "rgb(250, 250, 250)",
      onSurfaceVariant: "rgba(114,114,114,1)",
      outline: "rgb(124, 117, 126)",
      outlineVariant: "rgb(204, 196, 206)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(50, 47, 51)",
      inverseOnSurface: "rgb(245, 239, 244)",
      inversePrimary: "rgb(220, 184, 255)",
      elevation: {
        level0: "transparent",
        level1: "rgb(248, 242, 251)",
        level2: "rgb(246,161,5)",
        level3: "rgb(218,149,18)",
        level4: "rgb(239, 229, 245)",
        level5: "rgb(236, 226, 243)"
      },
      surfaceDisabled: "rgba(29, 27, 30, 0.12)",
      onSurfaceDisabled: "rgba(29, 27, 30, 0.38)",
      backdrop: "rgba(0,0,0,0.25)",
      statusBarStyle: 'dark',
    }
  },
  dark: {
    colors: {
      primary: "rgb(246,161,5)",
      onPrimary: "rgb(255,255,255)",
      primaryContainer: "rgb(246,161,5)",
      onPrimaryContainer: "rgb(255,255,255)",
      secondary: "rgb(230,230,230)",
      onSecondary: "rgb(54, 44, 63)",
      secondaryContainer: "rgb(246,161,5)",
      onSecondaryContainer: "rgb(255,255,255)",
      tertiary: "rgb(243, 183, 190)",
      onTertiary: "rgb(75, 37, 43)",
      tertiaryContainer: "rgb(101, 58, 65)",
      onTertiaryContainer: "rgb(255, 217, 221)",
      error: "rgb(255, 180, 171)",
      onError: "rgb(105, 0, 5)",
      errorContainer: "rgb(147, 0, 10)",
      onErrorContainer: "rgb(255, 180, 171)",
      background: "rgb(17,17,19)",
      onBackground: "rgb(28,28,30)",
      surface: "rgb(17,17,19)",
      onSurface: "rgb(230,230,230)",
      surfaceVariant: "rgb(28,28,30)",
      onSurfaceVariant: "rgba(130, 130, 130,1)",
      outline: "rgb(150, 142, 152)",
      outlineVariant: "rgb(74, 69, 78)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(231, 225, 229)",
      inverseOnSurface: "rgb(50, 47, 51)",
      inversePrimary: "rgb(120, 69, 172)",
      elevation: {
        level0: "transparent",
        level1: "rgb(39, 35, 41)",
        level2: "rgb(44, 40, 48)",
        level3: "rgb(246,161,5)",
        level4: "rgb(52, 46, 57)",
        level5: "rgb(56, 49, 62)"
      },
      surfaceDisabled: "rgba(231, 225, 229, 0.12)",
      onSurfaceDisabled: "rgba(231, 225, 229, 0.38)",
      backdrop: "rgba(51, 47, 55, 0.4)",
      statusBarStyle: 'light',
    }
  }
};

export const Theme = {
  selectTheme: function (theme) {
    let selectedTheme;
    if (theme === AvailableThemes.LIGHT) {
      selectedTheme = Themes.light;
    } else if (theme === AvailableThemes.DARK) {
      selectedTheme = Themes.dark;
    } else {
      //default style
      selectedTheme = Themes.light;
    }
    return selectedTheme;
  },
  getThemeAsString: function (currentTheme, currentLanguage) {
    let themeAsString;
    if (currentTheme === Themes.light) {
      themeAsString = currentLanguage.settingsThemeLight;
    } else if (currentTheme === Themes.dark) {
      themeAsString = currentLanguage.settingsThemeDark;
    }
    return themeAsString;
  }
};
