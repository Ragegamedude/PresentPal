import {View} from "react-native";
import {Text, TouchableRipple} from "react-native-paper";
import React, {useContext} from "react";
import {Context} from "../context/Context";
import {createInformationStyle} from "./InformationStyle";
import {Themes} from "../themes/Themes";
import {Image} from 'expo-image';
import {IconSettings} from "../constants/IconSettings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Information = (props) => {
  const {theme} = useContext(Context);
  const [currentTheme] = theme;

  const InformationStyle = createInformationStyle(currentTheme)

  const hideInformation = () => {
    AsyncStorage.setItem(props.informationKey, JSON.stringify(true)).then(
        props.hide(true))
  }

  return (
      <View style={InformationStyle.informationWrapper}>
        <View style={InformationStyle.informationImageWrapper}>
          <Image
              style={InformationStyle.informationImage}
              source={require('../assets/images/information.png')}
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
                           onPress={() => hideInformation()}>
            <MaterialIcons
                name={"close"}
                size={IconSettings.buttonIconSize}
                color={currentTheme.colors.secondary}/>
          </TouchableRipple>
        </View>
      </View>
  )
}