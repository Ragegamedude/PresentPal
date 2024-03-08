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
    id: '1',
    favorite: false,
    headline: 'Headline',
    description: 'Lorem ipsum dolor sit amet,'
        + '            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
        + '            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero'
        + '            eos et accusam et',
    image: require('../assets/avatars/2.png'),
    date: '02.01.2023',
    gifts: [
      {name: 'test1'},
      {name: 'test2'}
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
            <List currentTheme={currentTheme} currentLanguage={currentLanguage} data={testData}></List>
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
