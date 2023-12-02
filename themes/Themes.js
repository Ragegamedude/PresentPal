export const AvailableThemes = {
	LIGHT: 'light',
	DARK: 'dark'
};

export const Themes = {
	light: {
		statusBarStyle: 'dark',
		primaryColor: '#FFFFFF',
		primaryVariantColor: '#FFFFFF',
		secondaryColor: '#565656',
		secondaryVariantColor: '#A6A6A6',
		background: '#FFFFFF',
		surface: '#FFFFFF',
		error: '#B00020',
		success: '#089d00',
		onPrimary: '#FFFFFF',
		onSecondary: '#FFFFFF',
		onBackground: '#000000',
		onSurface: '#000000',
		onError: '#FFFFFF',
		transparentBackground: '#5F5F5F30',
		rippleEffectColor: '#5F5F5F20',
		modalPrimaryColor: '#565656',
		modalSecondaryColor: '#FFFFFF'
	},
	dark: {
		statusBarStyle: 'light',
		primaryColor: '#1F1F1F',
		primaryVariantColor: '#121212',
		secondaryColor: '#FFFFFF',
		secondaryVariantColor: '#B3B3B3',
		background: '#131313',
		surface: '#FFFFFF',
		error: '#b07418',
		success: '#089d00',
		onPrimary: '#FFFFFF',
		onSecondary: '#FFFFFF',
		onBackground: '#000000',
		onSurface: '#000000',
		onError: '#FFFFFF',
		transparentBackground: '#5F5F5F60',
		rippleEffectColor: '#FFFFFF20',
		modalPrimaryColor: '#121212',
		modalSecondaryColor: '#FFFFFF'
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
