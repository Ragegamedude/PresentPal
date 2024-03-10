import {Text, View} from "react-native";
import {createListStyle} from "./ListStyle";
import {Avatar, TouchableRipple} from 'react-native-paper';
import Feather from "react-native-vector-icons/Feather";
import {IconSettings} from "../constants/IconSettings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default List = (props) => {
  const ListStyle = createListStyle(props.currentTheme);
  const giftsAmount = props.data.gifts.length;
  const giftsTotal = ' ' + props.data.gifts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value, 0);
  const giftsFinished = props.data.gifts.length + '/' + props.data.gifts
  return (
      <View style={ListStyle.listWrapper}>
        <View style={ListStyle.imageWrapper}>
          <Avatar.Image size={IconSettings.listsAvatarSize}
                        source={props.data.image ? props.data.image : require(
                            '../assets/avatars/0.png')}/>
          <Text style={ListStyle.date}>{props.data.date}</Text>
        </View>
        <View style={ListStyle.contentWrapper}>
          <View style={ListStyle.content}>
            <Text style={ListStyle.contentHeadline}>{props.data.headline}</Text>
            <Text
                numberOfLines={3}
                style={ListStyle.contentDescription}>{props.data.description}</Text>
          </View>
          <View style={ListStyle.statsWrapper}>
            <View style={ListStyle.statsFirst}>
              <Feather name="gift" size={IconSettings.listIconSize}
                       color={props.currentTheme.colors.secondary}/>
              <Text
                  style={ListStyle.statValue}>{' ' + giftsAmount}
              </Text>
            </View>
            <View style={ListStyle.statsSecond}>
              <Ionicons name="pricetag-outline" size={IconSettings.listIconSize}
                        color={props.currentTheme.colors.secondary}/>
              <Text
                  style={ListStyle.statValue}>{giftsTotal}
              </Text>
            </View>
          </View>
        </View>
        <View style={ListStyle.functionWrapper}>
          <TouchableRipple style={ListStyle.function}
                           onPress={() => console.log()}>
            <MaterialIcons name="favorite-outline"
                           size={IconSettings.buttonIconSize}
                           color={props.currentTheme.colors.secondary}/>
          </TouchableRipple>
          <TouchableRipple style={ListStyle.function}
                           onPress={() => console.log()}>
            <Feather name="edit" size={IconSettings.buttonIconSize}
                     color={props.currentTheme.colors.secondary}/>
          </TouchableRipple>
          <TouchableRipple theme={props.currentTheme} style={ListStyle.function}
                           onPress={() => console.log()}>
            <MaterialIcons name="delete-outline"
                           size={IconSettings.buttonIconSize}
                           color={props.currentTheme.colors.secondary}/>
          </TouchableRipple>
        </View>
      </View>
  )
}

export const GIFT_STATUS = {
  COMPLETED: 'Completed',
  UNCOMPLETED: 'Uncompleted',
}