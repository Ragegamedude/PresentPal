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
import {Categories} from "../constants/Categories";

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

  const openGiftCategory = (category, title) => {
    navigation.navigate("CategoryScreen",{
      title,
    })
  }

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
              <Chip image={require('../assets/categories/birthday.png')}
                    text={currentLanguage.giftsCategoryBirthday}
                    action={() => openGiftCategory(Categories.BIRTHDAY,currentLanguage.giftsCategoryBirthday)}></Chip>
              <Chip image={require('../assets/categories/valentine.png')}
                    text={currentLanguage.giftsCategoryValentine}
                    action={() => openGiftCategory(
                        Categories.VALENTINE)}></Chip>
            </View>
            <View style={GiftsScreenStyle.chips2}>
              <Chip image={require('../assets/categories/christmas.png')}
                    text={currentLanguage.giftsCategoryChristmas}
                    action={() => openGiftCategory(
                        Categories.CHRISTMAS)}></Chip>
              <Chip image={require('../assets/categories/wedding.png')}
                    text={currentLanguage.giftsCategoryWedding}
                    action={() => openGiftCategory(
                        Categories.WEDDING)}></Chip>
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
