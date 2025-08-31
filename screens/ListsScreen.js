import React, {useContext, useEffect, useRef, useState} from "react";
import {Modal, ScrollView, Text, View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {Avatar, Checkbox, PaperProvider, TextInput, TouchableRipple} from "react-native-paper";
import Header from '../components/Header';
import List from '../components/List';
import {AppVersions} from '../constants/AppVersions';
import {Context} from '../context/Context';
import {createListsScreenStyle} from './ListsScreenStyle';
import * as DatabaseAdapter from "../database/DatabaseAdapter";
import {useSQLiteContext} from "expo-sqlite";
import {validateDate, validateRequired, Validation} from "../validation/Validation";
import {format} from "date-fns";
import * as ImagePicker from "expo-image-picker";
import createModalStyle from "../components/ModalStyle";
import {DatePickerModal} from "react-native-paper-dates";
import {TranslationManager} from "../translations/TranslationManager";

export default ListsScreen = ({navigation, props}) => {
  const database = useSQLiteContext();
  const {theme, language, version, personalAds, lists} = useContext(Context);
  const [currentTheme] = theme;
  const [currentLanguage] = language;
  const [currentVersion] = version;
  const [showPersonalAds] = personalAds;
  const [currentLists, setCurrentLists] = lists;

  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9694787014775307/4284015587';

  // modals
  const [showAddListModal, setShowListModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [useDefaultImage, setUseDefaultImage] = useState(false);

  // refs
  const datePickerRef = useRef(null);
  const imageSelectInputRef = useRef(null)

  // states
  const [headlineText, setHeadlineText] = useState("");
  const [headlineError, setHeadlineError] = useState(false);
  const [descriptionText, setDescriptionText] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);
  const [eventText, setEventText] = useState("");
  const [eventError, setEventError] = useState(false);
  const [imageText, setImageText] = useState("");
  const [imageError, setImageError] = useState(false);
  const [dateText, setDateText] = useState("");
  const [dateTextUnformatted, setDateTextUnformatted] = useState(new Date());
  const [dateError, setDateError] = useState(false);
  const [modalMode, setModalMode] = useState("");
  const [selectedList, setSelectedList] = useState();

  const ListsScreenStyle = createListsScreenStyle(currentTheme);
  const ModalStyle = createModalStyle(currentTheme);

  useEffect(() => {
    const loadLists = async () => {
      const lists = await DatabaseAdapter.getLists(database);
      setCurrentLists(lists);
    };
    const ignored = loadLists();
  }, []);

  const startDate = new Date();
  const endDate = new Date(startDate.getFullYear() + 100, startDate.getMonth(), startDate.getDate());

  const validRange = {
    startDate,
    endDate,
  }

  const addList = async () => {
    await DatabaseAdapter.addList(database, 0,
      headlineText, descriptionText, imageText, dateText, eventText, JSON.stringify([
        {
          id: 'b6f2c3d5-7e8c-4a1b-9d4f-5e6f7g8h9i0j',
          name: 'Wireless Noise-Cancelling Headphones',
          price: 24.99,
          finished: true,
          link: 'https://www.google.com/search?q=https://example.com/headphones'
        },
        {
          id: 'c8a9d0f1-2b3c-4d5e-6f7a-8b9c0d1e2f3g',
          name: 'Gourmet Coffee Subscription',
          price: 45.00,
          finished: true,
          link: 'https://www.google.com/search?q=https://example.com/coffee'
        },
        {
          id: 'e1g2h3i4-5j6k-7l8m-9n0o-1p2q3r4s5t6u',
          name: 'Portable Bluetooth Speaker',
          price: 79.99,
          finished: false,
          link: 'https://www.google.com/search?q=https://example.com/speaker'
        },
        {
          id: 'f9h0i1j2-3k4l-5m6n-7o8p-9q0r1s2t3u4v',
          name: 'Scented Candle Set',
          price: 28.50,
          finished: true,
          link: 'https://www.google.com/search?q=https://example.com/candles'
        },
        {
          id: 'a0b1c2d3-4e5f-6g7h-8i9j-0k1l2m3n4o5p',
          name: 'Personalized Leather Wallet',
          price: 65.00,
          finished: true,
          link: 'https://www.google.com/search?q=https://example.com/wallet'
        }
      ]));
    const lists = await DatabaseAdapter.getLists(database);
    setCurrentLists(lists);
  };

  const deleteList = async () => {
    await DatabaseAdapter.deleteList(database, selectedList.id);
    const lists = await DatabaseAdapter.getLists(database);
    setCurrentLists(lists);
    closeModal();
  };

  const editList = async () => {
    await DatabaseAdapter.editList(database, selectedList.id, selectedList.favorite, headlineText, descriptionText, imageText, dateText, eventText, JSON.stringify(selectedList.gifts));
    const lists = await DatabaseAdapter.getLists(database);
    setCurrentLists(lists);
    closeModal();
  }

  const toggleFavoriteItem = async (item) => {
    await DatabaseAdapter.toggleFavorite(database, item.id, item.favorite);
    const lists = await DatabaseAdapter.getLists(database);
    setCurrentLists(lists);
  };

  const resetForm = () => {
    setHeadlineText("");
    setHeadlineError(false);
    setDescriptionText("");
    setDescriptionError(false);
    setEventText("");
    setEventError(false);
    setDateText("");
    setDateError(false);
    setImageText("")
    setImageError(false);
    setUseDefaultImage(false);
  };

  const validateForm = () => {
    const headlineValidationResult = validateRequired(headlineText);
    const descriptionValidationResult = validateRequired(descriptionText);
    const eventValidationResult = validateRequired(eventText);
    const dateValidationResult = validateDate(dateText);
    const imageValidationResult = validateRequired(imageText);
    setHeadlineError(!headlineValidationResult);
    setDescriptionError(!descriptionValidationResult);
    setEventError(!eventValidationResult);
    setDateError(!dateValidationResult);
    setImageError(!imageValidationResult);
    return headlineValidationResult && descriptionValidationResult
      && eventValidationResult && dateValidationResult && imageValidationResult;
  };

  const processForm = async () => {
    const validationResult = validateForm();
    if (validationResult) {
      if (modalMode === ModalMode.ADD_MODE) {
        await addList();
      } else if (modalMode === ModalMode.EDIT_MODE) {
        await editList();
      }
      closeModal();
      resetForm();
    }
  };

  const setDateTextFormatted = (input) => {
    const formatted = format(input.date, 'dd.MM.yyyy');
    setDateText(formatted);
    setDateTextUnformatted(input.date);
    setShowDateModal(false);
  }

  const pickListImage = async () => {
    let imageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      quality: 0.1,
    })

    if (!imageResult.canceled) {
      setImageText(imageResult.assets[0].uri);
    }
  }

  const openAddModal = () => {
    setModalMode(ModalMode.ADD_MODE);
    setShowListModal(true);
  }

  const openEditModal = (item) => {
    setModalMode(ModalMode.EDIT_MODE);
    setSelectedList(item);
    setHeadlineText(item.headline);
    setDescriptionText(item.description);
    setEventText(item.event);
    setDateText(item.event_date);
    setImageText(item.image);
    setShowListModal(true);
  }

  const openDeleteModal = (item) => {
    setSelectedList(item);
    setShowDeleteModal(true);
  }

  const closeModal = () => {
    setModalMode("");
    setSelectedList(undefined);
    setShowListModal(false);
    setShowDeleteModal(false);
  }

  return (
    <PaperProvider theme={currentTheme}>
      <View style={ListsScreenStyle.lists}>
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
                  {modalMode === ModalMode.ADD_MODE ? currentLanguage.listsAddList : currentLanguage.listsEditList}
                </Text>
              </View>
              <View style={ModalStyle.modalContent}>
                <View style={ModalStyle.modalContentWrapper}>
                  <View style={ModalStyle.modalContentInputFieldWrapper}>
                    <TextInput
                      style={ModalStyle.modalContentInputField}
                      outlineStyle={ModalStyle.modalContentInputFieldOutline}
                      placeholder={headlineError ? currentLanguage.inputFieldErrorMandatory + currentLanguage.inputFieldHeadline : currentLanguage.inputFieldHeadlinePlaceholder}
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
                  <View style={ModalStyle.modalContentInputFieldWrapper}>
                    <TextInput
                      style={ModalStyle.modalContentInputField}
                      outlineStyle={ModalStyle.modalContentInputFieldOutline}
                      placeholder={descriptionError ? currentLanguage.inputFieldErrorMandatory + currentLanguage.inputFieldDescription : currentLanguage.inputFieldDescriptionPlaceholder}
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
                  <View style={ModalStyle.modalContentInputFieldWrapper}>
                    <TextInput
                      style={ModalStyle.modalContentInputField}
                      outlineStyle={ModalStyle.modalContentInputFieldOutline}
                      placeholder={eventError ? currentLanguage.inputFieldErrorMandatory + currentLanguage.inputFieldEvent : currentLanguage.inputFieldEventPlaceholder}
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
                  <View style={ModalStyle.modalContentInputFieldWrapper}>
                    <TextInput
                      ref={datePickerRef}
                      style={ModalStyle.modalContentInputField}
                      outlineStyle={ModalStyle.modalContentInputFieldOutline}
                      placeholder={dateError ? currentLanguage.inputFieldErrorMandatory + currentLanguage.inputFieldDate : currentLanguage.inputFieldDatePlaceholder}
                      textColor={currentTheme.colors.secondary}
                      outlineColor={'transparent'}
                      mode={"outlined"}
                      value={dateText}
                      error={dateError}
                      dense={true}
                      maxLength={Validation.inputMaxDate}
                      left={<TextInput.Icon
                        color={() => headlineText.length > 0 ? currentTheme.colors.secondary : currentTheme.colors.onSurfaceVariant
                        } icon="clock-check-outline"/>}
                      onFocus={() => {
                        setDateError(false);
                        setShowDateModal(true);
                        datePickerRef.current.blur();
                      }}
                    />
                  </View>
                  <View style={ModalStyle.modalContentInputFieldWrapper}>
                    <TextInput
                      ref={imageSelectInputRef}
                      style={ModalStyle.modalContentInputField}
                      outlineStyle={ModalStyle.modalContentInputFieldOutline}
                      placeholder={imageError ? currentLanguage.inputFieldErrorMandatory + currentLanguage.inputFieldImage : currentLanguage.inputFieldImagePlaceholder}
                      textColor={currentTheme.colors.secondary}
                      outlineColor={'transparent'}
                      mode={"outlined"}
                      value={imageText}
                      error={imageError}
                      dense={true}
                      left={<TextInput.Icon
                        color={() => imageText.length > 0 ? currentTheme.colors.secondary : currentTheme.colors.onSurfaceVariant
                        }
                        icon="image"/>}
                      onFocus={() => {
                        setImageError(false);
                        pickListImage();
                        imageSelectInputRef.current.blur();
                      }}
                    />
                  </View>
                  <View style={ModalStyle.modalDefaultImageSelectorTextWrapper}>
                    <Checkbox
                      style={ModalStyle.modalDefaultImageSelectorCheckbox}
                      status={useDefaultImage ? 'checked' : 'unchecked'}
                      position={"leading"}
                      onPress={() => {
                        setUseDefaultImage(!useDefaultImage);
                      }}
                    />
                    <Text style={ModalStyle.modalDefaultImageSelectorText}>{currentLanguage.modalImageDefaultHint}</Text>
                  </View>
                  {useDefaultImage && (<View>
                    <View style={ModalStyle.modalDefaultImageButtonWrapper}>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton1}
                        onPress={() => setImageText('../assets/avatars/0.png')}>
                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/0.png')}
                        />
                      </TouchableRipple>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton2}
                        onPress={() => setImageText('../assets/avatars/1.png')}>
                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/1.png')}
                        />
                      </TouchableRipple>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton2}
                        onPress={() => setImageText('../assets/avatars/2.png')}>
                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/2.png')}
                        />
                      </TouchableRipple>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton2}
                        onPress={() => setImageText('../assets/avatars/3.png')}>

                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/3.png')}
                        />

                      </TouchableRipple>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton3}
                        onPress={() => setImageText('../assets/avatars/4.png')}>
                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/4.png')}
                        />
                      </TouchableRipple>
                    </View>
                    <View style={ModalStyle.modalDefaultImageButtonWrapper}>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton1}
                        onPress={() => setImageText('../assets/avatars/5.png')}>
                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/5.png')}
                        />
                      </TouchableRipple>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton2}
                        onPress={() => setImageText('../assets/avatars/6.png')}>
                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/6.png')}
                        />
                      </TouchableRipple>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton2}
                        onPress={() => setImageText('../assets/avatars/7.png')}>
                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/7.png')}
                        />
                      </TouchableRipple>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton2}
                        onPress={() => setImageText('../assets/avatars/8.png')}>

                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/8.png')}
                        />

                      </TouchableRipple>
                      <TouchableRipple
                        style={ModalStyle.modalDefaultImageButton3}
                        onPress={() => setImageText('../assets/avatars/9.png')}>
                        <Avatar.Image
                          style={ModalStyle.modalDefaultImage}
                          source={require('../assets/avatars/9.png')}
                        />
                      </TouchableRipple>
                    </View>
                  </View>)}
                  <View style={ModalStyle.modalButtonWrapper}>
                    <TouchableRipple
                      theme={currentTheme}
                      borderless={true}
                      style={ModalStyle.modalContentButton2}
                      onPress={() => processForm()}
                    >
                      <Text style={ModalStyle.modalContentButtonText}>
                        {modalMode === ModalMode.ADD_MODE ? currentLanguage.listsAdd : currentLanguage.listsEdit}
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
                    onPress={() => deleteList()}
                  >
                    <Text style={ModalStyle.modalContentButtonText}>
                      {currentLanguage.buttonConfirmText}
                    </Text>
                  </TouchableRipple>
                  <TouchableRipple
                    theme={currentTheme}
                    borderless={true}
                    style={ModalStyle.modalContentButton3}
                    onPress={() => closeModal()}
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
        <Header screen={'lists'} title={currentLanguage.listsScreenTitle}
                modalIconAdd={'add-to-list'} rightFunction={openAddModal}></Header>
        {currentLists.length === 0 && (
          <View style={ListsScreenStyle.contentEmpty}>
            <Text
              style={ListsScreenStyle.contentEmptyText}>{currentLanguage.listsScreenEmptyText}</Text>
          </View>
        )}
        {currentLists.length > 0 && (
          <ScrollView showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                      style={ListsScreenStyle.listsWrapper}
          >
            {currentLists.map((item, index) => (
              <List
                key={item.id}
                item={item}
                editFunction={openEditModal}
                deleteFunction={openDeleteModal}
                toggleFavoriteFunction={toggleFavoriteItem}
                lastElement={index === (currentLists.length - 1)}>
              </List>
            ))}
          </ScrollView>
        )}
        {currentVersion === AppVersions.LIGHT && (
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: showPersonalAds
            }}
          ></BannerAd>
        )}
      </View>
    </PaperProvider>
  );
};

export const ModalMode = {
  EDIT_MODE: 'edit',
  ADD_MODE: 'add',
}
