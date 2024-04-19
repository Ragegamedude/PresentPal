import {Modal, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {createHeaderStyle} from './HeaderStyle';
import {IconSettings} from "../constants/IconSettings";
import {TouchableRipple} from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import createModalStyle from "./ModalStyle";
import Feather from "react-native-vector-icons/Feather";
import {AvailableSettingsActions} from "./SettingsSection";
import {Context} from "../context/Context";

export default Header = (props) => {
  const {theme, language, version, personalAds} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;

  const [showAddListModal, setShowListModal] = useState(false)
  const HeaderStyle = createHeaderStyle(currentTheme);
  const ModalStyle = createModalStyle(currentTheme);
  return (
      <View style={HeaderStyle.headerWrapper}>
        <Modal animationType={'fade'} transparent={true}
               visible={showAddListModal}>
          <View style={ModalStyle.modalWrapper}>
            <View style={ModalStyle.modal}>
              <View style={ModalStyle.modalHeader}>
                <Entypo
                    style={ModalStyle.converterSectionModalHeaderIcon}
                    name={props.modalIconAdd}
                    color={currentTheme.colors.primary}
                    size={IconSettings.modalHeadlineIconSize}
                ></Entypo>
                <Text style={ModalStyle.modalHeaderText}>
                  {currentLanguage.listsAddList}
                </Text>
              </View>
              <View style={ModalStyle.modalContent}>
                <Text style={ModalStyle.modalContentHeadline}>
                  {currentLanguage.settingsInformationGeneral}
                </Text>
                <Text style={ModalStyle.modalContentText}>
                  {currentLanguage.settingsInformationGeneralContent}
                </Text>
                <Text style={ModalStyle.modalContentHeadline}>
                  {currentLanguage.settingsInformationApplication}
                </Text>
                <Text style={ModalStyle.modalContentText}>
                  {currentLanguage.settingsInformationModalContent}
                </Text>
                <Text style={ModalStyle.modalContentHeadline}>
                  {currentLanguage.settingsInformationWebsite}
                </Text>
                <Text style={ModalStyle.modalContentText}>
                  {currentLanguage.settingsInformationModalCreator}
                </Text>
                <View style={ModalStyle.modalButtonWrapper}>
                  <TouchableRipple
                      theme={currentTheme}
                      borderless={true}
                      style={ModalStyle.modalContentButton2}
                      onPress={() => executeAction(
                          AvailableSettingsActions.OPEN_HOMEPAGE)}
                  >
                    <Text style={ModalStyle.modalContentButtonText}>
                      {currentLanguage.listsAdd}
                    </Text>
                  </TouchableRipple>
                  <TouchableRipple
                      theme={currentTheme}
                      borderless={true}
                      style={ModalStyle.modalContentButton3}
                      onPress={() => setShowListModal(false)}
                  >
                    <Text style={ModalStyle.modalContentButtonText}>
                      {currentLanguage.buttonCloseText}
                    </Text>
                  </TouchableRipple>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={HeaderStyle.leftContainer}>
          <View style={HeaderStyle.leftIcon}></View>
        </View>
        <View style={HeaderStyle.centerContainer}>
          <Text style={HeaderStyle.centerText}>{props.title}</Text>
        </View>
        <View style={HeaderStyle.rightContainer}>
          {props.screen === 'lists' && (
              <TouchableRipple theme={currentTheme} borderless={true}
                               onPress={() => setShowListModal(true)}
                               style={HeaderStyle.rightIcon}>
                <Entypo name={props.modalIconAdd} size={IconSettings.buttonIconSize}
                        color={currentTheme.colors.secondary}/>
              </TouchableRipple>
          )}
        </View>
      </View>
  );
};
