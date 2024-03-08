import {Text, View} from "react-native";
import {createListStyle} from "./ListStyle";
import {Avatar, TouchableRipple} from 'react-native-paper';
import Feather from "react-native-vector-icons/Feather";
import {IconSettings} from "../constants/IconSettings";

export default List = (props) => {
  const ListStyle = createListStyle(props.currentTheme);
  return (
      <View style={ListStyle.listWrapper}>
        <View style={ListStyle.imageWrapper}>
          <Avatar.Image size={64} source={require('../assets/avatars/1.png')}/>
        </View>
        <View style={ListStyle.contentWrapper}>
          <Text style={ListStyle.contentHeadline}>Test</Text>
          <Text
              style={ListStyle.contentDescription}>tlkrisosbxrhlkvuzvvryzzipzahmvcfjmamslkqtsmurpwolnulfzrlbihgkyczfiyzepfhibfowqinsfrkmdnnvgljppolccvtlvpfkygwhrnlcjgjkziocybilhvwrvzfubltrozrqfpezlorsv</Text>
        </View>
        <View style={ListStyle.functionWrapper}>
          <TouchableRipple style={ListStyle.function} onPress={() => console.log()}>
            <Feather name="activity" size={IconSettings.buttonIconSize}
                     color={props.currentTheme.colors.onPrimary}/>
          </TouchableRipple>
          <TouchableRipple style={ListStyle.function} onPress={() => console.log()}>
            <Feather name="activity" size={IconSettings.buttonIconSize}
                     color={props.currentTheme.colors.onPrimary}/>
          </TouchableRipple>
          <TouchableRipple theme={props.currentTheme} style={ListStyle.function} onPress={() => console.log()}>
            <Feather name="activity" size={IconSettings.buttonIconSize}
                     color={props.currentTheme.colors.onPrimary}/>
          </TouchableRipple>
        </View>
      </View>
  )
}