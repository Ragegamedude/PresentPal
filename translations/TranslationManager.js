import {English} from "./English";
import {German} from "./German";
import {Spanish} from "./Spanish";
import {Portuguese} from "./Portuguese";
import {French} from "./French";

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
  }
};
