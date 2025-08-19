import Constants from "expo-constants";

export const Portuguese = {
  // --- Introduction & Onboarding ---
  introductionDone: "Concluído",
  introductionSkip: "Pular",
  introductionNext: "Próximo",
  introductionIntroduction1: "Bem-vindo",
  introductionSlideHeadline1: "Estamos felizes em ter você!",
  introductionSlideDescription1:
    "Obrigado por escolher nosso aplicativo. Estamos aqui para ajudar a encontrar e organizar os presentes perfeitos. Selecione seu idioma, que pode ser alterado depois nos ajustes.",
  introductionIntroduction2: "Inspiração",
  introductionSlideHeadline2: "Ideas de regalos increíbles",
  introductionSlideDescription2:
    "Explore uma seleção de presentes exclusivos de nossos parceiros. Seja para um aniversário ou feriado, você encontrará o item ideal para cada ocasião especial que surgir.",
  introductionIntroduction3: "Organização",
  introductionSlideHeadline3: "Crie e gerencie suas listas",
  introductionSlideDescription3:
    "Mantenha-se organizado criando listas de presentes personalizadas para amigos e familiares. Adicione ideias, acompanhe compras e marque itens para nunca esquecer nada.",
  introductionIntroduction4: "Experiência",
  introductionSlideHeadline4: "Sua experiência com anúncios",
  introductionSlideDescription4:
    "Para manter o aplicativo gratuito, exibimos um número mínimo de anúncios. Para uma experiência focada e sem anúncios, você pode mudar para a versão Pro a qualquer momento.",
  introductionIntroduction5: "Começar",
  introductionSlideHeadline5: "Configuração concluída",
  introductionSlideDescription5:
    "Tudo pronto para começar! Para mais formas de personalização, visite o menu principal de Configurações. Explore todas as opções disponíveis para deixar o aplicativo do seu jeito.",

  // --- Language Selection ---
  introductionChangeLanguageDescription: "Selecione o idioma do aplicativo",
  languageGerman: "Alemão",
  languageEnglish: "Inglês",
  languageSpanish: "Espanhol",
  languagePortuguese: "Português",
  languageFrench: "Francês",

  // --- Global ---
  loading: "Carregando...",
  buttonCloseText: "Fechar",
  buttonConfirmText: "Sim",
  buttonDeclineText: "Não",
  buttonStartText: "Começar",
  buttonCancelText: "Cancelar",
  buttonSaveText: "Salvar",
  buttonVisitText: "Visitar",

  // --- Home Screen ---
  homeScreenTitle: "Início",
  homeSectionUser: "Argames15",
  homeReadMore: "Leia mais...",
  homeSectionTopic1: "Novidades",
  homeSectionTitle1: "Bem-vindo ao aplicativo!",
  homeSectionMessage1:
    "Estamos entusiasmados em apresentar nosso novo aplicativo, " +
    "\"" +
    Constants.expoConfig.name +
    "\"" +
    ", projetado para tornar o ato de presentear algo fácil e agradável.\n\nNosso objetivo é ajudar você a se organizar e encontrar o presente perfeito para cada ocasião.",
  homeSectionDate1: "19.08.2025",

  // --- Lists Screen ---
  listsScreenTitle: "Listas",
  listsScreenEmptyText: "Você ainda não tem listas. Toque abaixo para criar uma!",
  listsAddList: "Criar nova lista",
  listsAdd: "Adicionar",
  listsDeleteList: "Lista excluída com sucesso.",
  listGiftAmount: "Presentes: ",
  listGiftTotal: "Total: ",

  // --- Gifts Screen ---
  giftsScreenTitle: "Presentes",
  giftsInformationHeadline: "Inspiração",
  giftsInformationText: "Descubra ótimas ideias de presentes para todas as ocasiões, selecionadas para você.",
  giftsCategoryBirthday: "Aniversário",
  giftsCategoryValentine: "Dia dos Namorados",
  giftsCategoryChristmas: "Natal",
  giftsCategoryWedding: "Casamento",
  giftsChip5: "Categoria 5",
  giftsChip6: "Categoria 6",

  // --- Settings Screen ---
  settingsScreenTitle: "Configurações",
  settingsLanguageHeadline: "Idioma",
  settingsLanguageDescription: "Altere o idioma de exibição do aplicativo.",
  settingsThemeHeadline: "Tema",
  settingsThemeDescription: "Escolha entre os temas claro e escuro.",
  settingsContactHeadline: "Contato",
  settingsContactDescription: "Envie-nos suas dúvidas ou feedback.",
  settingsInformationHeadline: "Sobre",
  settingsInformationDescription: "Ver detalhes da versão e informações do app.",
  settingsInformationModalHeadline: "Informações do aplicativo",
  settingsInformationModalContent:
    Constants.expoConfig.name + "\n" +
    "Versão: " + Constants.expoConfig.version,
  settingsStatusHeadlineVersion: "Versão",
  settingsStatusHeadlineFreeVersion: "Gratuita",
  settingsStatusHeadlinePremiumVersion: "Premium",
  settingsStatusHeadlineLimit: "Limite de listas",
  settingsTermsConditionsHeadline: "Termos e Condições",
  settingsTermsConditionsDescription: "Consulte nossos termos e condições.",
  settingsPrivacyPolicyHeadline: "Política de Privacidade",
  settingsPrivacyPolicyDescription: "Saiba como protegemos seus dados.",
  settingsDisclaimerHeadline: "Aviso Legal",
  settingsDisclaimerDescription: "Consulte o aviso legal do aplicativo.",
  settingsPersonalAdsHeadline: "Anúncios personalizados",
  settingsPersonalAdsDescription: "Permitir publicidade personalizada.",
  settingsThemeLight: "Claro",
  settingsThemeDark: "Escuro",

  // --- Input Fields & Forms ---
  inputFieldHeadline: "Título",
  inputFieldHeadlinePlaceholder: "Digite um título",
  inputFieldDescription: "Descrição",
  inputFieldDescriptionPlaceholder: "Digite uma descrição",
  inputFieldEvent: "Evento",
  inputFieldEventPlaceholder: "ex: Natal, Aniversário",
  inputFieldDate: "Data",
  inputFieldDatePlaceholder: "DD.MM.AAAA",
  inputFieldDateError: "Formato de data inválido. Use DD.MM.AAAA.",
  inputFieldErrorMandatory: "Este campo é obrigatório.",

  // --- Toasts & Modals ---
  toastAddList: "Lista adicionada com sucesso.",
  modalDeleteHeadline: "Excluir lista",
  modalDeleteWarning: "Tem certeza de que deseja excluir esta lista?\nEsta ação não pode ser desfeita.",

  // --- Error Messages ---
  errorHeadline: "Ocorreu um erro",
  errorMessageNotReachable: "Não foi possível conectar. Verifique sua conexão com a internet.",
  errorMessagePermissionDenied: "Permissão negada. Conceda a permissão nas configurações.",
  errorMessageUnknown: "Ocorreu um erro inesperado. Tente novamente mais tarde."
};