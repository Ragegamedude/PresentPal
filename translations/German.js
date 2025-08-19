import Constants from "expo-constants";

export const German = {
  // --- Introduction & Onboarding ---
  introductionDone: "Fertig",
  introductionSkip: "Überspringen",
  introductionNext: "Weiter",
  introductionIntroduction1: "Willkommen",
  introductionSlideHeadline1: "Wir freuen uns, dich bei uns zu haben!",
  introductionSlideDescription1:
    "Danke, dass du unsere App gewählt hast. Wir helfen dir, die perfekten Geschenke zu finden und zu organisieren. Wähle deine Sprache, die du später in den Einstellungen ändern kannst.",
  introductionIntroduction2: "Inspiration",
  introductionSlideHeadline2: "Entdecke tolle Geschenkideen",
  introductionSlideDescription2:
    "Entdecke eine Auswahl einzigartiger Geschenke von unseren Partnern. Ob zum Geburtstag oder zu Feiertagen, du findest das perfekte Präsent für jeden besonderen Anlass.",
  introductionIntroduction3: "Organisation",
  introductionSlideHeadline3: "Erstelle und verwalte Listen",
  introductionSlideDescription3:
    "Bleib perfekt organisiert, indem du persönliche Geschenklisten für Freunde und Familie erstellst. Füge Ideen hinzu, verfolge Käufe und hake alles ab, um nichts zu vergessen.",
  introductionIntroduction4: "Erlebnis",
  introductionSlideHeadline4: "Dein Werbeerlebnis",
  introductionSlideDescription4:
    "Um die App kostenlos anzubieten, zeigen wir minimale Werbung. Für ein erlebnis ohne Werbung kannst du jederzeit in den Einstellungen auf die Pro-Version upgraden.",
  introductionIntroduction5: "Loslegen",
  introductionSlideHeadline5: "Einrichtung abgeschlossen",
  introductionSlideDescription5:
    "Alles ist startklar! Für weitere Möglichkeiten zur Personalisierung, besuche den Einstellungsbereich. Entdecke alle Optionen, um die App zu deiner eigenen zu machen.",

  // --- Language Selection ---
  introductionChangeLanguageDescription: "Wähle die Sprache der App aus",
  languageGerman: "Deutsch",
  languageEnglish: "Englisch",
  languageSpanish: "Spanisch",
  languagePortuguese: "Portugiesisch",
  languageFrench: "Französisch",

  // --- Global ---
  loading: "Lädt...",
  buttonCloseText: "Schließen",
  buttonConfirmText: "Ja",
  buttonDeclineText: "Nein",
  buttonStartText: "Starten",
  buttonCancelText: "Abbrechen",
  buttonSaveText: "Speichern",
  buttonVisitText: "Besuchen",

  // --- Home Screen ---
  homeScreenTitle: "Start",
  homeSectionUser: "Argames15",
  homeReadMore: "Mehr lesen...",
  homeSectionTopic1: "Neuigkeiten",
  homeSectionTitle1: "Willkommen zur App!",
  homeSectionMessage1:
    "Wir freuen uns, unsere neue App vorzustellen, " +
    "\"" +
    Constants.expoConfig.name +
    "\"" +
    ", die das Schenken mühelos und angenehm machen soll.\n\nUnser Ziel ist es, dir zu helfen, organisiert zu bleiben und das perfekte Geschenk für jeden Anlass zu finden.",
  homeSectionDate1: "19.08.2025",

  // --- Lists Screen ---
  listsScreenTitle: "Listen",
  listsScreenEmptyText: "Du hast noch keine Listen. Tippe unten, um eine zu erstellen!",
  listsAddList: "Neue Liste erstellen",
  listsAdd: "Hinzufügen",
  listsDeleteList: "Liste erfolgreich gelöscht.",
  listGiftAmount: "Geschenke: ",
  listGiftTotal: "Gesamt: ",

  // --- Gifts Screen ---
  giftsScreenTitle: "Geschenke",
  giftsInformationHeadline: "Inspiration",
  giftsInformationText: "Entdecke tolle Geschenkideen für jeden Anlass, speziell für dich ausgewählt.",
  giftsCategoryBirthday: "Geburtstag",
  giftsCategoryValentine: "Valentinstag",
  giftsCategoryChristmas: "Weihnachten",
  giftsCategoryWedding: "Hochzeit",
  giftsChip5: "Kategorie 5",
  giftsChip6: "Kategorie 6",

  // --- Settings Screen ---
  settingsScreenTitle: "Einstellungen",
  settingsLanguageHeadline: "Sprache",
  settingsLanguageDescription: "Ändere die Anzeigesprache der App.",
  settingsThemeHeadline: "Design",
  settingsThemeDescription: "Wähle zwischen hellem und dunklem Design.",
  settingsContactHeadline: "Kontakt",
  settingsContactDescription: "Sende uns deine Fragen oder dein Feedback.",
  settingsInformationHeadline: "Über",
  settingsInformationDescription: "Zeige Versionsdetails und App-Infos an.",
  settingsInformationModalHeadline: "App-Informationen",
  settingsInformationModalContent:
    Constants.expoConfig.name + "\n" +
    "Version: " + Constants.expoConfig.version,
  settingsStatusHeadlineVersion: "Version",
  settingsStatusHeadlineFreeVersion: "Kostenlos",
  settingsStatusHeadlinePremiumVersion: "Premium",
  settingsStatusHeadlineLimit: "Listenlimit",
  settingsTermsConditionsHeadline: "AGB",
  settingsTermsConditionsDescription: "Lies unsere Allgemeinen Geschäftsbedingungen.",
  settingsPrivacyPolicyHeadline: "Datenschutzrichtlinie",
  settingsPrivacyPolicyDescription: "Erfahre, wie wir deine Daten schützen.",
  settingsDisclaimerHeadline: "Haftungsausschluss",
  settingsDisclaimerDescription: "Sieh dir den Haftungsausschluss an.",
  settingsPersonalAdsHeadline: "Personalisierte Werbung",
  settingsPersonalAdsDescription: "Personalisierte Werbung erlauben.",
  settingsThemeLight: "Hell",
  settingsThemeDark: "Dunkel",

  // --- Input Fields & Forms ---
  inputFieldHeadline: "Titel",
  inputFieldHeadlinePlaceholder: "Gib einen Titel ein",
  inputFieldDescription: "Beschreibung",
  inputFieldDescriptionPlaceholder: "Gib eine Beschreibung ein",
  inputFieldEvent: "Anlass",
  inputFieldEventPlaceholder: "z.B. Weihnachten, Geburtstag",
  inputFieldDate: "Datum",
  inputFieldDatePlaceholder: "TT.MM.JJJJ",
  inputFieldDateError: "Ungültiges Datumsformat. Bitte TT.MM.JJJJ verwenden.",
  inputFieldErrorMandatory: "Dieses Feld ist erforderlich.",

  // --- Toasts & Modals ---
  toastAddList: "Liste erfolgreich hinzugefügt.",
  modalDeleteHeadline: "Liste löschen",
  modalDeleteWarning: "Möchtest du diese Liste wirklich löschen?\nDieser Vorgang kann nicht rückgängig gemacht werden.",

  // --- Error Messages ---
  errorHeadline: "Ein Fehler ist aufgetreten",
  errorMessageNotReachable: "Verbindung fehlgeschlagen. Bitte prüfe deine Internetverbindung.",
  errorMessagePermissionDenied: "Berechtigung verweigert. Bitte erteile sie in den Einstellungen.",
  errorMessageUnknown: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später erneut."
};