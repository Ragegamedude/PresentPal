import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { Context } from '../context/Context';
import ConverterScreen from '../screens/ConverterScreen';
import { TextSettings } from '../constants/TextSettings';

export default ConverterNavigator = ({ navigation }) => {
	const { theme, language, version } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;

	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name={'ConverterScreen'}
				component={ConverterScreen}
				options={{
					title: currentLanguage.secondScreenTitle,
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
