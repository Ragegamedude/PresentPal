import {Text, View} from "react-native";
import {createListStyle} from "./ListStyle";
import {Avatar, TouchableRipple} from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import {IconSettings} from "../constants/IconSettings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Context} from "../context/Context";
import React, {useContext, useEffect, useState} from "react";
import {localAvatars} from "../constants/StaticImageLoader";

export default List = (props) => {
  const {theme} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    if (props.item.image.includes('../assets/avatars/')) {
      setImageSource(localAvatars[props.item.image]);
    } else {
      setImageSource({
        uri: props.item.image,
      })
    }
  }, [props.item.image]);

  const ListStyle = createListStyle(currentTheme);

  const giftsAmount = 0;
  const giftsTotal = 0;
  const giftsFinished = 0;

  const useFallbackImage = () => {
    setImageSource(localAvatars['../assets/avatars/Fallback.png']);
  }

  return (
    <View
      style={ListStyle.listWrapper}
    >
      <TouchableRipple
        theme={currentTheme}
        borderless={true}
        style={ListStyle.listContainer}
        onPress={() => console.log()}
      ><View style={ListStyle.list}>
        <View style={ListStyle.imageWrapper}>
          <Text style={ListStyle.birthday}>{props.item.event}</Text>
          <Avatar.Image
            size={IconSettings.listsAvatarSize}
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
              <Feather
                style={ListStyle.statKey}
                name="gift"
                size={IconSettings.listIconSize}
                color={currentTheme.colors.secondary}
              />
              <Text style={ListStyle.statValue}>{" " + giftsAmount}</Text>
            </View>
            <View style={ListStyle.statsSecond}>
              <MaterialIcons
                style={ListStyle.statKey}
                name="done"
                size={IconSettings.listIconSize}
                color={currentTheme.colors.secondary}
              />
              <Text style={ListStyle.statValue}>{giftsFinished}</Text>
            </View>
            <View style={ListStyle.statsSecond}>
              <Ionicons
                style={ListStyle.statKey}
                name="pricetag-outline"
                size={IconSettings.listIconSize}
                color={currentTheme.colors.secondary}
              />
              <Text style={ListStyle.statValue}>{giftsTotal}</Text>
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
            <Feather
              name="edit"
              size={IconSettings.buttonIconSize}
              color={currentTheme.colors.secondary}
            />
          </TouchableRipple>
          <TouchableRipple
            borderless={true}
            style={ListStyle.function}
            onPress={() => props.deleteFunction(props.item)}
          >
            <MaterialIcons
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
