import {Modal, Text, ToastAndroid, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {createHeaderStyle} from './HeaderStyle';
import {IconSettings} from "../constants/IconSettings";
import {HelperText, TextInput, TouchableRipple} from "react-native-paper";
import createModalStyle from "./ModalStyle";
import {Context} from "../context/Context";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import {dateRegex, ValidationSettings} from "../constants/ValidationSettings";
import * as SQLite from "expo-sqlite";

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
    const database = SQLite.openDatabaseAsync("lists.db");

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

    const validateForm = () => {
        const headlineValidationResult = headlineText.length > 0;
        const descriptionValidationResult = descriptionText.length > 0;
        const eventValidationResult = eventText.length > 0;
        const dateValidationResult = dateRegex.test(dateText);
        setHeadlineError(!headlineValidationResult);
        setDescriptionError(!descriptionValidationResult);
        setEventError(!eventValidationResult);
        setDateError(!dateValidationResult);
        return headlineValidationResult && descriptionValidationResult
            && eventValidationResult && dateValidationResult;
    }

    const processForm = async () => {
        const validationResult = validateForm();
        if (validationResult) {
            const result = true;
            if (result) {
                database.transaction(transaction => {
                    transaction.executeSql(
                        'CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY AUTOINCREMENT, headline TEXT, description TEXT, event TEXT, date TEXT)',
                        null,
                        (trx, resultSet) => console.log("Create Table lists"),
                        (trx, error) => console.log(error)
                    )
                });

                database.transaction(transaction => {
                    transaction.executeSql(
                        'INSERT INTO lists (headline, description, event, date) VALUES'
                        + ' (?,?,?,?)',
                        [headlineText, descriptionText, eventText, dateText],
                        (transactionObj, resultSet) => console.log(resultSet.rows._array),
                        (transaction, error) => console.log(error));
                });

                database.transaction(transaction => {
                    transaction.executeSql(
                        'SELECT * FROM lists',
                        null,
                        (transactionObject, resultSet) => console.log(
                            resultSet.rows._array),
                        (transaction, error) => console.log(error));
                });
                ToastAndroid.show(currentLanguage.toastAddList, ToastAndroid.LONG);
                setShowListModal(false);
            }
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
                                placeholder={currentLanguage.inputFieldHeadlinePlaceholder}
                                mode={"outlined"}
                                value={headlineText}
                                error={headlineError}
                                dense={true}
                                maxLength={ValidationSettings.inputMaxHeadline}
                                left={<TextInput.Icon icon="view-headline"
                                                      disabled={true}/>}
                                onChangeText={input => {
                                    setHeadlineText(input);
                                }}
                            />
                            {headlineError && (
                                <HelperText style={ModalStyle.modalContentInputHelperText}
                                            type="error" visible={headlineError}>
                                    {currentLanguage.inputFieldErrorMandatory}
                                </HelperText>)}
                            <TextInput
                                style={ModalStyle.modalContentInputField}
                                label={currentLanguage.inputFieldDescription}
                                placeholder={currentLanguage.inputFieldDescriptionPlaceholder}
                                mode={"outlined"}
                                value={descriptionText}
                                error={descriptionError}
                                dense={true}
                                maxLength={ValidationSettings.inputMaxDescription}
                                left={<TextInput.Icon icon="card-text-outline"
                                                      disabled={true}/>}
                                onChangeText={input => {
                                    setDescriptionText(input);
                                }}
                            />
                            {descriptionError && (
                                <HelperText style={ModalStyle.modalContentInputHelperText}
                                            type="error" visible={descriptionError}>
                                    {currentLanguage.inputFieldErrorMandatory}
                                </HelperText>)}
                            <TextInput
                                style={ModalStyle.modalContentInputField}
                                label={currentLanguage.inputFieldEvent}
                                placeholder={currentLanguage.inputFieldEventPlaceholder}
                                mode={"outlined"}
                                value={eventText}
                                error={eventError}
                                dense={true}
                                maxLength={ValidationSettings.inputMaxEvent}
                                left={<TextInput.Icon icon="crosshairs-gps"
                                                      disabled={true}/>}
                                onChangeText={input => {
                                    setEventText(input);
                                }}
                            />
                            {eventError && (
                                <HelperText style={ModalStyle.modalContentInputHelperText}
                                            type="error" visible={eventError}>
                                    {currentLanguage.inputFieldErrorMandatory}
                                </HelperText>)}
                            <TextInput
                                style={ModalStyle.modalContentInputField}
                                label={currentLanguage.inputFieldDate}
                                placeholder={currentLanguage.inputFieldDatePlaceholder}
                                mode={"outlined"}
                                value={dateText}
                                error={dateError}
                                dense={true}
                                maxLength={ValidationSettings.inputMaxDate}
                                left={<TextInput.Icon icon="clock-check-outline"
                                                      disabled={true}/>}
                                onChangeText={input => {
                                    setDateText(input);
                                }}
                            />
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
