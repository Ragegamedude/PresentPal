import {Text, TouchableRipple} from "react-native-paper";
import {createChipStyle} from "./ChipStyle";
import {Image} from "expo-image";
import {Context} from "../context/Context";
import {useContext} from "react";
import {View} from "react-native";

export default Chip = (props) => {

  const {theme} = useContext(Context);
  const [currentTheme] = theme;

  const ChipStyle = createChipStyle(currentTheme)

  return (
      <TouchableRipple
          theme={currentTheme}
          borderless={true}
          onPress={() => console.log("Test")}
          style={ChipStyle.chipWrapper}>
        <View style={ChipStyle.chip}>
          <Image
              style={ChipStyle.chipImage}
              source={props.image}
          />
          <Text style={ChipStyle.chipText}>{props.text}</Text>
        </View>
      </TouchableRipple>)
}