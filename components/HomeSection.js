import { Text, View } from 'react-native';
import { IconSettings } from '../constants/IconSettings';
import { createHomeSectionStyle } from './HomeSectionStyle';
import { Context } from '../context/Context';
import { useContext, useState } from 'react';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { TouchableRipple } from 'react-native-paper';

export default HomeSection = (props) => {
	const { theme, language } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [accordionOpen, setAccordionOpen] = useState(false);

	const HomeSectionStyle = createHomeSectionStyle(currentTheme);

	return (
		<TouchableRipple
			rippleColor={currentTheme.rippleEffectColor}
			borderless={true}
			style={props.lastElement ? HomeSectionStyle.homeSectionContainer2 : HomeSectionStyle.homeSectionContainer}
			onPress={() => setAccordionOpen(!accordionOpen)}
		>
			<View style={HomeSectionStyle.homeSection}>
				<View style={HomeSectionStyle.homeSectionLeftContainer}>
					<View style={HomeSectionStyle.homeSectionHeaderIcon}>
						<SimpleLineIcon
							name={props.iconName}
							color={currentTheme.secondaryColor}
							size={IconSettings.settingsSectionIconSize}
						></SimpleLineIcon>
					</View>
					<Text style={HomeSectionStyle.homeSectionLeftUser}>{props.sectionUser}</Text>
					<Text style={HomeSectionStyle.homeSectionLeftDate}>{props.date}</Text>
				</View>
				<View style={HomeSectionStyle.homeSectionDividerWrapper}>
					<View style={HomeSectionStyle.homeSectionDivider}></View>
				</View>
				<View style={HomeSectionStyle.homeSectionRightContainer}>
					<View style={HomeSectionStyle.homeSectionRightContent}>
						<Text style={HomeSectionStyle.homeSectionRightHeaderCategoryText}>{props.sectionTopic}</Text>
						<Text style={HomeSectionStyle.homeSectionRightHeaderTitleText}>{props.sectionTitle}</Text>
						{accordionOpen && (
							<Text style={HomeSectionStyle.homeSectionRightHeaderSubTitleText}>{props.sectionMessage}</Text>
						)}
						{!accordionOpen && (
							<View>
								<Text numberOfLines={1} style={HomeSectionStyle.homeSectionRightHeaderSubTitleText}>
									{props.sectionMessage}
								</Text>
								<Text style={HomeSectionStyle.homeSectionRightReadMore}>{currentLanguage.homeReadMore}</Text>
							</View>
						)}
					</View>
				</View>
			</View>
		</TouchableRipple>
	);
};
