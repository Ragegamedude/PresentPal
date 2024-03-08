import {Text, View} from "react-native";
import {createListStyle} from "./ListStyle";
import {Avatar, TouchableRipple} from 'react-native-paper';
import Feather from "react-native-vector-icons/Feather";
import {IconSettings} from "../constants/IconSettings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default List = (props) => {
  const ListStyle = createListStyle(props.currentTheme);
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
          <View style={ListStyle.stats}>
            <Text
                style={ListStyle.stat}>{props.currentLanguage.listGiftAmount}: {props.data.gifts.length}</Text>
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