import React, { useContext, useEffect } from "react";
import {ScrollView, Text, View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {PaperProvider} from "react-native-paper";
import Header from '../components/Header';
import List from '../components/List';
import LoadingContent from "../components/LoadingContent";
import {AppVersions} from '../constants/AppVersions';
import {Context} from '../context/Context';
import {createListsScreenStyle} from './ListsScreenStyle';
import * as DatabaseAdapter from "../database/DatabaseAdapter";
import { useSQLiteContext } from "expo-sqlite";

export default ListsScreen = ({navigation, props}) => {
  const database = useSQLiteContext();
  const {theme, language, version, personalAds, lists} = useContext(Context);
  const [currentTheme] = theme;
  const [currentLanguage] = language;
  const [currentVersion] = version;
  const [showPersonalAds] = personalAds;
  const [currentLists, setCurrentLists] = lists;

  const loading = false;
  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9694787014775307/4284015587';

  const ListsScreenStyle = createListsScreenStyle(currentTheme);

  useEffect(() => {
    const loadLists = async () => {
      const lists = await DatabaseAdapter.getLists(database);
      setCurrentLists(lists);
    };
    const ignored = loadLists();
  }, []);

  return (
    <PaperProvider theme={currentTheme}>
      <View style={ListsScreenStyle.lists}>
        <Header screen={'lists'} title={currentLanguage.listsScreenTitle}
                modalIconAdd={'card-plus-outline'}></Header>
        {loading && (
          <LoadingContent loading={loading}></LoadingContent>
        )}
        {!loading && currentLists.length === 0 && (
          <View style={ListsScreenStyle.contentEmpty}>
            <Text
              style={ListsScreenStyle.contentEmptyText}>{currentLanguage.listsScreenEmptyText}</Text>
          </View>
        )}
        {!loading && currentLists.length > 0 && (
          <ScrollView showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}>
            {currentLists.map((item, index) => (
              <List
                key={item.id}
                data={item}
                lastElement={index === (currentLists.length - 1)}>
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
