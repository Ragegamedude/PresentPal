import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { TextSettings } from '../constants/TextSettings';
import GiftsScreen from "../screens/GiftsScreen";
import CategoryScreen from "../screens/CategoryScreen";
import {Screens} from "../constants/Screens";

export default GiftsNavigator = ({ navigation }) => {
	const { theme, language, version } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;

	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name={Screens.GIFTS}
				component={GiftsScreen}
				options={{
					title: currentLanguage.giftsScreenTitle,
					headerShown: false,
					headerStyle: {
						backgroundColor: currentTheme.primaryColor
					},
					headerTitleStyle: {
						color: currentTheme.secondaryColor,
						fontSize: TextSettings.textHeaderSize,
						fontFamily: TextSettings.defaultFontBold
					}
				}}
			/>
			<Stack.Screen
					name={Screens.CATEGORY}
					component={CategoryScreen}
					options={{
						title: currentLanguage.giftsScreenTitle,
						headerShown: false,
						headerStyle: {
							backgroundColor: currentTheme.primaryColor
						},
						headerTitleStyle: {
							color: currentTheme.secondaryColor,
							fontSize: TextSettings.textHeaderSize,
							fontFamily: TextSettings.defaultFontBold
						}
					}}
			/>
		</Stack.Navigator>
	);
};
