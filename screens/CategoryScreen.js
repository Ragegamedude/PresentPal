import {ScrollView, View} from "react-native";
import Header from "../components/Header";
import React, {useContext} from "react";
import {Context} from "../context/Context";
import {createCategoryScreenStyle} from "./CategoryScreenStyle";
import Gift from "../components/Gift";
import {Screens} from "../constants/Screens";

export default CategoryScreen = ({route, navigation}) => {

  const {theme, language} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = theme;

  const {title, category} = route.params;

  const CategoryStyle = createCategoryScreenStyle(currentTheme);

  return (

      <View style={CategoryStyle.category}>
        <Header screen={Screens.CATEGORY}
                title={title}
                currentTheme={currentTheme}></Header>
        <ScrollView>
          <Gift lastElement={true}
                image={require('../assets/avatars/0.png')}></Gift>
        </ScrollView>
      </View>
  )

}