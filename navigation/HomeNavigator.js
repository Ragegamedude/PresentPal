import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Context } from "../context/Context";
import HomeScreen from "../screens/HomeScreen";
import { TextSettings } from "../constants/TextSettings";
import { Screens } from "../constants/Screens";

export default HomeNavigator = ({ navigation }) => {
  const { theme, language, version } = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{
          title: currentLanguage.homeScreenTitle,
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
