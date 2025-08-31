import {useNavigation} from "@react-navigation/native";
import React, {useContext} from "react";
import {Text, View} from "react-native";
import {TouchableRipple} from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import {IconSettings} from "../constants/IconSettings";
import {Context} from "../context/Context";
import {createHeaderStyle} from "./HeaderStyle";
import Entypo from "react-native-vector-icons/Entypo";

export default Header = (props) => {
  // context
  const {theme} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;

  const HeaderStyle = createHeaderStyle(currentTheme);

  const navigation = useNavigation();

  return (
    <View style={HeaderStyle.headerWrapper}>
      <View style={HeaderStyle.leftContainer}>
        {props.screen === "category" && (
          <TouchableRipple theme={currentTheme} borderless={true}
                           onPress={() => navigation.goBack()}
                           style={HeaderStyle.leftIcon}>
            <Ionicons name={"arrow-back"}
                      size={IconSettings.buttonIconSize}
                      color={currentTheme.colors.secondary}>

            </Ionicons>
          </TouchableRipple>
        )}
      </View>
      <View style={HeaderStyle.centerContainer}>
        <Text style={HeaderStyle.centerText}>{props.title}</Text>
      </View>
      <View style={HeaderStyle.rightContainer}>
        {props.screen === "lists" && (
          <TouchableRipple theme={currentTheme} borderless={true}
                           onPress={() => props.rightFunction()}
                           style={HeaderStyle.rightIcon}>
            <Entypo name={props.modalIconAdd}
                    size={IconSettings.buttonIconSize}
                    color={currentTheme.colors.secondary}
                    direction={"rtl"}/>
          </TouchableRipple>
        )}
      </View>
    </View>
  );
};
