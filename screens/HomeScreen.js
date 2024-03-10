import { ScrollView, View } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { createHomeScreenStyle } from './HomeScreenStyle';
import { AppVersions } from '../constants/AppVersions';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import Header from '../components/Header';

export default HomeScreen = ({ navigation, props }) => {
	const { theme, language, version, personalAds } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;
	const [showPersonalAds, setShowPersonalAds] = personalAds;

	const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9694787014775307/1849423936';

	const HomeScreenStyle = createHomeScreenStyle(currentTheme);

	return (
		<View style={HomeScreenStyle.home}>
			<Header screen={'home'} title={currentLanguage.homeScreenTitle} currentTheme={currentTheme}></Header>
			<ScrollView>
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
