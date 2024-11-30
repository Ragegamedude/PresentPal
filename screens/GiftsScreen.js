import {ScrollView, View} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/Context';
import {createGiftsScreenStyle} from './GiftsScreenStyle';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {AppVersions} from '../constants/AppVersions';
import Header from '../components/Header';
import Information from "../components/Information";
import {StorageKeys} from "../constants/StorageKeys";
import Chip from "../components/Chip";
import {TouchableRipple} from "react-native-paper";

export default GiftsScreen = ({navigation, props}) => {
  const {
    theme,
    language,
    version,
    personalAds,
    hiddenGiftInformationValue
  } = useContext(Context);
  const [currentTheme] = theme;
  const [currentLanguage] = language;
  const [currentVersion] = version;
  const [showPersonalAds] = personalAds;
  const [hiddenGiftInformation, setHiddenGiftInformation] = hiddenGiftInformationValue

  const adUnitId = __DEV__ ? TestIds.BANNER
      : 'ca-app-pub-9694787014775307/4284015587';

  const GiftsScreenStyle = createGiftsScreenStyle(currentTheme);
  return (
      <View style={GiftsScreenStyle.gifts}>
        <Header screen={'gifts'} title={currentLanguage.giftsScreenTitle}
                currentTheme={currentTheme}></Header>
        <ScrollView style={GiftsScreenStyle.giftsWrapper}>
          {!hiddenGiftInformation && (<Information
              informationKey={StorageKeys.GIFT_INFORMATION_HIDDEN_KEY}
              headline={currentLanguage.giftsInformationHeadline}
              text={currentLanguage.giftsInformationText}
              hide={setHiddenGiftInformation}
          ></Information>)}
          <View style={GiftsScreenStyle.chipWrapper}>
            <View style={GiftsScreenStyle.chips1}>
                <Chip image={require('../assets/avatars/1.png')} text={currentLanguage.giftsChip1}></Chip>
                <Chip image={require('../assets/avatars/3.png')} text={currentLanguage.giftsChip3}></Chip>
            </View>
            <View style={GiftsScreenStyle.chips2}>
              <Chip image={require('../assets/avatars/1.png')} text={currentLanguage.giftsChip2}></Chip>
              <Chip image={require('../assets/avatars/2.png')} text={currentLanguage.giftsChip4}></Chip>
            </View>
          </View>
          <View style={GiftsScreenStyle.chipWrapper}>
          </View>
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
