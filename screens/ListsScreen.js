import {ScrollView, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {Context} from '../context/Context';
import {createListsScreenStyle} from './ListsScreenStyle';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {AppVersions} from '../constants/AppVersions';
import Header from '../components/Header';
import List from '../components/List';
import {FAB, PaperProvider, Portal} from "react-native-paper";
import {useFocusEffect} from "@react-navigation/native";
import {GIFT_STATUS} from "../constants/GiftsEnums";

export default ListsScreen = ({navigation, props}) => {
  const {theme, language, version, personalAds} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;
  const [currentVersion, setCurrentVersion] = version;
  const [showPersonalAds, setShowPersonalAds] = personalAds;
  const [fabOpen, setFabOpen] = useState(false);

  useFocusEffect(
      React.useCallback(() => {
        // Do something when the screen is focused
        return () => {
          //Close the fab if change screen
          setFabOpen(false)
        };
      }, [])
  );

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
        gifts: [
          {name: 'test1', value: 15.01, status: GIFT_STATUS.COMPLETED},
          {name: 'test2', value: 10.03, status: GIFT_STATUS.UNCOMPLETED},
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

  const toggleFabOpen = () => setFabOpen(!fabOpen);
  return (
      <PaperProvider theme={currentTheme}>
        <View style={ListsScreenStyle.lists}>
          <Header screen={'settings'} title={currentLanguage.listsScreenTitle}
                  currentTheme={currentTheme}></Header>
          <ScrollView>
            <List currentTheme={currentTheme} currentLanguage={currentLanguage}
                  data={testData.lists[0]} lastElement={false}></List>
            <List currentTheme={currentTheme} currentLanguage={currentLanguage}
                  data={testData.lists[1]} lastElement={false}></List>
            <List currentTheme={currentTheme} currentLanguage={currentLanguage}
                  data={testData.lists[2]} lastElement={false}></List>
            <List currentTheme={currentTheme} currentLanguage={currentLanguage}
                  data={testData.lists[3]} lastElement={false}></List>
            <List currentTheme={currentTheme} currentLanguage={currentLanguage}
                  data={testData.lists[4]} lastElement={true}></List>
            <Portal>
              <FAB.Group
                  open={fabOpen}
                  visible={true}
                  icon={fabOpen ? 'close' : 'plus'}
                  backdropColor={currentTheme.colors.backdrop}
                  actions={[{
                    icon: 'plus', onPress: () => console.log('Pressed add'),
                    label: currentLanguage.listsAddList,
                    labelStyle: ListsScreenStyle.fabActionLabel
                  },
                  ]}
                  onStateChange={toggleFabOpen}
                  onPress={() => {
                    if (fabOpen) {
                      // do something if the speed dial is open
                    }
                  }}
              />
            </Portal>
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
      </PaperProvider>
  );
};
