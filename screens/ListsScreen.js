import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {PaperProvider} from "react-native-paper";
import Header from '../components/Header';
import List from '../components/List';
import LoadingContent from "../components/LoadingContent";
import {AppVersions} from '../constants/AppVersions';
import {GIFT_STATUS} from "../constants/GiftsEnums";
import {Context} from '../context/Context';
import {createListsScreenStyle} from './ListsScreenStyle';

export default ListsScreen = ({navigation, props}) => {
  const {theme, language, version, personalAds} = useContext(Context);
  const [currentTheme] = theme;
  const [currentLanguage] = language;
  const [currentVersion] = version;
  const [showPersonalAds] = personalAds;

  const loading = false;

  const listData = {
    lists: [
      {
        id: '1',
        favorite: false,
        headline: 'Headline #1',
        description: '#1 Lorem ipsum dolor sit amet, '
            + 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt '
            + 'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero'
            + 'eos et accusam et',
        image: require('../assets/avatars/2.png'),
        event_date: '02.01.2023',
        event: 'Birthday',
        gifts: [
          {name: 'test1', value: 25.01, status: GIFT_STATUS.COMPLETED},
          {name: 'test2', value: 30.03, status: GIFT_STATUS.UNCOMPLETED},
          {name: 'test2', value: 40.04, status: GIFT_STATUS.COMPLETED}
        ]
      },
    ]
  }

  const adUnitId = __DEV__ ? TestIds.BANNER
      : 'ca-app-pub-9694787014775307/4284015587';

  const ListsScreenStyle = createListsScreenStyle(currentTheme);

  return (
      <PaperProvider theme={currentTheme}>
        <View style={ListsScreenStyle.lists}>
          <Header screen={'lists'} title={currentLanguage.listsScreenTitle}
                  modalIconAdd={'card-plus-outline'}></Header>
          {loading && (
              <LoadingContent loading={loading}></LoadingContent>
          )}
          {!loading && listData.lists.length === 0 && (
              <View style={ListsScreenStyle.contentEmpty}>
                <Text
                    style={ListsScreenStyle.contentEmptyText}>{currentLanguage.listsScreenEmptyText}</Text>
              </View>
          )}
          {!loading && listData.lists.length > 0 && (
              <ScrollView showsHorizontalScrollIndicator={false}
                          showsVerticalScrollIndicator={false}>
                {listData.lists.map((item, index) => (
                    <List
                        key={item.id}
                        data={item}
                        lastElement={index === (listData.lists.length - 1)}>
                    </List>
                ))}
              </ScrollView>
          )}
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
      </PaperProvider>
  );
};
