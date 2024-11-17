import {View} from "react-native";
import {Text} from "react-native-paper";
import {useContext} from "react";
import {Context} from "../context/Context";

export default GiftsInformation = (props) => {
  const {theme, language} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;
  return (
      <View>
        <Text>Hallo Welt</Text>
      </View>
  )
}