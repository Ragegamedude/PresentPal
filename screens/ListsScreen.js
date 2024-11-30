import {ScrollView, View} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/Context';
import {createListsScreenStyle} from './ListsScreenStyle';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {AppVersions} from '../constants/AppVersions';
import Header from '../components/Header';
import List from '../components/List';
import {PaperProvider} from "react-native-paper";
import {GIFT_STATUS} from "../constants/GiftsEnums";
import LoadingContent from "../components/LoadingContent";

export default ListsScreen = ({navigation, props}) => {
  const {theme, language, version, personalAds} = useContext(Context);
  const [currentTheme] = theme;
  const [currentLanguage] = language;
  const [currentVersion] = version;
  const [showPersonalAds] = personalAds;

  const loading = false;

  const testData = {
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
        date: '02.01.2023',
        event: 'Birthday',
        gifts: [
          {name: 'test1', value: 25.01, status: GIFT_STATUS.COMPLETED},
          {name: 'test2', value: 30.03, status: GIFT_STATUS.UNCOMPLETED},
          {name: 'test2', value: 40.04, status: GIFT_STATUS.COMPLETED}
        ]
      },
      {
        id: '2',
        favorite: true,
        headline: 'Headline #2',
        description: '#2 Lorem ipsum dolor sit amet, '
            + 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt '
            + 'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero'
            + 'eos et accusam et',
        image: require('../assets/avatars/4.png'),
        date: '12.01.2023',
        event: 'Birthday',
        gifts: [
          {name: 'test1', value: 15.01, status: GIFT_STATUS.COMPLETED},
        ]
      },
      {
        id: '3',
        favorite: true,
        headline: 'Headline #3',
        description: '#2 Lorem ipsum dolor sit amet, '
            + 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt '
            + 'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero'
            + 'eos et accusam et',
        image: require('../assets/avatars/5.png'),
        date: '15.01.2023',
        event: 'Birthday',
        gifts: [
          {name: 'test1', value: 15.01, status: GIFT_STATUS.COMPLETED},
          {name: 'test2', value: 10.08, status: GIFT_STATUS.UNCOMPLETED},
          {name: 'test3', value: 10.08, status: GIFT_STATUS.UNCOMPLETED},
          {name: 'test4', value: 10.08, status: GIFT_STATUS.UNCOMPLETED},
          {name: 'test5', value: 1000.08, status: GIFT_STATUS.UNCOMPLETED},
        ]
      },
      {
        id: '4',
        favorite: false,
        headline: 'Headline #4',
        description: '#2 Lorem ipsum dolor sit amet, '
            + 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt '
            + 'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero'
            + 'eos et accusam et',
        image: require('../assets/avatars/6.png'),
        date: '19.01.2023',
        event: 'Birthday',
        gifts: [
          {name: 'test1', value: 12.01, status: GIFT_STATUS.COMPLETED},
          {name: 'test2', value: 11.06, status: GIFT_STATUS.UNCOMPLETED},
          {name: 'test3', value: 29.07, status: GIFT_STATUS.COMPLETED}
        ]
      },
      {
        id: '5',
        favorite: false,
        headline: 'Headline #5',
        description: '#5 Lorem ipsum dolor sit amet, '
            + 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt '
            + 'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero'
            + 'eos et accusam et',
        image: require('../assets/avatars/7.png'),
        date: '23.06.2023',
        event: 'Birthday',
        gifts: [
          {name: 'test1', value: 18.01, status: GIFT_STATUS.COMPLETED},
          {name: 'test2', value: 11.05, status: GIFT_STATUS.UNCOMPLETED},
          {name: 'test1', value: 18.01, status: GIFT_STATUS.COMPLETED},
          {name: 'test2', value: 11.05, status: GIFT_STATUS.UNCOMPLETED}
        ]
      }
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
          {!loading && (
              <ScrollView>
                <List data={testData.lists[0]} lastElement={false}></List>
                <List data={testData.lists[1]} lastElement={false}></List>
                <List data={testData.lists[2]} lastElement={false}></List>
                <List data={testData.lists[3]} lastElement={false}></List>
                <List data={testData.lists[4]} lastElement={true}></List>
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
