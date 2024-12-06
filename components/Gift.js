import {Text, View} from "react-native";
import {createGiftStyle} from "./GiftStyle";
import {Context} from "../context/Context";
import React, {useContext} from "react";
import {Image} from "expo-image";

export default Gift = (props) => {
  const {theme} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;

  const GiftStyle = createGiftStyle(currentTheme);
  return (
      <View style={props.lastElement ? GiftStyle.giftWrapper2
          : GiftStyle.giftWrapper}>
        <View style={GiftStyle.imageWrapper}>
          <Image style={GiftStyle.image}
                 source={props.image}/>
        </View>
        <View style={GiftStyle.contentWrapper}>
          <View style={GiftStyle.content}>
            <Text style={GiftStyle.contentHeadline}>{'headline'}</Text>
            <Text
                style={GiftStyle.contentDescription}>{'description'}</Text>
          </View>
        </View>
      </View>
  )
}