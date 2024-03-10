import {Text, View} from 'react-native';
import React from 'react';
import {createHeaderStyle} from './HeaderStyle';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {IconSettings} from "../constants/IconSettings";

export default Header = (props) => {
  const HeaderStyle = createHeaderStyle(props.currentTheme);
  return (
      <View style={HeaderStyle.headerWrapper}>
        <View style={HeaderStyle.leftContainer}>
          <View style={HeaderStyle.leftIcon}></View>
        </View>
        <View style={HeaderStyle.centerContainer}>
          <Text style={HeaderStyle.centerText}>{props.title}</Text>
        </View>
        <View style={HeaderStyle.rightContainer}>
          <View style={HeaderStyle.rightIcon}>
            {props.screen === 'lists' && (
                <MaterialIcons
                    name={"add"}
                    size={IconSettings.headerIconSize}
                    color={props.currentTheme.colors.secondary}/>
            )}
          </View>
        </View>
      </View>
  );
};
