import {Text, View} from "react-native";
import {createSettingsHeadlineStyle} from "./SettingsHeadlineStyle";
import {useContext} from "react";
import {Context} from "../context/Context";
import Feather from "react-native-vector-icons/Feather";
import {IconSettings} from "../constants/IconSettings";

export default SettingsHeadline = (props) => {
  const {theme} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;

  const SettingsHeadlineStyle = createSettingsHeadlineStyle(currentTheme);

  return (
    <View style={SettingsHeadlineStyle.settingsHeadlineWrapper}>
      <Feather
        name={props.icon}
        color={currentTheme.colors.secondary}
        size={IconSettings.settingsHeadlineIconSize}
      ></Feather>
      <Text style={SettingsHeadlineStyle.settingsHeadline}>
        {props.headline}
      </Text>
    </View>
  )
}