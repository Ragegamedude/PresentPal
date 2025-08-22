import AsyncStorage from "@react-native-async-storage/async-storage";
import "expo-dev-client";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from "@use-expo/font";
import * as SplashScreen from "expo-splash-screen";
import {SQLiteProvider} from "expo-sqlite";
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useMemo, useState} from "react";
import {SafeAreaView, Text, ToastAndroid, View} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import CountryFlag from "react-native-country-flag";
import mobileAds from "react-native-google-mobile-ads";
import {TouchableRipple} from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import createAppStyle from "./AppStyle";
import {AppVersions} from "./constants/AppVersions";
import {DatabaseSettings} from "./constants/DatabaseSettings";
import {IconSettings} from "./constants/IconSettings";
import {StorageKeys} from "./constants/StorageKeys";
import {Context} from "./context/Context";
import * as DatabaseAdapter from "./database/DatabaseAdapter";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import * as LocalAuthentication from 'expo-local-authentication';

//own imports of constants and components
import {AvailableThemes, Theme} from "./themes/Themes";
import {AvailableLanguages, TranslationManager} from "./translations/TranslationManager";

export default function App() {
  //Select version of app. Light = with Ads, Premium = no ads and more functions
  const [currentVersion, setCurrentVersion] = useState(AppVersions.PREMIUM);
  const [currentTheme, setCurrentTheme] = useState(
    Theme.selectTheme(AvailableThemes.LIGHT));
  const [currentLanguage, setCurrentLanguage] = useState(
    TranslationManager.getLanguageObject(AvailableLanguages.ENGLISH)
  );
  const [currentLists, setCurrentLists] = useState([]);
  const [showPersonalAds, setShowPersonalAds] = useState(true);
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [useAuthentication, setUseAuthentication] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hiddenGiftInformation, setHiddenGiftInformation] = useState(false);

  // Readiness variables for splashscreen
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [languageLoaded, setLanguageLoaded] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  // Prevent Autohide of Splash
  const ignored = SplashScreen.preventAutoHideAsync();

  const GERMAN = TranslationManager.getLanguageObject(
    AvailableLanguages.GERMAN);
  const ENGLISH = TranslationManager.getLanguageObject(
    AvailableLanguages.ENGLISH);
  const SPANISH = TranslationManager.getLanguageObject(
    AvailableLanguages.SPANISH);
  const PORTUGUESE = TranslationManager.getLanguageObject(
    AvailableLanguages.PORTUGUESE);
  const FRENCH = TranslationManager.getLanguageObject(
    AvailableLanguages.FRENCH);

  TranslationManager.registerDatePickerTranslations();

  const AppStyle = createAppStyle(currentTheme);

  // Load custom fonts
  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf")
  });

  //load data at app start from storage or external sources like mount
  useEffect(() => {
    if (currentVersion === AppVersions.LIGHT) {
      const ignored = mobileAds().initialize();
    }

    //get the persistent theme from asyncstorage
    AsyncStorage.getItem(StorageKeys.THEME_STORAGE_KEY).then((storedValue) => {
      if (storedValue != null) {
        setCurrentTheme(Theme.selectTheme(storedValue));
      } else {
        AsyncStorage.setItem(StorageKeys.THEME_STORAGE_KEY,
          AvailableThemes.LIGHT).then(() => {
          setCurrentTheme(Theme.selectTheme(AvailableThemes.LIGHT));
        });
      }
      setThemeLoaded(true);
    });

    AsyncStorage.getItem(StorageKeys.LANGUAGE_STORAGE_KEY).then(
      (storedValue) => {
        if (storedValue != null) {
          setCurrentLanguage(
            TranslationManager.getLanguageObject(storedValue));
        } else {
          AsyncStorage.setItem(StorageKeys.LANGUAGE_STORAGE_KEY,
            AvailableLanguages.ENGLISH).then(() => {
            setCurrentLanguage(TranslationManager.getLanguageObject(
              AvailableLanguages.ENGLISH));
          });
        }
        setLanguageLoaded(true);
      });

    AsyncStorage.getItem(StorageKeys.SHOW_INTRODUCTION_KEY).then(
      (storedValue) => {
        if (storedValue != null) {
          setShowIntroduction(JSON.parse(storedValue));
        }
      });

    AsyncStorage.getItem(StorageKeys.SHOW_PERSONAL_ADS_KEY).then(
      (storedValue) => {
        if (storedValue != null) {
          setShowPersonalAds(JSON.parse(storedValue));
        }
      });

    AsyncStorage.getItem(StorageKeys.GIFT_INFORMATION_HIDDEN_KEY).then(
      (storedValue) => {
        if (storedValue != null) {
          setHiddenGiftInformation(JSON.parse(storedValue));
        }
      });

    AsyncStorage.getItem(StorageKeys.USE_AUTHENTICATION_STORAGE_KEY).then(
      (storedValue) => {
        if (storedValue != null) {
          setUseAuthentication(JSON.parse(storedValue));
        }
      });
  });

  useMemo(() => {
    if (fontsLoaded && languageLoaded && themeLoaded) {
      setIsAppReady(true);
      const ignored = SplashScreen.hideAsync();
    }
  }, [fontsLoaded, languageLoaded, themeLoaded]);


  const changeLanguage = (selectedLanguage) => {
    AsyncStorage.setItem(StorageKeys.LANGUAGE_STORAGE_KEY,
      selectedLanguage).then(() => {
      setCurrentLanguage(
        TranslationManager.getLanguageObject(selectedLanguage));
    });
  };

  const authenticateApp = async () => {
    const authenticationResult = await LocalAuthentication.authenticateAsync({
      promptMessage: currentLanguage.authenticationPromptMessage,
      cancelLabel: currentLanguage.authenticationCancelButton,
      disableDeviceFallback: false
    })
    if (authenticationResult.success) {
      setIsAuthenticated(true);
    } else {
      if (authenticationResult.error === "user_cancel" || authenticationResult.error === "system_cancel") {
        ToastAndroid.show(currentLanguage.authenticationCancelError, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(currentLanguage.authenticationError, ToastAndroid.SHORT);
      }
    }
  }

  const slides = [
    {
      key: "s1",
      introduction: currentLanguage.introductionIntroduction1,
      title: currentLanguage.introductionSlideHeadline1,
      iconName: "globe",
      description: currentLanguage.introductionSlideDescription1,
      languageDescription: currentLanguage.introductionChangeLanguageDescription
    },
    {
      key: "s2",
      introduction: currentLanguage.introductionIntroduction2,
      title: currentLanguage.introductionSlideHeadline2,
      iconName: "bulb",
      description: currentLanguage.introductionSlideDescription2,
      languageDescription: currentLanguage.introductionChangeLanguageDescription
    },
    {
      key: "s3",
      introduction: currentLanguage.introductionIntroduction3,
      title: currentLanguage.introductionSlideHeadline3,
      iconName: "layers",
      description: currentLanguage.introductionSlideDescription3,
      languageDescription: currentLanguage.introductionChangeLanguageDescription
    },
    {
      key: "s4",
      introduction: currentLanguage.introductionIntroduction4,
      title: currentLanguage.introductionSlideHeadline4,
      iconName: "wallet",
      description: currentLanguage.introductionSlideDescription4,
      languageDescription: currentLanguage.introductionChangeLanguageDescription
    },
    {
      key: "s5",
      introduction: currentLanguage.introductionIntroduction5,
      title: currentLanguage.introductionSlideHeadline5,
      iconName: "settings",
      description: currentLanguage.introductionSlideDescription5,
      languageDescription: currentLanguage.introductionChangeLanguageDescription
    }
  ];

  const RenderItem = ({item}) => {
    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor={currentTheme.colors.onBackground}
          style={currentTheme.colors.statusBarStyle}
          translucent={false}
        />
        <View style={AppStyle.introductionWrapper}>
          <View style={AppStyle.introductionHeadlineWrapper}>
            <Text style={AppStyle.introductionIntroduction}>{item.introduction}</Text>
            <Text style={AppStyle.introductionHeadline}>{item.title}</Text>
          </View>
          <View style={AppStyle.introductionContentWrapper}>
            <SimpleLineIcon
              style={AppStyle.converterSectionModalHeaderIcon}
              name={item.iconName}
              color={currentTheme.colors.secondary}
              size={IconSettings.introductionIconSize}
            ></SimpleLineIcon>
          </View>
          <View style={AppStyle.introductionDescriptionWrapper}>
            <Text
              style={AppStyle.introductionDescription}>{item.description}</Text>
          </View>
          {item.key === 's1' && (<View>
            <View style={AppStyle.introductionLanguageDescriptionWrapper}>
              <Text
                style={AppStyle.introductionLanguageDescriptionText}>{item.languageDescription}</Text>
            </View>
            <View style={AppStyle.introductionLanguageWrapper}>
              <TouchableRipple
                theme={currentTheme}
                borderless={true}
                style={AppStyle.introductionLanguage}
                onPress={() => changeLanguage(AvailableLanguages.ENGLISH)}
              >
                <CountryFlag
                  style={AppStyle.introductionLanguageFlag}
                  isoCode={TranslationManager.getCurrentLanguageAsIsoString(
                    ENGLISH)}
                  size={IconSettings.appFlagSize}
                />
              </TouchableRipple>
              <TouchableRipple
                theme={currentTheme}
                borderless={true}
                style={AppStyle.introductionLanguage}
                onPress={() => changeLanguage(AvailableLanguages.GERMAN)}
              >
                <CountryFlag
                  style={AppStyle.introductionLanguageFlag}
                  isoCode={TranslationManager.getCurrentLanguageAsIsoString(
                    GERMAN)}
                  size={IconSettings.appFlagSize}
                />
              </TouchableRipple>
              <TouchableRipple
                theme={currentTheme}
                borderless={true}
                style={AppStyle.introductionLanguage}
                onPress={() => changeLanguage(AvailableLanguages.SPANISH)}
              >
                <CountryFlag
                  style={AppStyle.introductionLanguageFlag}
                  isoCode={TranslationManager.getCurrentLanguageAsIsoString(
                    SPANISH)}
                  size={IconSettings.appFlagSize}
                />
              </TouchableRipple>
              <TouchableRipple
                theme={currentTheme}
                borderless={true}
                style={AppStyle.introductionLanguage}
                onPress={() => changeLanguage(AvailableLanguages.PORTUGUESE)}
              >
                <CountryFlag
                  style={AppStyle.introductionLanguageFlag}
                  isoCode={TranslationManager.getCurrentLanguageAsIsoString(
                    PORTUGUESE)}
                  size={IconSettings.appFlagSize}
                />
              </TouchableRipple>
              <TouchableRipple
                theme={currentTheme}
                borderless={true}
                style={AppStyle.introductionLanguage}
                onPress={() => changeLanguage(AvailableLanguages.FRENCH)}
              >
                <CountryFlag
                  style={AppStyle.introductionLanguageFlag}
                  isoCode={TranslationManager.getCurrentLanguageAsIsoString(
                    FRENCH)}
                  size={IconSettings.appFlagSize}
                />
              </TouchableRipple>
            </View>
          </View>)}
        </View>
      </SafeAreaView>
    );
  };

  const RenderNextButton = () => {
    return (
      <View style={AppStyle.introductionButton}>
        <AntDesign
          style={AppStyle.converterSectionModalHeaderIcon}
          name={"rightcircleo"}
          color={currentTheme.colors.secondary}
          size={IconSettings.introductionMiniIconSize}
        ></AntDesign>
        <Text
          style={AppStyle.introductionText}>{currentLanguage.introductionNext}</Text>
      </View>
    );
  };

  const RenderFinishButton = () => {
    return (
      <View style={AppStyle.introductionButton}>
        <AntDesign
          style={AppStyle.converterSectionModalHeaderIcon}
          name={"checkcircleo"}
          color={currentTheme.colors.secondary}
          size={IconSettings.introductionMiniIconSize}
        ></AntDesign>
        <Text
          style={AppStyle.introductionText}>{currentLanguage.introductionDone}</Text>
      </View>
    );
  };

  const RenderSkipButton = () => {
    return (
      <View style={AppStyle.introductionButton}>
        <AntDesign
          style={AppStyle.converterSectionModalHeaderIcon}
          name={"closecircleo"}
          color={currentTheme.colors.secondary}
          size={IconSettings.introductionMiniIconSize}
        ></AntDesign>
        <Text
          style={AppStyle.introductionText}>{currentLanguage.introductionSkip}</Text>
      </View>
    );
  };

  const introFinished = () => {
    AsyncStorage.setItem(StorageKeys.SHOW_INTRODUCTION_KEY,
      JSON.stringify(false)).then(() => {
      setShowIntroduction(false);
    });
  };

  //Render nothing till fonts loaded
  if (!isAppReady) {
    return null;
  } else if (isAppReady && showIntroduction) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={introFinished}
        showSkipButton={true}
        onSkip={introFinished}
        renderDoneButton={RenderFinishButton}
        renderNextButton={RenderNextButton}
        renderSkipButton={RenderSkipButton}
        dotClickEnabled={false}
        activeDotStyle={AppStyle.activeDotStyle}
        dotStyle={AppStyle.inactiveDotStyle}
      />
    );
  } else if (isAppReady && !showIntroduction && useAuthentication && !isAuthenticated) {
    return (
      <View style={AppStyle.introductionWrapper}>
        <View style={AppStyle.introductionHeadlineWrapper}>
          <Text style={AppStyle.introductionIntroduction}>{currentLanguage.authenticationIntroduction}</Text>
          <Text style={AppStyle.introductionHeadline}>{currentLanguage.authenticationHeadline}</Text>
        </View>
        <View style={AppStyle.introductionContentWrapper}>
          <SimpleLineIcon
            style={AppStyle.converterSectionModalHeaderIcon}
            name={'lock'}
            color={currentTheme.colors.secondary}
            size={IconSettings.introductionIconSize}
          ></SimpleLineIcon>
        </View>
        <View style={AppStyle.introductionDescriptionWrapper}>
          <Text style={AppStyle.introductionDescription}>{currentLanguage.authenticationDescription}</Text>
        </View>
        <View>
          <View style={AppStyle.introductionLanguageWrapper}>
            <TouchableRipple
              theme={currentTheme}
              borderless={true}
              style={AppStyle.authenticationButton}
              onPress={() => authenticateApp()}
            >
              <Text style={AppStyle.authenticationButtonText}>Press to Unlock</Text>
            </TouchableRipple>
          </View>
        </View>
        <View style>

        </View>
      </View>
    );
  } else {
    return (
      <Context.Provider
        value={{
          theme: [currentTheme, setCurrentTheme],
          language: [currentLanguage, setCurrentLanguage],
          version: [currentVersion, setCurrentVersion],
          personalAds: [showPersonalAds, setShowPersonalAds],
          introduction: [showIntroduction, setShowIntroduction],
          hiddenGiftInformationValue: [hiddenGiftInformation, setHiddenGiftInformation],
          lists: [currentLists, setCurrentLists],
          authentication: [useAuthentication, setUseAuthentication],
          authenticated: [isAuthenticated, setIsAuthenticated],
        }}
      >
        <NavigationContainer>
          <StatusBar
            backgroundColor={currentTheme.colors.onBackground}
            style={currentTheme.colors.statusBarStyle}
            translucent={false}
          />
          <SQLiteProvider databaseName={DatabaseSettings.DEFAULT_DATABASE_NAME}
                          onInit={DatabaseAdapter.initTables}>
            <BottomTabNavigator></BottomTabNavigator>
          </SQLiteProvider>
        </NavigationContainer>
      </Context.Provider>
    );
  }
}
