import {Text, View} from "react-native";
import {createListStyle} from "./ListStyle";
import {Avatar, TouchableRipple} from 'react-native-paper';
import Feather from "react-native-vector-icons/Feather";
import {IconSettings} from "../constants/IconSettings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {GIFT_STATUS} from "../constants/GiftsEnums";
import {Context} from "../context/Context";
import {useContext} from "react";

export default List = (props) => {
  const {theme, language, version, personalAds} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;

  const ListStyle = createListStyle(currentTheme);
  const giftsAmount = props.data.gifts.length;
  const giftsTotal = ' ' + props.data.gifts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0).toFixed(2);
  const giftsFinished = props.data.gifts.filter(
          (gift) => gift.status === GIFT_STATUS.COMPLETED).length + '/'
      + props.data.gifts.length;
  return (
      <View style={props.lastElement ? ListStyle.listWrapper2
          : ListStyle.listWrapper}>
        <View style={ListStyle.imageWrapper}>
          <Text style={ListStyle.birthday}>{props.data.event}</Text>
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
              <Feather style={ListStyle.statKey} name="gift"
                       size={IconSettings.listIconSize}
                       color={currentTheme.colors.secondary}/>
              <Text
                  style={ListStyle.statValue}>{' ' + giftsAmount}
              </Text>
            </View>
            <View style={ListStyle.statsSecond}>
              <MaterialIcons style={ListStyle.statKey} name="done"
                             size={IconSettings.listIconSize}
                             color={currentTheme.colors.secondary}/>
              <Text
                  style={ListStyle.statValue}>{giftsFinished}
              </Text>
            </View>
            <View style={ListStyle.statsSecond}>
              <Ionicons style={ListStyle.statKey} name="pricetag-outline"
                        size={IconSettings.listIconSize}
                        color={currentTheme.colors.secondary}/>
              <Text
                  style={ListStyle.statValue}>{giftsTotal}
              </Text>
            </View>
          </View>
        </View>
        <View style={ListStyle.functionWrapper}>
          <TouchableRipple borderless={true} style={ListStyle.function}
                           onPress={() => console.log()}>
            <MaterialIcons
                name={props.data.favorite ? "favorite" : "favorite-outline"}
                size={IconSettings.buttonIconSize}
                color={props.data.favorite ? currentTheme.colors.primary
                    : currentTheme.colors.secondary}/>
          </TouchableRipple>
          <TouchableRipple borderless={true} style={ListStyle.function}
                           onPress={() => console.log()}>
            <Feather name="edit" size={IconSettings.buttonIconSize}
                     color={currentTheme.colors.secondary}/>
          </TouchableRipple>
          <TouchableRipple borderless={true} style={ListStyle.function}
                           onPress={() => console.log()}>
            <MaterialIcons name="delete-outline"
                           size={IconSettings.buttonIconSize}
                           color={currentTheme.colors.secondary}/>
          </TouchableRipple>
        </View>
      </View>
  )
}