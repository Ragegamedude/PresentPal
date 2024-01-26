import { Linking, ToastAndroid, View } from 'react-native';
import { Context } from '../context/Context';
import { useContext } from 'react';
import { createSocialButtonsBarStyle } from './SocialButtonsBarStyle';
import { IconSettings } from '../constants/IconSettings';
import { TouchableRipple } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default SocialButtonBar = () => {
	const { theme, language, version } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;

	const SocialButtonsBarStyle = createSocialButtonsBarStyle(currentTheme);

	const openUrl = async (url) => {
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			await Linking.openURL(url);
		} else {
			ToastAndroid.show(currentLanguage.settingsContactCantOpenUrlError, ToastAndroid.SHORT);
		}
	};

	return (
		<View style={SocialButtonsBarStyle.socialBarWrapper}>
			<TouchableRipple
				rippleColor={currentTheme.rippleEffectColor}
				borderless={true}
				style={SocialButtonsBarStyle.socialButton}
				onPress={() => openUrl('https://www.facebook.com/profile.php?id=100095044938509')}
			>
				<Feather name={'facebook'} color={currentTheme.secondaryColor} size={IconSettings.socialIconSize}></Feather>
			</TouchableRipple>
			<TouchableRipple
				rippleColor={currentTheme.rippleEffectColor}
				borderless={true}
				style={SocialButtonsBarStyle.socialButton}
				onPress={() => openUrl('https://twitter.com/ARGames15')}
			>
				<Feather name={'twitter'} color={currentTheme.secondaryColor} size={IconSettings.socialIconSize}></Feather>
			</TouchableRipple>
			<TouchableRipple
				rippleColor={currentTheme.rippleEffectColor}
				borderless={true}
				style={SocialButtonsBarStyle.socialButton}
				onPress={() => openUrl('https://www.youtube.com/channel/UCFXWwzZr9rm29e4HxybSKZQ')}
			>
				<Feather name={'youtube'} color={currentTheme.secondaryColor} size={IconSettings.socialIconSize}></Feather>
			</TouchableRipple>
			<TouchableRipple
				rippleColor={currentTheme.rippleEffectColor}
				borderless={true}
				style={SocialButtonsBarStyle.socialButton}
				onPress={() => openUrl('https://www.instagram.com/argames15/?hl=de')}
			>
				<Feather name={'instagram'} color={currentTheme.secondaryColor} size={IconSettings.socialIconSize}></Feather>
			</TouchableRipple>
		</View>
	);
};
