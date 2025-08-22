import {useNavigation} from "@react-navigation/native";
import {useSQLiteContext} from "expo-sqlite";
import React, {useContext, useState} from "react";
import {Modal, Text, ToastAndroid, View} from "react-native";
import {HelperText, TextInput, TouchableRipple} from "react-native-paper";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import Ionicons from "react-native-vector-icons/Ionicons";
import {IconSettings} from "../constants/IconSettings";
import {Context} from "../context/Context";
import * as DatabaseAdapter from "../database/DatabaseAdapter";
import {validateDate, validateRequired, Validation} from "../validation/Validation";
import {createHeaderStyle} from "./HeaderStyle";
import createModalStyle from "./ModalStyle";
import {DatePickerModal} from "react-native-paper-dates";
import {format} from "date-fns";
import {TranslationManager} from "../translations/TranslationManager";

export default Header = (props) => {
  const database = useSQLiteContext();
  const {theme, language, version, personalAds, lists} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;
  const [currentLists, setCurrentLists] = lists;

  const [showAddListModal, setShowListModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);

  const [headlineText, setHeadlineText] = useState("");
  const [headlineError, setHeadlineError] = useState(false);
  const [descriptionText, setDescriptionText] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);
  const [eventText, setEventText] = useState("");
  const [eventError, setEventError] = useState(false);
  const [dateText, setDateText] = useState("");
  const [dateTextUnformatted, setDateTextUnformatted] = useState(new Date());
  const [dateError, setDateError] = useState(false);

  const HeaderStyle = createHeaderStyle(currentTheme);
  const ModalStyle = createModalStyle(currentTheme);

  const addList = async () => {
    const gifts = {gifts: []};
    await DatabaseAdapter.addList(database, 0,
      headlineText, descriptionText, "", dateText, eventText, JSON.stringify(gifts));
    const lists = await DatabaseAdapter.getLists(database);
    setCurrentLists(lists);
  };

  const navigation = useNavigation();

  const startDate = new Date();
  const endDate = new Date(startDate.getFullYear() + 100, startDate.getMonth(), startDate.getDate());

  const validRange = {
    startDate,
    endDate,
  }

  const resetForm = () => {
    setHeadlineText("");
    setHeadlineError(false);
    setDescriptionText("");
    setDescriptionError(false);
    setEventText("");
    setEventError(false);
    setDateText("");
    setDateError(false);
  };

  const validateForm = () => {
    const headlineValidationResult = validateRequired(headlineText);
    const descriptionValidationResult = validateRequired(descriptionText);
    const eventValidationResult = validateRequired(eventText);
    const dateValidationResult = validateDate(dateText);
    setHeadlineError(!headlineValidationResult);
    setDescriptionError(!descriptionValidationResult);
    setEventError(!eventValidationResult);
    setDateError(!dateValidationResult);
    return headlineValidationResult && descriptionValidationResult
      && eventValidationResult && dateValidationResult;
  };

  const processForm = async () => {
    const validationResult = validateForm();
    if (validationResult) {
      const result = true;
      if (result) {
        await addList();
        setShowListModal(false);
        resetForm();
      }
    }
  };

  const setDateTextFormatted = (input) => {
    const formatted = format(input.date, 'dd.MM.yyyy');
    setDateText(formatted);
    setDateTextUnformatted(input.date);
    setShowDateModal(false);
  }

  return (
    <View style={HeaderStyle.headerWrapper}>
      <DatePickerModal
        locale={TranslationManager.getCurrentLanguageAsIsoString(currentLanguage) + "-custom"}
        startDate={startDate}
        endDate={endDate}
        validRange={validRange}
        mode="single"
        visible={showDateModal}
        onDismiss={() => setShowDateModal(false)}
        date={dateTextUnformatted}
        onConfirm={(date) => setDateTextFormatted(date)}
      />
      <Modal animationType={"fade"} transparent={true}
             visible={showAddListModal}>
        <View style={ModalStyle.modalWrapper}>
          <View style={ModalStyle.modal}>
            <View style={ModalStyle.modalHeader}>
              <Text style={ModalStyle.modalHeaderText}>
                {currentLanguage.listsAddList}
              </Text>
            </View>
            <View style={ModalStyle.modalContent}>
              <View style={ModalStyle.modalContentWrapper}>
                <View style={ModalStyle.modalContentInputFieldWrapper}>
                  <TextInput
                    style={ModalStyle.modalContentInputField}
                    outlineStyle={ModalStyle.modalContentInputFieldOutline}
                    placeholder={currentLanguage.inputFieldHeadlinePlaceholder}
                    textColor={currentTheme.colors.secondary}
                    outlineColor={'transparent'}
                    mode={"outlined"}
                    value={headlineText}
                    error={headlineError}
                    dense={true}
                    maxLength={Validation.inputMaxHeadline}
                    left={<TextInput.Icon
                      color={() => headlineText.length > 0 ? currentTheme.colors.secondary : currentTheme.colors.onSurfaceVariant
                      } icon="view-headline"/>}
                    onChangeText={input => {
                      setHeadlineText(input);
                    }}
                    onFocus={() => setHeadlineError(false)}
                  />
                </View>
                {headlineError && (
                  <HelperText style={ModalStyle.modalContentInputHelperText}
                              type="error" visible={headlineError}>
                    {currentLanguage.inputFieldErrorMandatory}
                  </HelperText>)}
                <View style={ModalStyle.modalContentInputFieldWrapper}>
                  <TextInput
                    style={ModalStyle.modalContentInputField}
                    outlineStyle={ModalStyle.modalContentInputFieldOutline}
                    placeholder={currentLanguage.inputFieldDescriptionPlaceholder}
                    textColor={currentTheme.colors.secondary}
                    outlineColor={'transparent'}
                    mode={"outlined"}
                    value={descriptionText}
                    error={descriptionError}
                    dense={true}
                    maxLength={Validation.inputMaxDescription}
                    left={<TextInput.Icon
                      color={() => descriptionText.length > 0 ? currentTheme.colors.secondary : currentTheme.colors.onSurfaceVariant
                      }
                      icon="card-text-outline"/>}
                    onChangeText={input => {
                      setDescriptionText(input);
                    }}
                    onFocus={() => setDescriptionError(false)}
                  />
                </View>
                {descriptionError && (
                  <HelperText style={ModalStyle.modalContentInputHelperText}
                              type="error" visible={descriptionError}>
                    {currentLanguage.inputFieldErrorMandatory}
                  </HelperText>)}
                <View style={ModalStyle.modalContentInputFieldWrapper}>
                  <TextInput
                    style={ModalStyle.modalContentInputField}
                    outlineStyle={ModalStyle.modalContentInputFieldOutline}
                    placeholder={currentLanguage.inputFieldEventPlaceholder}
                    textColor={currentTheme.colors.secondary}
                    outlineColor={'transparent'}
                    mode={"outlined"}
                    value={eventText}
                    error={eventError}
                    dense={true}
                    maxLength={Validation.inputMaxEvent}
                    left={<TextInput.Icon
                      color={() => eventText.length > 0 ? currentTheme.colors.secondary : currentTheme.colors.onSurfaceVariant
                      }
                      icon="crosshairs-gps"/>}
                    onChangeText={input => {
                      setEventText(input);
                    }}
                    onFocus={() => setEventError(false)}
                  />
                </View>
                {eventError && (
                  <HelperText style={ModalStyle.modalContentInputHelperText}
                              type="error" visible={eventError}>
                    {currentLanguage.inputFieldErrorMandatory}
                  </HelperText>)}
                <View style={ModalStyle.modalContentInputFieldWrapper}>
                  <TextInput
                    style={ModalStyle.modalContentInputField}
                    outlineStyle={ModalStyle.modalContentInputFieldOutline}
                    placeholder={currentLanguage.inputFieldDatePlaceholder}
                    textColor={currentTheme.colors.secondary}
                    outlineColor={'transparent'}
                    mode={"outlined"}
                    value={dateText}
                    error={dateError}
                    dense={true}
                    maxLength={Validation.inputMaxDate}
                    left={<TextInput.Icon icon="clock-check-outline"
                                          disabled={true}/>}
                    onChangeText={input => {
                      setDateText(input);
                    }}
                    onFocus={() => {
                      setDateError(false);
                      setShowDateModal(true)
                    }}
                  />
                </View>
                {dateError && (
                  <HelperText style={ModalStyle.modalContentInputHelperText}
                              type="error" visible={dateError}>
                    {currentLanguage.inputFieldDateError}
                  </HelperText>)}
                <View style={ModalStyle.modalButtonWrapper}>
                  <TouchableRipple
                    theme={currentTheme}
                    borderless={true}
                    style={ModalStyle.modalContentButton2}
                    onPress={() => processForm()}
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
        </View>
      </Modal>
      <View style={HeaderStyle.leftContainer}>
        {props.screen === "category" && (
          <TouchableRipple theme={currentTheme} borderless={true}
                           onPress={() => navigation.goBack()}
                           style={HeaderStyle.leftIcon}>
            <Ionicons name={"arrow-back"}
                      size={IconSettings.buttonIconSize}
                      color={currentTheme.colors.secondary}>

            </Ionicons>
          </TouchableRipple>
        )}
      </View>
      <View style={HeaderStyle.centerContainer}>
        <Text style={HeaderStyle.centerText}>{props.title}</Text>
      </View>
      <View style={HeaderStyle.rightContainer}>
        {props.screen === "lists" && (
          <TouchableRipple theme={currentTheme} borderless={true}
                           onPress={() => setShowListModal(true)}
                           style={HeaderStyle.rightIcon}>
            <MaterialCommunityIcon name={props.modalIconAdd}
                                   size={IconSettings.buttonIconSize}
                                   color={currentTheme.colors.secondary}
                                   direction={"rtl"}/>
          </TouchableRipple>
        )}
      </View>
    </View>
  );
};
