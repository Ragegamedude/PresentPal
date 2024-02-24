import { ScrollView, View } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/Context';
import {createListsScreenStyle} from './ListsScreenStyle';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { AppVersions } from '../constants/AppVersions';
import Header from '../components/Header';

export default ListsScreen = ({ navigation, props }) => {
	const { theme, language, version, personalAds } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;
	const [showPersonalAds, setShowPersonalAds] = personalAds;

	const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9694787014775307/4284015587';

	const ListsScreenStyle = createListsScreenStyle(currentTheme);

	return (
		<View style={ListsScreenStyle.lists}>
			<Header screen={'settings'} title={currentLanguage.listsScreenTitle} currentTheme={currentTheme}></Header>
			<ScrollView></ScrollView>
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
