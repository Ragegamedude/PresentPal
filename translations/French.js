import Constants from "expo-constants";

export const French = {
  // --- Introduction & Onboarding ---
  introductionDone: "Terminé",
  introductionSkip: "Ignorer",
  introductionNext: "Suivant",
  introductionIntroduction1: "Bienvenue",
  introductionSlideHeadline1: "Heureux de vous accueillir!",
  introductionSlideDescription1:
    "Merci d'avoir choisi notre application. Nous sommes là pour vous aider à trouver et organiser les cadeaux parfaits. Sélectionnez votre langue, modifiable plus tard dans les paramètres.",
  introductionIntroduction2: "Inspiration",
  introductionSlideHeadline2: "Nos meilleures idées cadeaux",
  introductionSlideDescription2:
    "Explorez une sélection de cadeaux uniques de nos partenaires. Que ce soit pour un anniversaire ou les fêtes, vous trouverez le présent idéal pour chaque occasion spéciale.",
  introductionIntroduction3: "Organisation",
  introductionSlideHeadline3: "Créez et gérez vos listes",
  introductionSlideDescription3:
    "Restez parfaitement organisé en créant des listes de cadeaux personnalisées. Ajoutez des idées, suivez vos achats et cochez les articles pour ne jamais rien oublier d'important.",
  introductionIntroduction4: "Expérience",
  introductionSlideHeadline4: "Votre expérience publicitaire",
  introductionSlideDescription4:
    "Pour garder l'application gratuite, nous affichons quelques publicités. Pour une expérience sans publicité, vous pouvez passer à la version Pro à tout moment dans les paramètres.",
  introductionIntroduction5: "Démarrage",
  introductionSlideHeadline5: "Configuration terminée",
  introductionSlideDescription5:
    "Vous êtes prêt à commencer ! Pour plus d'options de personnalisation, visitez le menu principal des Paramètres. Explorez toutes les options pour vous approprier l'application.",

  // --- Language Selection ---
  introductionChangeLanguageDescription: "Sélectionnez la langue de l'application",
  languageGerman: "Allemand",
  languageEnglish: "Anglais",
  languageSpanish: "Espagnol",
  languagePortuguese: "Portugais",
  languageFrench: "Français",

  // --- Global ---
  loading: "Chargement...",
  buttonCloseText: "Fermer",
  buttonConfirmText: "Oui",
  buttonDeclineText: "Non",
  buttonStartText: "Démarrer",
  buttonCancelText: "Annuler",
  buttonSaveText: "Enregistrer",
  buttonVisitText: "Visiter",

  // --- Home Screen ---
  homeScreenTitle: "Accueil",
  homeSectionUser: "Argames15",
  homeReadMore: "Lire la suite...",
  homeSectionTopic1: "Nouveautés",
  homeSectionTitle1: "Bienvenue sur l'application !",
  homeSectionMessage1:
    "Nous sommes heureux de vous présenter notre nouvelle application, " +
    "\"" +
    Constants.expoConfig.name +
    "\"" +
    ", conçue pour rendre l'offre de cadeaux simple et agréable.\n\nNotre objectif est de vous aider à rester organisé et à trouver le cadeau parfait pour chaque occasion.",
  homeSectionDate1: "19.08.2025",

  // --- Lists Screen ---
  listsScreenTitle: "Listes",
  listsScreenEmptyText: "Vous n'avez aucune liste. Appuyez ci-dessous pour en créer une !",
  listsAddList: "Créer une nouvelle liste",
  listsAdd: "Ajouter",
  listsDeleteList: "Liste supprimée avec succès.",
  listGiftAmount: "Cadeaux : ",
  listGiftTotal: "Total : ",

  // --- Gifts Screen ---
  giftsScreenTitle: "Cadeaux",
  giftsInformationHeadline: "Inspiration",
  giftsInformationText: "Découvrez de superbes idées cadeaux pour chaque occasion, sélectionnées pour vous.",
  giftsCategoryBirthday: "Anniversaire",
  giftsCategoryValentine: "Saint-Valentin",
  giftsCategoryChristmas: "Noël",
  giftsCategoryWedding: "Mariage",
  giftsChip5: "Catégorie 5",
  giftsChip6: "Catégorie 6",

  // --- Settings Screen ---
  settingsScreenTitle: "Paramètres",
  settingsLanguageHeadline: "Langue",
  settingsLanguageDescription: "Changez la langue d'affichage de l'application.",
  settingsThemeHeadline: "Thème",
  settingsThemeDescription: "Choisissez entre les thèmes clair et sombre.",
  settingsContactHeadline: "Nous contacter",
  settingsContactDescription: "Envoyez-nous vos questions ou commentaires.",
  settingsInformationHeadline: "À propos",
  settingsInformationDescription: "Voir les détails de la version et les informations sur l'application.",
  settingsInformationModalHeadline: "Informations sur l'application",
  settingsInformationModalContent:
    Constants.expoConfig.name + "\n" +
    "Version : " + Constants.expoConfig.version,
  settingsStatusHeadlineVersion: "Version",
  settingsStatusHeadlineFreeVersion: "Gratuite",
  settingsStatusHeadlinePremiumVersion: "Premium",
  settingsStatusHeadlineLimit: "Limite de listes",
  settingsTermsConditionsHeadline: "Conditions Générales",
  settingsTermsConditionsDescription: "Consultez nos conditions générales.",
  settingsPrivacyPolicyHeadline: "Politique de Confidentialité",
  settingsPrivacyPolicyDescription: "Découvrez comment nous protégeons vos données.",
  settingsDisclaimerHeadline: "Avis de non-responsabilité",
  settingsDisclaimerDescription: "Consultez l'avis de non-responsabilité.",
  settingsPersonalAdsHeadline: "Publicités personnalisées",
  settingsPersonalAdsDescription: "Autoriser la publicité personnalisée.",
  settingsThemeLight: "Clair",
  settingsThemeDark: "Sombre",

  // --- Input Fields & Forms ---
  inputFieldHeadline: "Titre",
  inputFieldHeadlinePlaceholder: "Entrez un titre",
  inputFieldDescription: "Description",
  inputFieldDescriptionPlaceholder: "Entrez une description",
  inputFieldEvent: "Événement",
  inputFieldEventPlaceholder: "ex: Noël, Anniversaire",
  inputFieldDate: "Date",
  inputFieldDatePlaceholder: "JJ.MM.AAAA",
  inputFieldDateError: "Format de date invalide. Veuillez utiliser JJ.MM.AAAA.",
  inputFieldErrorMandatory: "Ce champ est obligatoire.",

  // --- Toasts & Modals ---
  toastAddList: "Liste ajoutée avec succès.",
  modalDeleteHeadline: "Supprimer la liste",
  modalDeleteWarning: "Êtes-vous sûr de vouloir supprimer cette liste ?\nCette action est irréversible.",

  // --- Error Messages ---
  errorHeadline: "Une erreur est survenue",
  errorMessageNotReachable: "Connexion impossible. Veuillez vérifier votre connexion Internet.",
  errorMessagePermissionDenied: "Autorisation refusée. Veuillez l'accorder dans les paramètres.",
  errorMessageUnknown: "Une erreur inattendue est survenue. Veuillez réessayer plus tard."
};