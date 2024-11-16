import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useContext} from 'react';
import {BottomNavigation, Text} from "react-native-paper";
import {Context} from '../context/Context';
import {CommonActions} from '@react-navigation/native';
import GiftsNavigator from "./GiftsNavigator";
import ListsNavigator from "./ListsNavigator";
import HomeNavigator from "./HomeNavigator";
import SettingsNavigator from "./SettingsNavigator";
import Feather from "react-native-vector-icons/Feather";
import {StyleSettings} from "../constants/StyleSettings";
import {TextSettings} from "../constants/TextSettings";
import {View} from "react-native";

export default BottomTabNavigator = () => {
  const {theme, language, version} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;
  const [currentVersion, setCurrentVersion] = version;

  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
          initialRouteName={"Home"}
          screenOptions={{
            headerShown: false,
          }}
          tabBar={({navigation, state, descriptors, insets}) => (
              <BottomNavigation.Bar
                  style={{
                    borderColor: currentTheme.colors.primary,
                    borderTopWidth: StyleSettings.defaultBorderWidth,
                    backgroundColor: currentTheme.colors.onBackground
                  }}
                  shifting={false}
                  navigationState={state}
                  theme={currentTheme}
                  onTabPress={({route, preventDefault}) => {
                    const event = navigation.emit({
                      type: 'tabPress',
                      target: route.key,
                      canPreventDefault: true,
                    });

                    if (event.defaultPrevented) {
                      preventDefault();
                    } else {
                      navigation.dispatch({
                        ...CommonActions.navigate(route.name, route.params),
                        target: state.key,
                      });
                    }
                  }}
                  renderIcon={({route, focused, color}) => {
                    const {options} = descriptors[route.key];
                    if (options.tabBarIcon) {
                      return options.tabBarIcon({focused, color, size: 24});
                    }

                    return null;
                  }}
                  renderLabel={({route, focused, color}) => {
                    const {options} = descriptors[route.key];
                    if (options.tabBarIcon) {
                      return <View style={{minHeight: 24}}>
                        <Text style={{
                        textAlign: 'center',
                        fontSize: TextSettings.tabTextSize,
                        fontFamily: TextSettings.defaultFontRegular,
                          color: color,
                      }
                      }>
                        {options.tabBarLabel}
                      </Text>
                      </View>
                    }

                    return null;
                  }}
                  getLabelText={({route}) => {
                    const {options} = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.title;

                    return label;
                  }}
              />
          )}
      >
        <Tab.Screen
            name="Gifts"
            component={GiftsNavigator}
            options={{
              tabBarLabel: currentLanguage.giftsScreenTitle,
              tabBarIcon: ({color, size}) => {
                return <Feather name="gift" size={size} color={color}/>;
              },
            }}
        />
        <Tab.Screen
            name="Lists"
            component={ListsNavigator}
            options={{
              tabBarLabel: currentLanguage.listsScreenTitle,
              tabBarIcon: ({color, size}) => {
                return <Feather name="list" size={size} color={color}/>;
              },
            }}
        />
        <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              tabBarLabel: currentLanguage.homeScreenTitle,
              tabBarIcon: ({color, size}) => {
                return <Feather name="home" size={size} color={color}/>;
              },
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingsNavigator}
            options={{
              tabBarLabel: currentLanguage.settingsScreenTitle,
              tabBarIcon: ({color, size}) => {
                return <Feather name="settings" size={size} color={color}/>;
              },
            }}
        />
      </Tab.Navigator>

      // <Tab.Navigator
      //     initialRouteName={'HomeNavigator'}
      //     screenOptions={{
      //       headerShown: false,
      //       tabBarStyle: {
      //         backgroundColor: currentTheme.primaryVariantColor,
      //         height: StyleSettings.tabHeight
      //       },
      //       tabBarLabelStyle: {
      //         fontSize: TextSettings.tabTextSize,
      //         fontFamily: TextSettings.defaultFontLight,
      //         color: currentTheme.secondaryColor
      //       },
      //       tabBarItemStyle: {
      //         marginTop: 8,
      //         marginBottom: 10
      //       }
      //     }}
      // >
      //   <Tab.Screen
      //       name={'GiftsNavigator'}
      //       component={GiftsNavigator}
      //       options={{
      //         tabBarIcon: ({focused, color}) => (
      //             <Feather
      //                 name={'gift'}
      //                 color={focused ? currentTheme.secondaryColor
      //                     : currentTheme.secondaryVariantColor}
      //                 size={IconSettings.tabNavigationIconSize}
      //             />
      //         ),
      //         tabBarLabel: ({focused, color}) => (
      //             <Text
      //                 style={{
      //                   color: focused ? currentTheme.secondaryColor
      //                       : currentTheme.secondaryVariantColor,
      //                   fontFamily: TextSettings.defaultFontLight,
      //                   fontSize: TextSettings.tabTextSize
      //                 }}
      //             >
      //               {currentLanguage.giftsScreenTitle}
      //             </Text>
      //         )
      //       }}
      //   />
      //   <Tab.Screen
      //       name={'ListsNavigator'}
      //       component={ListsNavigator}
      //       options={{
      //         tabBarIcon: ({focused, color}) => (
      //             <Feather
      //                 name={'list'}
      //                 color={focused ? currentTheme.secondaryColor
      //                     : currentTheme.secondaryVariantColor}
      //                 size={IconSettings.tabNavigationIconSize}
      //             />
      //         ),
      //         tabBarLabel: ({focused, color}) => (
      //             <Text
      //                 style={{
      //                   color: focused ? currentTheme.secondaryColor
      //                       : currentTheme.secondaryVariantColor,
      //                   fontFamily: TextSettings.defaultFontLight,
      //                   fontSize: TextSettings.tabTextSize
      //                 }}
      //             >
      //               {currentLanguage.listsScreenTitle}
      //             </Text>
      //         )
      //       }}
      //   />
      //   <Tab.Screen
      //       name={'HomeNavigator'}
      //       component={HomeNavigator}
      //       options={{
      //         tabBarIcon: ({focused, color}) => (
      //             <Feather
      //                 name={'home'}
      //                 color={focused ? currentTheme.secondaryColor
      //                     : currentTheme.secondaryVariantColor}
      //                 size={IconSettings.tabNavigationIconSize}
      //             />
      //         ),
      //         tabBarLabel: ({focused, color}) => (
      //             <Text
      //                 style={{
      //                   color: focused ? currentTheme.secondaryColor
      //                       : currentTheme.secondaryVariantColor,
      //                   fontFamily: TextSettings.defaultFontLight,
      //                   fontSize: TextSettings.tabTextSize
      //                 }}
      //             >
      //               {currentLanguage.homeScreenTitle}
      //             </Text>
      //         )
      //       }}
      //   />
      //   <Tab.Screen
      //       name={'SettingsNavigator'}
      //       component={SettingsNavigator}
      //       options={{
      //         tabBarIcon: ({focused, color}) => (
      //             <Feather
      //                 name={'settings'}
      //                 color={focused ? currentTheme.secondaryColor
      //                     : currentTheme.secondaryVariantColor}
      //                 size={IconSettings.tabNavigationIconSize}
      //             />
      //         ),
      //         tabBarLabel: ({focused, color}) => (
      //             <Text
      //                 style={{
      //                   color: focused ? currentTheme.secondaryColor
      //                       : currentTheme.secondaryVariantColor,
      //                   fontFamily: TextSettings.defaultFontLight,
      //                   fontSize: TextSettings.tabTextSize
      //                 }}
      //             >
      //               {currentLanguage.settingsScreenTitle}
      //             </Text>
      //         )
      //       }}
      //   />
      // </Tab.Navigator>
  );
};
