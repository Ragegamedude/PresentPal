import {StyleSheet} from 'react-native';
import {StyleSettings} from './constants/StyleSettings';
import {TextSettings} from './constants/TextSettings';
import {IconSettings} from "./constants/IconSettings";

export default createAppStyle = (currentTheme) =>
    StyleSheet.create({
      introductionWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: currentTheme.colors.background
      },
      introductionLanguageDescriptionWrapper: {
        marginHorizontal: StyleSettings.defaultMargin,
        marginTop: StyleSettings.defaultMargin * 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      },
      introductionLanguageDescriptionText: {
        color: currentTheme.colors.secondary,
        fontFamily: TextSettings.defaultFontRegular,
        fontSize: TextSettings.textBigSize,
        textAlign: "center"
      },
      introductionLanguageWrapper: {
        marginHorizontal: StyleSettings.defaultMargin,
        marginTop: StyleSettings.defaultMargin,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      },
      introductionLanguage: {
        marginHorizontal: StyleSettings.defaultPadding
      },
      introductionHeadlineWrapper: {
        marginHorizontal: StyleSettings.defaultMargin,
        marginTop: StyleSettings.defaultMargin * 3,
        alignItems: 'center'
      },
      introductionHeadline: {
        color: currentTheme.colors.secondary,
        fontFamily: TextSettings.defaultFontRegular,
        fontSize: TextSettings.textIntroductionHeadlineSize
      },
      introductionIntroduction: {
        color: currentTheme.colors.secondary,
        fontFamily: TextSettings.defaultFontRegular,
        fontSize: TextSettings.textBigSize
      },
      introductionContentWrapper: {
        marginHorizontal: StyleSettings.defaultMargin,
        marginVertical: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
      introductionLanguageFlag: {
        borderRadius: IconSettings.countryFlagBorderRadius
      },
      introductionDescriptionWrapper: {
        marginHorizontal: StyleSettings.defaultMargin,
        justifyContent: 'center',
        alignItems: 'center'
      },
      introductionDescription: {
        color: currentTheme.colors.secondary,
        fontFamily: TextSettings.defaultFontRegular,
        fontSize: TextSettings.textDefaultSize,
        textAlign: 'center'
      },
      introductionText: {
        color: currentTheme.colors.secondary,
        fontFamily: TextSettings.defaultFontRegular,
        fontSize: TextSettings.textSmallestSize,
        marginTop: 2,
      },
      activeDotStyle: {
        backgroundColor: currentTheme.colors.primary
      },
      inactiveDotStyle: {
        backgroundColor: currentTheme.colors.secondary
      },
      introductionButton:{
        justifyContent: "center",
        alignItems: "center"
      }
    });
