import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useContext} from 'react';
import HomeNavigator from '../navigation/HomeNavigator';
import SettingsNavigator from './SettingsNavigator';
import {Context} from '../context/Context';
import {IconSettings} from '../constants/IconSettings';
import {TextSettings} from '../constants/TextSettings';
import {Text} from 'react-native';
import {StyleSettings} from '../constants/StyleSettings';
import Feather from 'react-native-vector-icons/Feather';
import ListsNavigator from "./ListsNavigator";
import GiftsNavigator from "./GiftsNavigator";

export default BottomTabNavigator = () => {
  const {theme, language, version} = useContext(Context);
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
            name={'GiftsNavigator'}
            component={GiftsNavigator}
            options={{
              tabBarIcon: ({focused, color}) => (
                  <Feather
                      name={'gift'}
                      color={focused ? currentTheme.secondaryColor
                          : currentTheme.secondaryVariantColor}
                      size={IconSettings.tabNavigationIconSize}
                  />
              ),
              tabBarLabel: ({focused, color}) => (
                  <Text
                      style={{
                        color: focused ? currentTheme.secondaryColor
                            : currentTheme.secondaryVariantColor,
                        fontFamily: TextSettings.defaultFontLight,
                        fontSize: TextSettings.tabTextSize
                      }}
                  >
                    {currentLanguage.giftsScreenTitle}
                  </Text>
              )
            }}
        />
        <Tab.Screen
            name={'ListsNavigator'}
            component={ListsNavigator}
            options={{
              tabBarIcon: ({focused, color}) => (
                  <Feather
                      name={'list'}
                      color={focused ? currentTheme.secondaryColor
                          : currentTheme.secondaryVariantColor}
                      size={IconSettings.tabNavigationIconSize}
                  />
              ),
              tabBarLabel: ({focused, color}) => (
                  <Text
                      style={{
                        color: focused ? currentTheme.secondaryColor
                            : currentTheme.secondaryVariantColor,
                        fontFamily: TextSettings.defaultFontLight,
                        fontSize: TextSettings.tabTextSize
                      }}
                  >
                    {currentLanguage.listsScreenTitle}
                  </Text>
              )
            }}
        />
        <Tab.Screen
            name={'HomeNavigator'}
            component={HomeNavigator}
            options={{
              tabBarIcon: ({focused, color}) => (
                  <Feather
                      name={'home'}
                      color={focused ? currentTheme.secondaryColor
                          : currentTheme.secondaryVariantColor}
                      size={IconSettings.tabNavigationIconSize}
                  />
              ),
              tabBarLabel: ({focused, color}) => (
                  <Text
                      style={{
                        color: focused ? currentTheme.secondaryColor
                            : currentTheme.secondaryVariantColor,
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
              tabBarIcon: ({focused, color}) => (
                  <Feather
                      name={'settings'}
                      color={focused ? currentTheme.secondaryColor
                          : currentTheme.secondaryVariantColor}
                      size={IconSettings.tabNavigationIconSize}
                  />
              ),
              tabBarLabel: ({focused, color}) => (
                  <Text
                      style={{
                        color: focused ? currentTheme.secondaryColor
                            : currentTheme.secondaryVariantColor,
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
