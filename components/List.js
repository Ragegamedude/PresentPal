import {Text, View} from "react-native";
import {createListStyle} from "./ListStyle";
import {Avatar, TouchableRipple} from "react-native-paper";
import {IconSettings} from "../constants/IconSettings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Context} from "../context/Context";
import React, {useContext, useEffect, useState} from "react";
import {localAvatars} from "../constants/StaticImageLoader";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Screens} from "../constants/Screens";

export default List = (props) => {
  const {theme} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;

  const [imageSource, setImageSource] = useState(null);
  const [giftsAmount, setGiftsAmount] = useState(2);
  const [giftsAmountFinished, setGiftsAmountFinished] = useState(0);
  const [giftsTotalPrice, setGiftsTotalPrice] = useState(0);
  const [giftsTotalPriceFinished, setGiftsTotalPriceFinished] = useState(0);
  const [giftsTotalProgress, setGiftsTotalProgress] = useState("0%");

  useEffect(() => {
    // stats calculations
    const length = props.item.gifts.length;
    const giftsFinished = props.item.gifts.filter((gift) => gift.finished).length;
    setGiftsAmount(length);
    setGiftsAmountFinished(giftsFinished);
    setGiftsTotalProgress((length > 0 ? ((100 / length) * giftsFinished) : '0') + "%");
    setGiftsTotalPrice(props.item.gifts.reduce((total, gift) => {
      return total + gift.price;
    }, 0).toFixed(2));
    setGiftsTotalPriceFinished(props.item.gifts.reduce((total, gift) => {
      if (gift.finished) {
        return total + gift.price;
      }
      return total;
    }, 0).toFixed(2));
    // image selection
    if (props.item.image.includes('../assets/avatars/')) {
      setImageSource(localAvatars[props.item.image]);
    } else {
      setImageSource({
        uri: props.item.image,
      })
    }
  }, [props.item]);

  const ListStyle = createListStyle(currentTheme);

  const useFallbackImage = () => {
    setImageSource(localAvatars['../assets/avatars/Fallback.png']);
  }

  const openListDetails = () => {
    props.navigation.navigate(Screens.LISTS_DETAILS, {
      item: props.item,
      image: imageSource
    })
  }

  return (
    <View
      style={ListStyle.listWrapper}
    >
      <TouchableRipple
        theme={currentTheme}
        borderless={true}
        style={ListStyle.listContainer}
        onPress={() => openListDetails()}
      ><View style={ListStyle.list}>
        <View style={ListStyle.imageWrapper}>
          <Text style={ListStyle.event}>{props.item.event}</Text>
          <Avatar.Image
            source={imageSource}
            onError={() => useFallbackImage()}
          />
          <Text style={ListStyle.date}>{props.item.event_date}</Text>
        </View>
        <View style={ListStyle.contentWrapper}>
          <View style={ListStyle.content}>
            <Text style={ListStyle.contentHeadline}>{props.item.headline}</Text>
            <Text numberOfLines={3} style={ListStyle.contentDescription}>
              {props.item.description}
            </Text>
          </View>
          <View style={ListStyle.statsWrapper}>
            <View style={ListStyle.statsFirst}>
              <Ionicons
                style={ListStyle.statKey}
                name="gift-outline"
                size={IconSettings.listIconSize}
                color={currentTheme.colors.secondary}
              />
              <Text style={ListStyle.statValue}>{giftsAmountFinished + "/" + giftsAmount}</Text>
            </View>
            <View style={ListStyle.statsSecond}>
              <Ionicons
                style={ListStyle.statKey}
                name="pricetag-outline"
                size={IconSettings.listIconSize}
                color={currentTheme.colors.secondary}
              />
              <Text style={ListStyle.statValue}>{giftsTotalPriceFinished + "/" + giftsTotalPrice}</Text>
            </View>
            <View style={ListStyle.statsSecond}>
              <MaterialCommunityIcons
                style={ListStyle.statKey}
                name="progress-check"
                size={IconSettings.listIconSize}
                color={currentTheme.colors.secondary}
              />
              <Text style={ListStyle.statValue}>{giftsTotalProgress}</Text>
            </View>
          </View>
        </View>
        <View style={ListStyle.functionWrapper}>
          <TouchableRipple
            borderless={true}
            style={ListStyle.function}
            onPress={() => props.toggleFavoriteFunction(props.item)}
          >
            <MaterialIcons
              name={props.item.favorite ? "favorite" : "favorite-outline"}
              size={IconSettings.buttonIconSize}
              color={
                props.item.favorite
                  ? currentTheme.colors.primary
                  : currentTheme.colors.secondary
              }
            />
          </TouchableRipple>
          <TouchableRipple
            borderless={true}
            style={ListStyle.function}
            onPress={() => props.editFunction(props.item)}
          >
            <MaterialCommunityIcons
              name="square-edit-outline"
              size={IconSettings.buttonIconSize}
              color={currentTheme.colors.secondary}
            />
          </TouchableRipple>
          <TouchableRipple
            borderless={true}
            style={ListStyle.function}
            onPress={() => props.deleteFunction(props.item)}
          >
            <MaterialCommunityIcons
              name="delete-outline"
              size={IconSettings.buttonIconSize}
              color={currentTheme.colors.secondary}
            />
          </TouchableRipple>
        </View>
      </View>
      </TouchableRipple>
    </View>
  );
};
