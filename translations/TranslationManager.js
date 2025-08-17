import {English} from "./English";
import {German} from "./German";
import {Spanish} from "./Spanish";
import {Portuguese} from "./Portuguese";
import {French} from "./French";
import {registerTranslation} from "react-native-paper-dates";

export const AvailableLanguages = {
  GERMAN: 'german',
  ENGLISH: 'english',
  SPANISH: 'spanish',
  PORTUGUESE: 'portuguese',
  FRENCH: 'french'
};

export const TranslationManager = {
  getLanguageObject: function (language) {
    let selectedLanguage;
    if (language === AvailableLanguages.ENGLISH) {
      selectedLanguage = English;
    } else if (language === AvailableLanguages.GERMAN) {
      selectedLanguage = German;
    } else if (language === AvailableLanguages.SPANISH) {
      selectedLanguage = Spanish;
    } else if (language === AvailableLanguages.PORTUGUESE) {
      selectedLanguage = Portuguese;
    } else if (language === AvailableLanguages.FRENCH) {
      selectedLanguage = French;
    } else {
      selectedLanguage = English;
    }
    return selectedLanguage;
  },
  getCurrentLanguageAsIsoString: function (currentLanguage) {
    let currentIso;
    if (currentLanguage === German) {
      currentIso = 'de';
    } else if (currentLanguage === English) {
      currentIso = 'us';
    } else if (currentLanguage === Spanish) {
      currentIso = 'es';
    } else if (currentLanguage === Portuguese) {
      currentIso = 'pt';
    } else if (currentLanguage === French) {
      currentIso = 'fr';
    }
    return currentIso;
  },
  registerDatePickerTranslations: function () {
    registerTranslation('de-custom', {
      selectSingle: German.inputFieldDatePickerSelectSingle,
      selectMultiple: German.inputFieldDatePickerSelectMultiple,
      selectRange: German.inputFieldDatePickerSelectRange,
      save: German.inputFieldDatePickerSave,
      notAccordingToDateFormat: (inputFormat) => German.inputFieldDatePickerWrongFormat + inputFormat,
      mustBeHigherThan: (date) => German.inputFieldDatePickerMustBeHigher + date,
      mustBeLowerThan: (date) => German.inputFieldDatePickerMustBeLower + date,
      mustBeBetween: (startDate, endDate) => German.inputFieldDatePickerMustBeBetween + startDate + "-" + endDate,
      dateIsDisabled: German.inputFieldDatePickerDisabledDate,
      previous: German.inputFieldDatePickerPrevious,
      next: German.inputFieldDatePickerNext,
      typeInDate: German.inputFieldDatePickerTypeInDate,
      pickDateFromCalendar: German.inputFieldDatePickerPickFromCalender,
      close: German.inputFieldDatePickerClose,
      hour: German.inputFieldDatePickerHour,
      minute: German.inputFieldDatePickerMinute
    });

    registerTranslation('us-custom', {
      selectSingle: English.inputFieldDatePickerSelectSingle,
      selectMultiple: English.inputFieldDatePickerSelectMultiple,
      selectRange: English.inputFieldDatePickerSelectRange,
      save: English.inputFieldDatePickerSave,
      notAccordingToDateFormat: (inputFormat) => English.inputFieldDatePickerWrongFormat + inputFormat,
      mustBeHigherThan: (date) => English.inputFieldDatePickerMustBeHigher + date,
      mustBeLowerThan: (date) => English.inputFieldDatePickerMustBeLower + date,
      mustBeBetween: (startDate, endDate) => English.inputFieldDatePickerMustBeBetween + startDate + "-" + endDate,
      dateIsDisabled: English.inputFieldDatePickerDisabledDate,
      previous: English.inputFieldDatePickerPrevious,
      next: English.inputFieldDatePickerNext,
      typeInDate: English.inputFieldDatePickerTypeInDate,
      pickDateFromCalendar: English.inputFieldDatePickerPickFromCalender,
      close: English.inputFieldDatePickerClose,
      hour: English.inputFieldDatePickerHour,
      minute: English.inputFieldDatePickerMinute
    });

    registerTranslation('es-custom', {
      selectSingle: Spanish.inputFieldDatePickerSelectSingle,
      selectMultiple: Spanish.inputFieldDatePickerSelectMultiple,
      selectRange: Spanish.inputFieldDatePickerSelectRange,
      save: Spanish.inputFieldDatePickerSave,
      notAccordingToDateFormat: (inputFormat) => Spanish.inputFieldDatePickerWrongFormat + inputFormat,
      mustBeHigherThan: (date) => Spanish.inputFieldDatePickerMustBeHigher + date,
      mustBeLowerThan: (date) => Spanish.inputFieldDatePickerMustBeLower + date,
      mustBeBetween: (startDate, endDate) => Spanish.inputFieldDatePickerMustBeBetween + startDate + "-" + endDate,
      dateIsDisabled: Spanish.inputFieldDatePickerDisabledDate,
      previous: Spanish.inputFieldDatePickerPrevious,
      next: Spanish.inputFieldDatePickerNext,
      typeInDate: Spanish.inputFieldDatePickerTypeInDate,
      pickDateFromCalendar: Spanish.inputFieldDatePickerPickFromCalender,
      close: Spanish.inputFieldDatePickerClose,
      hour: Spanish.inputFieldDatePickerHour,
      minute: Spanish.inputFieldDatePickerMinute
    });

    registerTranslation('pt-custom', {
      selectSingle: Portuguese.inputFieldDatePickerSelectSingle,
      selectMultiple: Portuguese.inputFieldDatePickerSelectMultiple,
      selectRange: Portuguese.inputFieldDatePickerSelectRange,
      save: Portuguese.inputFieldDatePickerSave,
      notAccordingToDateFormat: (inputFormat) => Portuguese.inputFieldDatePickerWrongFormat + inputFormat,
      mustBeHigherThan: (date) => Portuguese.inputFieldDatePickerMustBeHigher + date,
      mustBeLowerThan: (date) => Portuguese.inputFieldDatePickerMustBeLower + date,
      mustBeBetween: (startDate, endDate) => Portuguese.inputFieldDatePickerMustBeBetween + startDate + "-" + endDate,
      dateIsDisabled: Portuguese.inputFieldDatePickerDisabledDate,
      previous: Portuguese.inputFieldDatePickerPrevious,
      next: Portuguese.inputFieldDatePickerNext,
      typeInDate: Portuguese.inputFieldDatePickerTypeInDate,
      pickDateFromCalendar: Portuguese.inputFieldDatePickerPickFromCalender,
      close: Portuguese.inputFieldDatePickerClose,
      hour: Portuguese.inputFieldDatePickerHour,
      minute: Portuguese.inputFieldDatePickerMinute
    });

    registerTranslation('fr-custom', {
      selectSingle: French.inputFieldDatePickerSelectSingle,
      selectMultiple: French.inputFieldDatePickerSelectMultiple,
      selectRange: French.inputFieldDatePickerSelectRange,
      save: French.inputFieldDatePickerSave,
      notAccordingToDateFormat: (inputFormat) => French.inputFieldDatePickerWrongFormat + inputFormat,
      mustBeHigherThan: (date) => French.inputFieldDatePickerMustBeHigher + date,
      mustBeLowerThan: (date) => French.inputFieldDatePickerMustBeLower + date,
      mustBeBetween: (startDate, endDate) => French.inputFieldDatePickerMustBeBetween + startDate + "-" + endDate,
      dateIsDisabled: French.inputFieldDatePickerDisabledDate,
      previous: French.inputFieldDatePickerPrevious,
      next: French.inputFieldDatePickerNext,
      typeInDate: French.inputFieldDatePickerTypeInDate,
      pickDateFromCalendar: French.inputFieldDatePickerPickFromCalender,
      close: French.inputFieldDatePickerClose,
      hour: French.inputFieldDatePickerHour,
      minute: French.inputFieldDatePickerMinute
    });
  }
};
