import { ScrollView, View } from 'react-native';
import { useContext } from 'react';
import { Context } from '../context/Context';
import SettingsSection, { AvailableSettingsActions } from '../components/SettingsSection';
import { createSettingsScreenStyle } from './SettingsScreenStyle';
import SocialButtonsBar from '../components/SocialButtonsBar';
import StatusBar from '../components/StatusBar';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { AppVersions } from '../constants/AppVersions';

export default SettingsScreen = ({ navigation, props }) => {
	const { theme, language, version, personalAds } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;
	const [showPersonalAds, setShowPersonalAds] = personalAds;

	const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9694787014775307/8414832289';

	const SettingsScreenStyle = createSettingsScreenStyle(currentTheme);

	return (
		<View style={SettingsScreenStyle.settings}>
			<ScrollView>
				<SocialButtonsBar></SocialButtonsBar>
				<SettingsSection
					action={AvailableSettingsActions.CHANGE_LANGUAGE}
					iconName={'ab-testing'}
					headline={currentLanguage.settingsLanguageHeadline}
					description={currentLanguage.settingsLanguageDescription}
				></SettingsSection>
				<SettingsSection
					action={AvailableSettingsActions.TOGGLE_THEME}
					iconName={'theme-light-dark'}
					headline={currentLanguage.settingsThemeHeadline}
					description={currentLanguage.settingsThemeDescription}
				></SettingsSection>
				{currentVersion === AppVersions.LIGHT && (
					<SettingsSection
						action={AvailableSettingsActions.SHOW_PERSONAL_ADS}
						iconName={'user-following'}
						headline={currentLanguage.settingsPersonalAdsHeadline}
						description={currentLanguage.settingsPersonalAdsDescription}
					></SettingsSection>
				)}
				<SettingsSection
					action={AvailableSettingsActions.OPEN_PRIVACY_POLICY}
					iconName={'police-badge-outline'}
					headline={currentLanguage.settingsPrivacyPolicyHeadline}
					description={currentLanguage.settingsPrivacyPolicyDescription}
				></SettingsSection>
				<SettingsSection
					action={AvailableSettingsActions.OPEN_DISCLAIMER}
					iconName={'sticker-text-outline'}
					headline={currentLanguage.settingsDisclaimerHeadline}
					description={currentLanguage.settingsDisclaimerDescription}
				></SettingsSection>
				<SettingsSection
					action={AvailableSettingsActions.CONTACT}
					iconName={'email-outline'}
					headline={currentLanguage.settingsContactHeadline}
					description={currentLanguage.settingsContactDescription}
				></SettingsSection>
				<SettingsSection
					action={AvailableSettingsActions.INFORMATION}
					iconName={'information-outline'}
					headline={currentLanguage.settingsInformationHeadline}
					description={currentLanguage.settingsInformationDescription}
				></SettingsSection>
			</ScrollView>
			{currentVersion === AppVersions.LIGHT && (
				<BannerAd
					unitId={adUnitId}
					size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
					requestOptions={{
						requestNonPersonalizedAdsOnly: showPersonalAds
					}}
				></BannerAd>
			)}
		</View>
	);
};
