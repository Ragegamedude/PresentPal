import { Linking, ToastAndroid, View } from 'react-native';
import { Context } from '../context/Context';
import { useContext } from 'react';
import { createSocialButtonsBarStyle } from './SocialButtonsBarStyle';
import { IconSettings } from '../constants/IconSettings';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { TouchableRipple } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
				<MaterialCommunityIcons
					name={'facebook'}
					color={currentTheme.secondaryColor}
					size={IconSettings.socialIconSize}
				></MaterialCommunityIcons>
			</TouchableRipple>
			<TouchableRipple
				rippleColor={currentTheme.rippleEffectColor}
				borderless={true}
				style={SocialButtonsBarStyle.socialButton}
				onPress={() => openUrl('https://twitter.com/ARGames15')}
			>
				<MaterialCommunityIcons
					name={'twitter'}
					color={currentTheme.secondaryColor}
					size={IconSettings.socialIconSize}
				></MaterialCommunityIcons>
			</TouchableRipple>
			<TouchableRipple
				rippleColor={currentTheme.rippleEffectColor}
				borderless={true}
				style={SocialButtonsBarStyle.socialButton}
				onPress={() => openUrl('https://www.youtube.com/channel/UCFXWwzZr9rm29e4HxybSKZQ')}
			>
				<MaterialCommunityIcons
					name={'youtube'}
					color={currentTheme.secondaryColor}
					size={IconSettings.socialIconSize}
				></MaterialCommunityIcons>
			</TouchableRipple>
			<TouchableRipple
				rippleColor={currentTheme.rippleEffectColor}
				borderless={true}
				style={SocialButtonsBarStyle.socialButton}
				onPress={() => openUrl('https://www.instagram.com/argames15/?hl=de')}
			>
				<FontAwesome5
					name={'instagram-square'}
					color={currentTheme.secondaryColor}
					size={IconSettings.socialIconSize}
				></FontAwesome5>
			</TouchableRipple>
		</View>
	);
};
