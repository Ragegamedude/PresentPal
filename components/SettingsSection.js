import { Linking, Modal, Text, ToastAndroid, View } from 'react-native';
import { Context } from '../context/Context';
import { useContext, useState } from 'react';
import createSettingsSectionStyle from './SettingsSectionStyle';
import { AvailableThemes, Theme, Themes } from '../themes/Themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconSettings } from '../constants/IconSettings';
import { TouchableRipple } from 'react-native-paper';
import CountryFlag from 'react-native-country-flag';
import { AvailableLanguages, TranslationManager } from '../translations/TranslationManager';
import { StorageKeys } from '../constants/StorageKeys';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default SettingsSection = (props) => {
	const { theme, language, personalAds } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [showPersonalAds, setShowPersonalAds] = personalAds;

	const [showInformationModal, setShowInformationModal] = useState(false);
	const [showLanguageModal, setShowLanguageModal] = useState(false);

	const SettingsSectionStyle = createSettingsSectionStyle(currentTheme);

	const GERMAN = TranslationManager.getLanguageObject(AvailableLanguages.GERMAN);
	const ENGLISH = TranslationManager.getLanguageObject(AvailableLanguages.ENGLISH);
	const SPANISH = TranslationManager.getLanguageObject(AvailableLanguages.SPANISH);
	const PORTUGUESE = TranslationManager.getLanguageObject(AvailableLanguages.PORTUGUESE);
	const FRENCH = TranslationManager.getLanguageObject(AvailableLanguages.FRENCH);

	const executeAction = (action) => {
		if (action === AvailableSettingsActions.TOGGLE_THEME) {
			toggleThemes();
		} else if (action === AvailableSettingsActions.CHANGE_LANGUAGE) {
			setShowLanguageModal(true);
		} else if (action === AvailableSettingsActions.CONTACT) {
			openUrl(currentLanguage.settingsContactURL);
		} else if (action === AvailableSettingsActions.INFORMATION) {
			toggleInformationModal();
		} else if (action === AvailableSettingsActions.OPEN_PRIVACY_POLICY) {
			openUrl(currentLanguage.settingsPrivacyPolicyURL);
		} else if (action === AvailableSettingsActions.OPEN_DISCLAIMER) {
			openUrl(currentLanguage.settingsDisclaimerURL);
		} else if (action === AvailableSettingsActions.SHOW_PERSONAL_ADS) {
			toggleShowPersonalAds();
		} else if (action === AvailableSettingsActions.OPEN_HOMEPAGE) {
			openUrl(currentLanguage.settingsHomepageURL);
		}
	};

	const changeLanguage = (selectedLanguage) => {
		AsyncStorage.setItem(StorageKeys.LANGUAGE_STORAGE_KEY, selectedLanguage).then(() => {
			setCurrentLanguage(TranslationManager.getLanguageObject(selectedLanguage));
		});
	};

	const toggleThemes = () => {
		AsyncStorage.getItem(StorageKeys.THEME_STORAGE_KEY).then((storedValue) => {
			if (storedValue === AvailableThemes.LIGHT) {
				AsyncStorage.setItem(StorageKeys.THEME_STORAGE_KEY, AvailableThemes.DARK).then(() =>
					setCurrentTheme(Theme.selectTheme(AvailableThemes.DARK))
				);
			} else {
				AsyncStorage.setItem(StorageKeys.THEME_STORAGE_KEY, AvailableThemes.LIGHT).then(() =>
					setCurrentTheme(Theme.selectTheme(AvailableThemes.LIGHT))
				);
			}
		});
	};

	const openUrl = async (url) => {
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			await Linking.openURL(url);
		} else {
			ToastAndroid.show(currentLanguage.settingsContactCantOpenUrlError, ToastAndroid.SHORT);
		}
	};

	const toggleInformationModal = () => {
		setShowInformationModal(!showInformationModal);
	};

	const toggleShowPersonalAds = () => {
		AsyncStorage.setItem(StorageKeys.SHOW_PERSONAL_ADS_KEY, JSON.stringify(!showPersonalAds)).then(() =>
			setShowPersonalAds(!showPersonalAds)
		);
	};

	return (
		<View style={SettingsSectionStyle.settingsSectionWrapper}>
			<Modal animationType={'fade'} transparent={true} visible={showInformationModal}>
				<View style={SettingsSectionStyle.settingsSectionModalWrapper}>
					<View style={SettingsSectionStyle.settingsSectionModal}>
						<View style={SettingsSectionStyle.settingsSectionModalHeader}>
							<MaterialCommunityIcons
								style={SettingsSectionStyle.converterSectionModalHeaderIcon}
								name={props.iconName}
								color={currentTheme.secondaryColor}
								size={IconSettings.modalHeadlineIconSize}
							></MaterialCommunityIcons>
							<Text style={SettingsSectionStyle.settingsSectionModalHeaderText}>
								{currentLanguage.settingsInformationHeadline}
							</Text>
						</View>
						<View style={SettingsSectionStyle.settingsSectionModalContent}>
							<Text style={SettingsSectionStyle.settingsSectionModalContentText}>
								{currentLanguage.settingsInformationModalContent}
							</Text>
							<Text style={SettingsSectionStyle.settingsSectionModalContentText}>
								{currentLanguage.settingsInformationModalCreator}
							</Text>
							<View style={SettingsSectionStyle.settingsSectionModalButtonWrapper}>
								<TouchableRipple
									rippleColor={currentTheme.rippleEffectColor}
									borderless={true}
									style={SettingsSectionStyle.settingsSectionModalContentButton2}
									onPress={() => executeAction(AvailableSettingsActions.OPEN_HOMEPAGE)}
								>
									<Text style={SettingsSectionStyle.settingsSectionModalContentButtonText}>
										{currentLanguage.buttonVisitText}
									</Text>
								</TouchableRipple>
								<TouchableRipple
									rippleColor={currentTheme.rippleEffectColor}
									borderless={true}
									style={SettingsSectionStyle.settingsSectionModalContentButton3}
									onPress={() => setShowInformationModal(false)}
								>
									<Text style={SettingsSectionStyle.settingsSectionModalContentButtonText}>
										{currentLanguage.buttonCloseText}
									</Text>
								</TouchableRipple>
							</View>
						</View>
					</View>
				</View>
			</Modal>
			<Modal animationType={'fade'} transparent={true} visible={showLanguageModal}>
				<View style={SettingsSectionStyle.settingsSectionModalWrapper}>
					<View style={SettingsSectionStyle.settingsSectionModal}>
						<View style={SettingsSectionStyle.settingsSectionModalHeader}>
							<MaterialCommunityIcons
								style={SettingsSectionStyle.converterSectionModalHeaderIcon}
								name={props.iconName}
								color={currentTheme.secondaryColor}
								size={IconSettings.modalHeadlineIconSize}
							></MaterialCommunityIcons>
							<Text style={SettingsSectionStyle.settingsSectionModalHeaderText}>
								{currentLanguage.settingsLanguageHeadline}
							</Text>
						</View>
						<View style={SettingsSectionStyle.settingsSectionModalContent}>
							<View style={SettingsSectionStyle.settingsSectionLanguageWrapper}>
								<View style={SettingsSectionStyle.settingsSectionModalInputWrapper}>
									<View style={SettingsSectionStyle.settingsSectionModalInputButton}>
										<CountryFlag
											style={SettingsSectionStyle.settingsSectionModalInputButtonIcon}
											isoCode={TranslationManager.getCurrentLanguageAsIsoString(ENGLISH)}
											size={IconSettings.settingsFlagSize}
										/>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={SettingsSectionStyle.settingsSectionModalInputField}
										onPress={() => changeLanguage(AvailableLanguages.ENGLISH)}
										disabled={currentLanguage === ENGLISH}
									>
										<Text
											style={
												currentLanguage === ENGLISH
													? SettingsSectionStyle.settingsSectionModalInputFieldTextInactive
													: SettingsSectionStyle.settingsSectionModalInputFieldTextActive
											}
										>
											{currentLanguage.languageEnglish}
										</Text>
									</TouchableRipple>
								</View>
								<View style={SettingsSectionStyle.settingsSectionModalInputWrapper}>
									<View style={SettingsSectionStyle.settingsSectionModalInputButton}>
										<CountryFlag
											style={SettingsSectionStyle.settingsSectionModalInputButtonIcon}
											isoCode={TranslationManager.getCurrentLanguageAsIsoString(GERMAN)}
											size={IconSettings.settingsFlagSize}
										/>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={SettingsSectionStyle.settingsSectionModalInputField}
										onPress={() => changeLanguage(AvailableLanguages.GERMAN)}
										disabled={currentLanguage === GERMAN}
									>
										<Text
											style={
												currentLanguage === GERMAN
													? SettingsSectionStyle.settingsSectionModalInputFieldTextInactive
													: SettingsSectionStyle.settingsSectionModalInputFieldTextActive
											}
										>
											{currentLanguage.languageGerman}
										</Text>
									</TouchableRipple>
								</View>
								<View style={SettingsSectionStyle.settingsSectionModalInputWrapper}>
									<View style={SettingsSectionStyle.settingsSectionModalInputButton}>
										<CountryFlag
											style={SettingsSectionStyle.settingsSectionModalInputButtonIcon}
											isoCode={TranslationManager.getCurrentLanguageAsIsoString(SPANISH)}
											size={IconSettings.settingsFlagSize}
										/>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={SettingsSectionStyle.settingsSectionModalInputField}
										onPress={() => changeLanguage(AvailableLanguages.SPANISH)}
										disabled={currentLanguage === SPANISH}
									>
										<Text
											style={
												currentLanguage === SPANISH
													? SettingsSectionStyle.settingsSectionModalInputFieldTextInactive
													: SettingsSectionStyle.settingsSectionModalInputFieldTextActive
											}
										>
											{currentLanguage.languageSpanish}
										</Text>
									</TouchableRipple>
								</View>
								<View style={SettingsSectionStyle.settingsSectionModalInputWrapper}>
									<View style={SettingsSectionStyle.settingsSectionModalInputButton}>
										<CountryFlag
											style={SettingsSectionStyle.settingsSectionModalInputButtonIcon}
											isoCode={TranslationManager.getCurrentLanguageAsIsoString(PORTUGUESE)}
											size={IconSettings.settingsFlagSize}
										/>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={SettingsSectionStyle.settingsSectionModalInputField}
										onPress={() => changeLanguage(AvailableLanguages.PORTUGUESE)}
										disabled={currentLanguage === PORTUGUESE}
									>
										<Text
											style={
												currentLanguage === PORTUGUESE
													? SettingsSectionStyle.settingsSectionModalInputFieldTextInactive
													: SettingsSectionStyle.settingsSectionModalInputFieldTextActive
											}
										>
											{currentLanguage.languagePortuguese}
										</Text>
									</TouchableRipple>
								</View>
								<View style={SettingsSectionStyle.settingsSectionModalInputWrapper}>
									<View style={SettingsSectionStyle.settingsSectionModalInputButton}>
										<CountryFlag
											style={SettingsSectionStyle.settingsSectionModalInputButtonIcon}
											isoCode={TranslationManager.getCurrentLanguageAsIsoString(FRENCH)}
											size={IconSettings.settingsFlagSize}
										/>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={SettingsSectionStyle.settingsSectionModalInputField}
										onPress={() => changeLanguage(AvailableLanguages.FRENCH)}
										disabled={currentLanguage === FRENCH}
									>
										<Text
											style={
												currentLanguage === FRENCH
													? SettingsSectionStyle.settingsSectionModalInputFieldTextInactive
													: SettingsSectionStyle.settingsSectionModalInputFieldTextActive
											}
										>
											{currentLanguage.languageFrench}
										</Text>
									</TouchableRipple>
								</View>
							</View>
							<View style={SettingsSectionStyle.settingsSectionModalButtonWrapper}>
								<TouchableRipple
									rippleColor={currentTheme.rippleEffectColor}
									borderless={true}
									style={SettingsSectionStyle.settingsSectionModalContentButton}
									onPress={() => setShowLanguageModal(false)}
								>
									<Text style={SettingsSectionStyle.settingsSectionModalContentButtonText}>
										{currentLanguage.buttonCloseText}
									</Text>
								</TouchableRipple>
							</View>
						</View>
					</View>
				</View>
			</Modal>
			<TouchableRipple
				rippleColor={currentTheme.rippleEffectColor}
				borderless={true}
				style={SettingsSectionStyle.settingsSectionContainer}
				onPress={() => executeAction(props.action)}
			>
				<View style={SettingsSectionStyle.settingsSection}>
					<View style={SettingsSectionStyle.settingsIconSection}>
						<MaterialCommunityIcons
							name={props.iconName}
							color={currentTheme.secondaryColor}
							size={IconSettings.settingsSectionIconSize}
						></MaterialCommunityIcons>
					</View>
					<View style={SettingsSectionStyle.settingsSectionDividerWrapper}>
						<View style={SettingsSectionStyle.settingsSectionDivider}></View>
					</View>
					<View style={SettingsSectionStyle.settingsDescriptionSection}>
						<Text style={SettingsSectionStyle.settingsHeadline}>{props.headline}</Text>
						<Text style={SettingsSectionStyle.settingsDescription}>{props.description}</Text>
					</View>
					<View style={SettingsSectionStyle.settingsFunctionSection}>
						{props.action === AvailableSettingsActions.TOGGLE_THEME &&
							(currentTheme === Themes.light ? (
								<MaterialCommunityIcons
									name={'lightbulb-on-outline'}
									color={currentTheme.secondaryColor}
									size={IconSettings.settingsSectionIconSize}
								></MaterialCommunityIcons>
							) : (
								<MaterialCommunityIcons
									name={'lightbulb-outline'}
									color={currentTheme.secondaryColor}
									size={IconSettings.settingsSectionIconSize}
								></MaterialCommunityIcons>
							))}
						{props.action === AvailableSettingsActions.CHANGE_LANGUAGE && (
							<View style={SettingsSectionStyle.settingsFunctionLanguage}>
								<CountryFlag
									isoCode={TranslationManager.getCurrentLanguageAsIsoString(currentLanguage)}
									size={IconSettings.settingsFlagSize}
								/>
							</View>
						)}
						{props.action === AvailableSettingsActions.SHOW_PERSONAL_ADS &&
							(showPersonalAds ? (
								<FontAwesome
									name={'toggle-on'}
									color={currentTheme.secondaryColor}
									size={IconSettings.settingsSectionIconSize}
								></FontAwesome>
							) : (
								<FontAwesome
									name={'toggle-off'}
									color={currentTheme.secondaryColor}
									size={IconSettings.settingsSectionIconSize}
								></FontAwesome>
							))}
					</View>
				</View>
			</TouchableRipple>
		</View>
	);
};

export const AvailableSettingsActions = {
	TOGGLE_THEME: 'toggle-theme',
	CHANGE_LANGUAGE: 'change-language',
	CONTACT: 'contact',
	INFORMATION: 'information',
	OPEN_PRIVACY_POLICY: 'open-privacy-policy',
	OPEN_DISCLAIMER: 'open-disclaimer',
	SHOW_PERSONAL_ADS: 'show-personal-ads',
	OPEN_HOMEPAGE: 'open-homepage'
};
