import {ScrollView, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {Context} from '../context/Context';
import {createListsScreenStyle} from './ListsScreenStyle';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {AppVersions} from '../constants/AppVersions';
import Header from '../components/Header';
import {FAB, PaperProvider, Portal} from "react-native-paper";

export default ListsScreen = ({navigation, props}) => {
  const {theme, language, version, personalAds} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;
  const [currentVersion, setCurrentVersion] = version;
  const [showPersonalAds, setShowPersonalAds] = personalAds;

  const adUnitId = __DEV__ ? TestIds.BANNER
      : 'ca-app-pub-9694787014775307/4284015587';

  const ListsScreenStyle = createListsScreenStyle(currentTheme);

  const [fabOpen, setFabOpen] = useState(true);
  const toggleFabOpen = () => setFabOpen(!fabOpen);

  return (
      <PaperProvider>
      <View style={ListsScreenStyle.lists}>
        <Header screen={'settings'} title={currentLanguage.listsScreenTitle}
                currentTheme={currentTheme}></Header>
        <ScrollView>
            <Portal>
              <FAB.Group
                  open={fabOpen}
                  visible={true}
                  icon={fabOpen ? 'close' : 'plus'}
                  actions={[
                    {icon: 'plus', onPress: () => console.log('Pressed add')},
                    {
                      icon: 'star',
                      label: 'Star',
                      onPress: () => console.log('Pressed star'),
                    },
                    {
                      icon: 'email',
                      label: 'Email',
                      onPress: () => console.log('Pressed email'),
                    },
                    {
                      icon: 'bell',
                      label: 'Remind',
                      onPress: () => console.log('Pressed notifications'),
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
