import { ScrollView, View } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { createConverterScreenStyle } from './ConverterScreenStyle';
import ConverterSection, { AvailableConverterActions } from '../components/ConverterSection';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { AppVersions } from '../constants/AppVersions';
import HeadlineSection from '../components/HeadlineSection';
import Header from '../components/Header';

export default ConverterScreen = ({ navigation, props }) => {
	const { theme, language, version, personalAds } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;
	const [showPersonalAds, setShowPersonalAds] = personalAds;

	const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9694787014775307/4284015587';

	const ConverterScreenStyle = createConverterScreenStyle(currentTheme);

	return (
		<View style={ConverterScreenStyle.converter}>
			<Header screen={'settings'} title={currentLanguage.secondScreenTitle} currentTheme={currentTheme}></Header>
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
