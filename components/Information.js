import {View} from "react-native";
import {Text, TouchableRipple} from "react-native-paper";
import React, {useContext} from "react";
import {Context} from "../context/Context";
import {createInformationStyle} from "./InformationStyle";
import {Themes} from "../themes/Themes";
import {Image} from 'expo-image';
import {IconSettings} from "../constants/IconSettings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default Information = (props) => {
  const {theme, language} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;

  const InformationStyle = createInformationStyle(currentTheme)

  return (
      <View style={InformationStyle.informationWrapper}>
        <View style={InformationStyle.informationImageWrapper}>
          <Image
              style={InformationStyle.informationImage}
              source={currentTheme === Themes.light ? require(
                  '../assets/images/light/info.png') : require(
                  '../assets/images/dark/info.png')}
          />
        </View>
        <View style={InformationStyle.informationTextWrapper}>
          <Text
              style={InformationStyle.informationHeadline}>{props.headline}</Text>
          <Text
              style={InformationStyle.informationText}>{props.text}</Text>
        </View>
        <View style={InformationStyle.informationIconWrapper}>
          <TouchableRipple borderless={true} style={InformationStyle.function}
                           onPress={() => console.log()}>
            <MaterialIcons
                name={"close"}
                size={IconSettings.buttonIconSize}
                color={currentTheme.colors.secondary}/>
          </TouchableRipple>
        </View>
      </View>
  )
}