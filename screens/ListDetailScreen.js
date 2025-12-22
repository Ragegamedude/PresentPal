import {ScrollView, View} from "react-native";
import Header from "../components/Header";
import React, {useContext} from "react";
import {Context} from "../context/Context";
import {createListDetailScreenStyle} from "./ListDetailScreenStyle";
import {Screens} from "../constants/Screens";
import {Avatar} from "react-native-paper";
import {IconSettings} from "../constants/IconSettings";

export default ListDetailScreen = ({route, navigation}) => {

  const {theme, language} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;

  const {item, image} = route.params;

  const ListDetailStyle = createListDetailScreenStyle(currentTheme);

  return (

    <View style={ListDetailStyle.list}>
      <Header screen={Screens.LISTS_DETAILS}
              title={item.headline}
              currentTheme={currentTheme}></Header>
      <ScrollView>
        <View style={ListDetailStyle.headerWrapper}>
          <Avatar.Image
            style={ListDetailStyle.image}
            size={IconSettings.listsDetailAvatarSize}
            source={image}
          />

        </View>
      </ScrollView>
    </View>
  )

}