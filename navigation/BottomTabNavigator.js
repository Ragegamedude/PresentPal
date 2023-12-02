import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from '../navigation/HomeNavigator';
import ConverterNavigator from '../navigation/ConverterNavigator';
import SettingsNavigator from './SettingsNavigator';
import { Context } from '../context/Context';
import { IconSettings } from '../constants/IconSettings';
import { TextSettings } from '../constants/TextSettings';
import { Text } from 'react-native';
import { StyleSettings } from '../constants/StyleSettings';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

export default BottomTabNavigator = () => {
	const { theme, language, version } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;

	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			initialRouteName={'HomeNavigator'}
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: currentTheme.primaryVariantColor,
					height: StyleSettings.tabHeight
				},
				tabBarLabelStyle: {
					fontSize: TextSettings.tabTextSize,
					fontFamily: TextSettings.defaultFontLight,
					color: currentTheme.secondaryColor
				},
				tabBarItemStyle: {
					marginTop: 8,
					marginBottom: 10
				}
			}}
		>
			<Tab.Screen
				name={'ConverterNavigator'}
				component={ConverterNavigator}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<MaterialCommunityIcons
							name={'refresh'}
							color={focused ? currentTheme.secondaryColor : currentTheme.secondaryVariantColor}
							size={IconSettings.tabNavigationIconSize}
						/>
					),
					tabBarLabel: ({ focused, color }) => (
						<Text
							style={{
								color: focused ? currentTheme.secondaryColor : currentTheme.secondaryVariantColor,
								fontFamily: TextSettings.defaultFontLight,
								fontSize: TextSettings.tabTextSize
							}}
						>
							{currentLanguage.secondScreenTitle}
						</Text>
					)
				}}
			/>
			<Tab.Screen
				name={'HomeNavigator'}
				component={HomeNavigator}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<MaterialCommunityIcons
							name={'home'}
							color={focused ? currentTheme.secondaryColor : currentTheme.secondaryVariantColor}
							size={IconSettings.tabNavigationIconSize}
						/>
					),
					tabBarLabel: ({ focused, color }) => (
						<Text
							style={{
								color: focused ? currentTheme.secondaryColor : currentTheme.secondaryVariantColor,
								fontFamily: TextSettings.defaultFontLight,
								fontSize: TextSettings.tabTextSize
							}}
						>
							{currentLanguage.homeScreenTitle}
						</Text>
					)
				}}
			/>
			<Tab.Screen
				name={'SettingsNavigator'}
				component={SettingsNavigator}
				options={{
					tabBarIcon: ({ focused, color }) => (
						<MaterialCommunityIcons
							name={'cog'}
							color={focused ? currentTheme.secondaryColor : currentTheme.secondaryVariantColor}
							size={IconSettings.tabNavigationIconSize}
						/>
					),
					tabBarLabel: ({ focused, color }) => (
						<Text
							style={{
								color: focused ? currentTheme.secondaryColor : currentTheme.secondaryVariantColor,
								fontFamily: TextSettings.defaultFontLight,
								fontSize: TextSettings.tabTextSize
							}}
						>
							{currentLanguage.settingsScreenTitle}
						</Text>
					)
				}}
			/>
		</Tab.Navigator>
	);
};
