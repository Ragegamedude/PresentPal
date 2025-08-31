import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { Context } from '../context/Context';
import ConverterScreen from '../screens/ListsScreen';
import ListDetailScreen from "../screens/ListDetailScreen";
import { TextSettings } from '../constants/TextSettings';
import {Screens} from "../constants/Screens";

export default ListsNavigator = ({ navigation }) => {
	const { theme, language, version } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;

	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name={Screens.LISTS}
				component={ListsScreen}
				options={{
					title: currentLanguage.listsScreenTitle,
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
				name={Screens.LISTS_DETAILS}
				component={ListDetailScreen}
				options={{
					title: currentLanguage.listsDetailScreenTitle,
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
