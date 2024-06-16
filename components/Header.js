import {Modal, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {createHeaderStyle} from './HeaderStyle';
import {IconSettings} from "../constants/IconSettings";
import {HelperText, TextInput, TouchableRipple} from "react-native-paper";
import createModalStyle from "./ModalStyle";
import {AvailableSettingsActions} from "./SettingsSection";
import {Context} from "../context/Context";
import MaterialCommunityIcon
  from "react-native-paper/src/components/MaterialCommunityIcon";
import {InputSettings} from "../constants/InputSettings";

export default Header = (props) => {
  const {theme, language, version, personalAds} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;

  const [showAddListModal, setShowListModal] = useState(false);

  const [headlineText, setHeadlineText] = useState('');
  const [headlineError, setHeadlineError] = useState(false);
  const [descriptionText, setDescriptionText] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [eventText, setEventText] = useState('');
  const [eventError, setEventError] = useState(false);
  const [dateText, setDateText] = useState('');
  const [dateError, setDateError] = useState(false);

  const HeaderStyle = createHeaderStyle(currentTheme);
  const ModalStyle = createModalStyle(currentTheme);

  const resetForm = () => {
    setHeadlineText('');
    setHeadlineError(false);
    setDescriptionText('');
    setDescriptionError(false);
    setEventText('');
    setEventError(false);
    setDateText('');
    setDateError(false);
  }

  const validateForm = (field) => {
    let error = false;
    if (field === 'headline') {
      error = headlineText.length >= InputSettings.inputMax1;
      setHeadlineError(error);
    } else if (field === 'description') {
      setDescriptionError(false);
    } else if (field === 'event') {
      setEventError(false);
    } else if (field === 'date') {
      setDateError(false);
    }
  }

  return (
      <View style={HeaderStyle.headerWrapper}>
        <Modal animationType={'fade'} transparent={true}
               visible={showAddListModal}>
          <View style={ModalStyle.modalWrapper}>
            <View style={ModalStyle.modal}>
              <View style={ModalStyle.modalHeader}>
                <MaterialCommunityIcon
                    style={ModalStyle.converterSectionModalHeaderIcon}
                    name={props.modalIconAdd}
                    color={currentTheme.colors.secondary}
                    size={IconSettings.modalHeadlineIconSize}
                    direction={'ltr'}
                ></MaterialCommunityIcon>
                <Text style={ModalStyle.modalHeaderText}>
                  {currentLanguage.listsAddList}
                </Text>
              </View>
              <View style={ModalStyle.modalContent}>
                <TextInput
                    style={ModalStyle.modalContentInputField}
                    label={currentLanguage.inputFieldHeadline}
                    mode={"outlined"}
                    value={headlineText}
                    error={headlineError}
                    dense={true}
                    left={<TextInput.Icon icon="view-headline"
                                          disabled={true}/>}
                    onChangeText={input => {
                      setHeadlineText(input);
                      validateForm('headline');
                    }}
                />
                {headlineError && (
                    <HelperText style={ModalStyle.modalContentInputHelperText}
                                type="error" visible={headlineError}>
                      {currentLanguage.inputFieldErrorMax}{InputSettings.inputMax1}
                    </HelperText>)}
                <TextInput
                    style={ModalStyle.modalContentInputField}
                    label={currentLanguage.inputFieldDescription}
                    mode={"outlined"}
                    value={descriptionText}
                    error={descriptionError}
                    dense={true}
                    left={<TextInput.Icon icon="card-text-outline"
                                          disabled={true}/>}
                    onChangeText={input => {
                      setDescriptionText(input);
                      validateForm('description');
                    }}
                />
                {descriptionError && (
                    <HelperText style={ModalStyle.modalContentInputHelperText}
                                type="error" visible={descriptionError}>
                      {currentLanguage.inputFieldErrorMax}{InputSettings.inputMax1}
                    </HelperText>)}
                <TextInput
                    style={ModalStyle.modalContentInputField}
                    label={currentLanguage.inputFieldEvent}
                    mode={"outlined"}
                    value={eventText}
                    error={eventError}
                    dense={true}
                    left={<TextInput.Icon icon="crosshairs-gps"
                                          disabled={true}/>}
                    onChangeText={input => {
                      setEventText(input);
                      validateForm('event');
                    }}
                />
                {eventError && (
                    <HelperText style={ModalStyle.modalContentInputHelperText}
                                type="error" visible={eventError}>
                      {currentLanguage.inputFieldErrorMax}{InputSettings.inputMax1}
                    </HelperText>)}
                <TextInput
                    style={ModalStyle.modalContentInputField}
                    label={currentLanguage.inputFieldDate}
                    mode={"outlined"}
                    value={dateText}
                    error={dateError}
                    dense={true}
                    left={<TextInput.Icon icon="clock-check-outline"
                                          disabled={true}/>}
                    onChangeText={input => {
                      setDateText(input);
                      validateForm('date');
                    }}
                />
                {dateError && (
                    <HelperText style={ModalStyle.modalContentInputHelperText}
                                type="error" visible={dateError}>
                      {currentLanguage.inputFieldErrorMax}{InputSettings.inputMax1}
                    </HelperText>)}
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
                      onPress={() => {
                        setShowListModal(false);
                        resetForm();
                      }}
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
                <MaterialCommunityIcon name={props.modalIconAdd}
                                       size={IconSettings.buttonIconSize}
                                       color={currentTheme.colors.secondary}
                                       direction={'rtl'}/>
              </TouchableRipple>
          )}
        </View>
      </View>
  );
};
