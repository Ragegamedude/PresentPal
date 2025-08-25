import {ScrollView, View} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/Context';
import SettingsSection, {
  AvailableSettingsActions
} from '../components/SettingsSection';
import {createSettingsScreenStyle} from './SettingsScreenStyle';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {AppVersions} from '../constants/AppVersions';
import Header from '../components/Header';

export default SettingsScreen = ({navigation, props}) => {
  const {theme, language, version, personalAds} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;
  const [currentVersion, setCurrentVersion] = version;
  const [showPersonalAds, setShowPersonalAds] = personalAds;

  const adUnitId = __DEV__ ? TestIds.BANNER
      : 'ca-app-pub-9694787014775307/8414832289';

  const SettingsScreenStyle = createSettingsScreenStyle(currentTheme);

  return (
      <View style={SettingsScreenStyle.settings}>
        <Header screen={'settings'} title={currentLanguage.settingsScreenTitle}
                currentTheme={currentTheme}></Header>
        <ScrollView style={SettingsScreenStyle.settingsWrapper}>
          <SettingsSection
              action={AvailableSettingsActions.CHANGE_LANGUAGE}
              iconName={'globe'}
              headline={currentLanguage.settingsLanguageHeadline}
              description={currentLanguage.settingsLanguageDescription}
          ></SettingsSection>
          <SettingsSection
              action={AvailableSettingsActions.TOGGLE_THEME}
              iconName={'layout'}
              headline={currentLanguage.settingsThemeHeadline}
              description={currentLanguage.settingsThemeDescription}
          ></SettingsSection>
          <SettingsSection
            action={AvailableSettingsActions.TOGGLE_AUTHENTICATION}
            iconName={'grid'}
            headline={currentLanguage.settingsToggleAuthenticationHeadline}
            description={currentLanguage.settingsToggleAuthenticationDescription}
          ></SettingsSection>
          {currentVersion === AppVersions.LIGHT && (
              <SettingsSection
                  action={AvailableSettingsActions.SHOW_PERSONAL_ADS}
                  iconName={'grid'}
                  headline={currentLanguage.settingsPersonalAdsHeadline}
                  description={currentLanguage.settingsPersonalAdsDescription}
              ></SettingsSection>
          )}
          <SettingsSection
            action={AvailableSettingsActions.RATE_APP}
            iconName={'info'}
            headline={currentLanguage.settingsRateAppHeadline}
            description={currentLanguage.settingsRateAppDescription}
          ></SettingsSection>
          <SettingsSection
              action={AvailableSettingsActions.OPEN_TERMS_CONDITION}
              iconName={'lock'}
              headline={currentLanguage.settingsTermsConditionsHeadline}
              description={currentLanguage.settingsTermsConditionsDescription}
          ></SettingsSection>
          <SettingsSection
              action={AvailableSettingsActions.OPEN_PRIVACY_POLICY}
              iconName={'lock'}
              headline={currentLanguage.settingsPrivacyPolicyHeadline}
              description={currentLanguage.settingsPrivacyPolicyDescription}
          ></SettingsSection>
          <SettingsSection
              action={AvailableSettingsActions.OPEN_DISCLAIMER}
              iconName={'alert-triangle'}
              headline={currentLanguage.settingsDisclaimerHeadline}
              description={currentLanguage.settingsDisclaimerDescription}
          ></SettingsSection>
          <SettingsSection
              action={AvailableSettingsActions.CONTACT}
              iconName={'mail'}
              headline={currentLanguage.settingsContactHeadline}
              description={currentLanguage.settingsContactDescription}
          ></SettingsSection>
          <SettingsSection
              action={AvailableSettingsActions.INFORMATION}
              iconName={'info'}
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
