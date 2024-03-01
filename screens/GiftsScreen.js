import {ScrollView, View} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/Context';
import {createGiftsScreenStyle} from './GiftsScreenStyle';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {AppVersions} from '../constants/AppVersions';
import Header from '../components/Header';
import GiftFinder from "../components/GiftFinder";

export default GiftsScreen = ({navigation, props}) => {
    const {theme, language, version, personalAds} = useContext(Context);
    const [currentTheme, setCurrentTheme] = theme;
    const [currentLanguage, setCurrentLanguage] = language;
    const [currentVersion, setCurrentVersion] = version;
    const [showPersonalAds, setShowPersonalAds] = personalAds;

    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9694787014775307/4284015587';

    const GiftsScreenStyle = createGiftsScreenStyle(currentTheme);

    return (
        <View style={GiftsScreenStyle.gifts}>
            <Header screen={'settings'} title={currentLanguage.giftsScreenTitle} currentTheme={currentTheme}></Header>
            <ScrollView style={GiftsScreenStyle.giftsWrapper}>
                <GiftFinder currentTheme={currentTheme}></GiftFinder>
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
