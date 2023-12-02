import { ScrollView, View } from 'react-native';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { createConverterScreenStyle } from './ConverterScreenStyle';
import ConverterSection, { AvailableConverterActions } from '../components/ConverterSection';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { AppVersions } from '../constants/AppVersions';
import HeadlineSection from '../components/HeadlineSection';

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
			<ScrollView>
				<HeadlineSection description={currentLanguage.converterHeadlinePdf}></HeadlineSection>
				<ConverterSection
					action={AvailableConverterActions.MERGE_PDF}
					iconName={'organization'}
					headline={currentLanguage.converterFunctionTitleMerge}
					description={currentLanguage.converterFunctionDescriptionMerge}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.SPLIT_PDF}
					iconName={'vector'}
					headline={currentLanguage.converterFunctionTitleSplit}
					description={currentLanguage.converterFunctionDescriptionSplit}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.COMPRESS_PDF}
					iconName={'grid'}
					headline={currentLanguage.converterFunctionTitleCompress}
					description={currentLanguage.converterFunctionDescriptionCompress}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.ZIP_PDF}
					iconName={'size-actual'}
					headline={currentLanguage.converterFunctionTitleZipPdf}
					description={currentLanguage.converterFunctionDescriptionZipPdf}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.EXTRACT_IMAGES}
					iconName={'share-alt'}
					headline={currentLanguage.converterFunctionTitleExtractImages}
					description={currentLanguage.converterFunctionDescriptionExtractImages}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.REMOVE_SITE}
					iconName={'trash'}
					headline={currentLanguage.converterFunctionTitleRemoveSite}
					description={currentLanguage.converterFunctionDescriptionRemoveSite}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.EXTRACT_SITE}
					iconName={'logout'}
					headline={currentLanguage.converterFunctionTitleExtractSite}
					description={currentLanguage.converterFunctionDescriptionExtractSite}
					lastElement={false}
				></ConverterSection>
				<HeadlineSection description={currentLanguage.converterHeadlineSecurity}></HeadlineSection>
				<ConverterSection
					action={AvailableConverterActions.SET_PASSWORD}
					iconName={'lock'}
					headline={currentLanguage.converterFunctionTitleSetPassword}
					description={currentLanguage.converterFunctionDescriptionSetPassword}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.REMOVE_PASSWORD}
					iconName={'lock-open'}
					headline={currentLanguage.converterFunctionTitleRemovePassword}
					description={currentLanguage.converterFunctionDescriptionRemovePassword}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.ADD_WATERMARK}
					iconName={'tag'}
					headline={currentLanguage.converterFunctionTitleAddWatermark}
					description={currentLanguage.converterFunctionDescriptionAddWatermark}
					lastElement={false}
				></ConverterSection>
				<HeadlineSection description={currentLanguage.converterHeadlineConvertPDF}></HeadlineSection>
				<ConverterSection
					action={AvailableConverterActions.CONVERT_PDF_IMAGE}
					iconName={'picture'}
					headline={currentLanguage.converterFunctionTitleConvertJpg}
					description={currentLanguage.converterFunctionDescriptionConvertJpg}
					lastElement={true}
				></ConverterSection>
				{/*				<ConverterSection
					action={AvailableConverterActions.CONVERT_PDF_EPUB}
					iconName={'book-open'}
					headline={currentLanguage.converterFunctionTitleConvertEpub}
					description={currentLanguage.converterFunctionDescriptionConvertEpub}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.CONVERT_PDF_WORD}
					iconName={'doc'}
					headline={currentLanguage.converterFunctionTitleConvertWord}
					description={currentLanguage.converterFunctionDescriptionConvertWord}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.CONVERT_PDF_POWER}
					iconName={'pie-chart'}
					headline={currentLanguage.converterFunctionTitleConvertPower}
					description={currentLanguage.converterFunctionDescriptionConvertPower}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.CONVERT_PDF_EXCEL}
					iconName={'event'}
					headline={currentLanguage.converterFunctionTitleConvertExcel}
					description={currentLanguage.converterFunctionDescriptionConvertExcel}
					lastElement={false}
				></ConverterSection>
				<HeadlineSection description={currentLanguage.converterHeadlineConvertToPDF}></HeadlineSection>
				<ConverterSection
					action={AvailableConverterActions.CONVERT_IMAGE_PDF}
					iconName={'picture'}
					headline={currentLanguage.converterFunctionTitleConvertJpgPdf}
					description={currentLanguage.converterFunctionDescriptionConvertJpgPdf}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.CONVERT_EPUB_PDF}
					iconName={'book-open'}
					headline={currentLanguage.converterFunctionTitleConvertEpubPdf}
					description={currentLanguage.converterFunctionDescriptionConvertEpubPdf}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.CONVERT_WORD_PDF}
					iconName={'doc'}
					headline={currentLanguage.converterFunctionTitleConvertWordPdf}
					description={currentLanguage.converterFunctionDescriptionConvertWordPdf}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.CONVERT_POWER_PDF}
					iconName={'pie-chart'}
					headline={currentLanguage.converterFunctionTitleConvertPowerPdf}
					description={currentLanguage.converterFunctionDescriptionConvertPowerPdf}
					lastElement={false}
				></ConverterSection>
				<ConverterSection
					action={AvailableConverterActions.CONVERT_EXCEL_PDF}
					iconName={'event'}
					headline={currentLanguage.converterFunctionTitleConvertExcelPdf}
					description={currentLanguage.converterFunctionDescriptionConvertExcelPdf}
					lastElement={true}
				></ConverterSection>*/}
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
