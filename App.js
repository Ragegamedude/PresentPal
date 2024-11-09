import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {useFonts} from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'expo-dev-client';
import mobileAds from 'react-native-google-mobile-ads';
import {SafeAreaView, Text, View} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

//own imports of constants and components
import {AvailableThemes, Theme} from './themes/Themes';
import {AppVersions} from './constants/AppVersions';
import {AvailableLanguages, TranslationManager} from './translations/TranslationManager';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import {Context} from './context/Context';
import * as SplashScreen from 'expo-splash-screen';
import AppIntroSlider from 'react-native-app-intro-slider';
import createAppStyle from './AppStyle';
import {IconSettings} from './constants/IconSettings';
import CountryFlag from 'react-native-country-flag';
import {TouchableRipple} from 'react-native-paper';
import {StorageKeys} from './constants/StorageKeys';

export default function App() {
    //Select version of app. Light = with Ads, Premium = no ads and more functions
    const [currentVersion, setCurrentVersion] = useState(AppVersions.LIGHT);
    const [currentTheme, setCurrentTheme] = useState(
        Theme.selectTheme(AvailableThemes.LIGHT));
    const [currentLanguage, setCurrentLanguage] = useState(
        TranslationManager.getLanguageObject(AvailableLanguages.ENGLISH)
    );
    const [showPersonalAds, setShowPersonalAds] = useState(true);
    const [showIntroduction, setShowIntroduction] = useState(true);

    const splashScreenDuration = 2000; //ms

    let themeLoaded = false;
    let languageLoaded = false;
    let splashTimerDone = false;

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

    const AppStyle = createAppStyle(currentTheme);

    //load data at app start from storage or external sources like mount
    useEffect(() => {
        if (currentVersion === AppVersions.LIGHT) {
            mobileAds().initialize();
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
            themeLoaded = true;
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
                languageLoaded = true;
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
    });

    const changeLanguage = (selectedLanguage) => {
        AsyncStorage.setItem(StorageKeys.LANGUAGE_STORAGE_KEY,
            selectedLanguage).then(() => {
            setCurrentLanguage(
                TranslationManager.getLanguageObject(selectedLanguage));
        });
    };

    const slides = [
        {
            key: 's1',
            introduction: currentLanguage.introductionIntroduction,
            title: currentLanguage.introductionSlideHeadline1,
            iconName: 'refresh',
            description: currentLanguage.introductionSlideDescription1
        },
        {
            key: 's2',
            introduction: currentLanguage.introductionIntroduction,
            title: currentLanguage.introductionSlideHeadline2,
            iconName: 'organization',
            description: currentLanguage.introductionSlideDescription2
        },
        {
            key: 's3',
            introduction: currentLanguage.introductionIntroduction,
            title: currentLanguage.introductionSlideHeadline3,
            iconName: 'vector',
            description: currentLanguage.introductionSlideDescription3
        },
        {
            key: 's4',
            introduction: currentLanguage.introductionIntroduction,
            title: currentLanguage.introductionSlideHeadline4,
            iconName: 'lock',
            description: currentLanguage.introductionSlideDescription4
        },
        {
            key: 's5',
            introduction: currentLanguage.introductionIntroduction,
            title: currentLanguage.introductionSlideHeadline5,
            iconName: 'speech',
            description: currentLanguage.introductionSlideDescription5
        },
        {
            key: 's6',
            introduction: currentLanguage.introductionIntroduction,
            title: currentLanguage.introductionSlideHeadline6,
            iconName: 'rocket',
            description: currentLanguage.introductionSlideDescription6
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
                    <View style={AppStyle.introductionHeadlineWrapper}>
                        <Text
                            style={AppStyle.introductionIntroduction}>{item.introduction}</Text>
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
                </View>
            </SafeAreaView>
        );
    };

    const RenderNextButton = () => {
        return (
            <View>
                <Text
                    style={AppStyle.introductionText}>{currentLanguage.introductionNext}</Text>
            </View>
        );
    };

    const RenderFinishButton = () => {
        return (
            <View>
                <Text
                    style={AppStyle.introductionText}>{currentLanguage.introductionDone}</Text>
            </View>
        );
    };

    const RenderSkipButton = () => {
        return (
            <View>
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

    let [fontsLoaded] = useFonts({
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
    });

    setTimeout(function callback() {
        splashTimerDone = true;
    }, splashScreenDuration);

    //load fonts async and set ressources loaded
    const loadRessources = useCallback(async () => {
        //show splashscreen while not complete loaded
        await SplashScreen.preventAutoHideAsync();
        //fonts loaded, hide splashscreen
        if (themeLoaded && languageLoaded && fontsLoaded && splashTimerDone) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    //Render nothing till fonts loaded
    if (!fontsLoaded) {
        return null;
    } else if (fontsLoaded && showIntroduction) {
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
                activeDotStyle={AppStyle.activeDotStyle}
                dotStyle={AppStyle.inactiveDotStyle}
            />
        );
    } else {
        return (
            <Context.Provider
                value={{
                    theme: [currentTheme, setCurrentTheme],
                    language: [currentLanguage, setCurrentLanguage],
                    version: [currentVersion, setCurrentVersion],
                    personalAds: [showPersonalAds, setShowPersonalAds],
                    introduction: [showIntroduction, setShowIntroduction]
                }}
            >
                <NavigationContainer>
                    <StatusBar
                        backgroundColor={currentTheme.colors.onBackground}
                        style={currentTheme.colors.statusBarStyle}
                        translucent={false}
                    />
                    <BottomTabNavigator></BottomTabNavigator>
                </NavigationContainer>
            </Context.Provider>
        );
    }
}
