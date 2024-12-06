import {ScrollView, View} from "react-native";
import Header from "../components/Header";
import React, {useContext} from "react";
import {Context} from "../context/Context";

export default CategoryScreen = ({route, navigation}) => {

  const {theme, language} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = theme;

  const {title} = route.params;

  return (

      <View style={}>
        <Header screen={'category'}
                title={title}
                currentTheme={currentTheme}></Header>
        <ScrollView>

        </ScrollView>
      </View>
  )

}