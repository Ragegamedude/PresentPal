import { ScrollView, View } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { createHomeScreenStyle } from './HomeScreenStyle';
import HomeSection from '../components/HomeSection';
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
			<Header title={currentLanguage.homeScreenTitle} currentTheme={currentTheme}></Header>
			<ScrollView>
				<HomeSection
					date={currentLanguage.homeSectionDate5}
					sectionUser={currentLanguage.homeSectionUser}
					sectionTopic={currentLanguage.homeSectionTopic5}
					sectionTitle={currentLanguage.homeSectionTitle5}
					sectionMessage={currentLanguage.homeSectionMessage5}
					iconName="feed"
					lastElement={false}
				></HomeSection>
				<HomeSection
					date={currentLanguage.homeSectionDate4}
					sectionUser={currentLanguage.homeSectionUser}
					sectionTopic={currentLanguage.homeSectionTopic4}
					sectionTitle={currentLanguage.homeSectionTitle4}
					sectionMessage={currentLanguage.homeSectionMessage4}
					iconName="feed"
					lastElement={false}
				></HomeSection>
				<HomeSection
					date={currentLanguage.homeSectionDate3}
					sectionUser={currentLanguage.homeSectionUser}
					sectionTopic={currentLanguage.homeSectionTopic3}
					sectionTitle={currentLanguage.homeSectionTitle3}
					sectionMessage={currentLanguage.homeSectionMessage3}
					iconName="feed"
					lastElement={false}
				></HomeSection>
				<HomeSection
					date={currentLanguage.homeSectionDate2}
					sectionUser={currentLanguage.homeSectionUser}
					sectionTopic={currentLanguage.homeSectionTopic2}
					sectionTitle={currentLanguage.homeSectionTitle2}
					sectionMessage={currentLanguage.homeSectionMessage2}
					iconName="feed"
					lastElement={false}
				></HomeSection>
				<HomeSection
					date={currentLanguage.homeSectionDate1}
					sectionUser={currentLanguage.homeSectionUser}
					sectionTopic={currentLanguage.homeSectionTopic1}
					sectionTitle={currentLanguage.homeSectionTitle1}
					sectionMessage={currentLanguage.homeSectionMessage1}
					iconName="book-open"
					lastElement={true}
				></HomeSection>
			</ScrollView>
			{currentVersion === AppVersions.FREE && (
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
