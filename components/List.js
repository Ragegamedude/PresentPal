import {Modal, Text, View} from "react-native";
import {createListStyle} from "./ListStyle";
import {Avatar, TouchableRipple} from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import {IconSettings} from "../constants/IconSettings";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Context} from "../context/Context";
import React, {useContext, useState} from "react";
import {useSQLiteContext} from "expo-sqlite";
import * as DatabaseAdapter from "../database/DatabaseAdapter";
import createModalStyle from "./ModalStyle";

export default List = (props) => {
  const database = useSQLiteContext();
  const {theme, lists, language} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;
  const [currentLists, setCurrentLists] = lists;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const ListStyle = createListStyle(currentTheme);
  const ModalStyle = createModalStyle(currentTheme);

  const giftsAmount = 0;
  const giftsTotal = 0;
  const giftsFinished = 0;

  const deleteListItem = async () => {
    await DatabaseAdapter.deleteList(database, props.data.id);
    const lists = await DatabaseAdapter.getLists(database);
    setCurrentLists(lists);
  };

  const toggleFavoriteItem = async () => {
    await DatabaseAdapter.toggleFavorite(database, props.data.id, props.data.favorite);
    const lists = await DatabaseAdapter.getLists(database);
    setCurrentLists(lists);
  };

  return (
    <View
      style={ListStyle.listWrapper}
    >
      <Modal animationType={"fade"} transparent={true}
             visible={showDeleteModal}>
        <View style={ModalStyle.modalWrapper}>
          <View style={ModalStyle.modal}>
            <View style={ModalStyle.modalHeader}>
              <Text style={ModalStyle.modalHeaderText}>
                {currentLanguage.modalDeleteHeadline}
              </Text>
            </View>
            <View style={ModalStyle.modalContent}>
              <Text style={ModalStyle.modalContentWarningText}>
                {currentLanguage.modalDeleteWarning}
              </Text>
              <View style={ModalStyle.modalButtonWrapper}>
                <TouchableRipple
                  theme={currentTheme}
                  borderless={true}
                  style={ModalStyle.modalContentButton2}
                  onPress={() => deleteListItem()}
                >
                  <Text style={ModalStyle.modalContentButtonText}>
                    {currentLanguage.buttonConfirmText}
                  </Text>
                </TouchableRipple>
                <TouchableRipple
                  theme={currentTheme}
                  borderless={true}
                  style={ModalStyle.modalContentButton3}
                  onPress={() => setShowDeleteModal(false)}
                >
                  <Text style={ModalStyle.modalContentButtonText}>
                    {currentLanguage.buttonDeclineText}
                  </Text>
                </TouchableRipple>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableRipple
        theme={currentTheme}
        borderless={true}
        style={ListStyle.listContainer}
        onPress={() => executeAction(props.action)}
      ><View style={ListStyle.list}>
        <View style={ListStyle.imageWrapper}>
          <Text style={ListStyle.birthday}>{props.data.event}</Text>
          <Avatar.Image
            size={IconSettings.listsAvatarSize}
            source={
              props.data.image
                ? props.data.image
                : require("../assets/avatars/0.png")
            }
          />
          <Text style={ListStyle.date}>{props.data.event_date}</Text>
        </View>
        <View style={ListStyle.contentWrapper}>
          <View style={ListStyle.content}>
            <Text style={ListStyle.contentHeadline}>{props.data.headline}</Text>
            <Text numberOfLines={3} style={ListStyle.contentDescription}>
              {props.data.description}
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
            onPress={() => toggleFavoriteItem()}
          >
            <MaterialIcons
              name={props.data.favorite ? "favorite" : "favorite-outline"}
              size={IconSettings.buttonIconSize}
              color={
                props.data.favorite
                  ? currentTheme.colors.primary
                  : currentTheme.colors.secondary
              }
            />
          </TouchableRipple>
          <TouchableRipple
            borderless={true}
            style={ListStyle.function}
            onPress={() => console.log()}
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
            onPress={() => setShowDeleteModal(true)}
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
