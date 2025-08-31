import {ScrollView, View} from "react-native";
import Header from "../components/Header";
import React, {useContext} from "react";
import {Context} from "../context/Context";
import {createListDetailScreenStyle} from "./ListDetailScreenStyle";
import {Screens} from "../constants/Screens";

export default ListDetailScreen = ({route, navigation}) => {

  const {theme, language} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = theme;

  const {item, category} = route.params;

  const ListDetailStyle = createListDetailScreenStyle(currentTheme);

  return (

    <View style={ListDetailStyle.list}>
      <Header screen={Screens.LISTS_DETAILS}
              title={item.headline}
              currentTheme={currentTheme}></Header>
      <ScrollView>
      </ScrollView>
    </View>
  )

}