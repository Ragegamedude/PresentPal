import { Modal, Text, TextInput, View } from 'react-native';
import { Context } from '../context/Context';
import { useContext, useState } from 'react';
import createConverterSectionStyle from './ConverterSectionStyle';
import { ProgressBar, TouchableRipple } from 'react-native-paper';
import { IconSettings } from '../constants/IconSettings';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { EncodingType, StorageAccessFramework } from 'expo-file-system';
import axios from 'axios';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { InterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import { AppVersions } from '../constants/AppVersions';

export default ConverterSection = (props) => {
	const { theme, language, version, personalAds } = useContext(Context);
	const [currentVersion, setCurrentVersion] = version;
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [showPersonalAds, setShowPersonalAds] = personalAds;

	const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-9694787014775307/5588663869';

	//Settings and constants
	const SERVER_URL = __DEV__ ? 'http://192.168.178.45:5000' : 'https://argames15.net';

	const RESPONSE_TIMEOUT = 120000;
	const PDF_ENDING = '.pdf';
	const PDF_MIMETYPE = 'application/pdf';
	const JPG_ENDING = '.jpg';
	const JPG_MIMETYPE = 'image/jpeg';
	const PNG_ENDING = '.png';
	const PNG_MIMETYPE = 'image/png';
	const TIF_ENDING = '.tif';
	const TIF_MIMETYPE = 'image/tif';
	const BMP_ENDING = '.bmp';
	const BMP_MIMETYPE = 'image/bmp';
	const ZIP_ENDING = '.zip';
	const ZIP_MIMETYPE = 'application/zip';
	const EPUB_ENDING = '.epub';
	const EPUB_MIMETYPE = 'application/epub+zip';

	const EMPTY_FILE_PDF = {
		type: '',
		name: currentLanguage.converterDefaultSelectPDF,
		uri: '',
		size: 0
	};

	const EMPTY_FILE_IMAGE = {
		type: '',
		name: currentLanguage.converterDefaultSelectImage,
		uri: '',
		size: 0
	};

	const EMPTY_DIRECTORY = {
		uri: '',
		name: currentLanguage.converterDefaultSelectDirectory
	};

	const [showPDFModal, setShowPDFModal] = useState(false);

	const [file1NewName, setFile1NewName] = useState('');
	const [file2NewName, setFile2NewName] = useState('');
	const [file1NewNamePlaceholder, setFile1NewNamePlaceholder] = useState('');
	const [file2NewNamePlaceholder, setFile2NewNamePlaceholder] = useState('');
	const [fileNewDirectory, setFileNewDirectory] = useState(EMPTY_DIRECTORY);
	const [file1Result, setFile1Result] = useState(EMPTY_FILE_PDF);
	const [file2Result, setFile2Result] = useState(EMPTY_FILE_PDF);
	const [file1Page, setFile1Page] = useState('');
	const [file1PagePlaceholder, setFile1PagePlaceholder] = useState('');
	const [file1Password, setFile1Password] = useState('');
	const [file2Password, setFile2Password] = useState('');
	const [file1PasswordPlaceholder, setFile1PasswordPlaceholder] = useState('');
	const [file2PasswordPlaceholder, setFile2PasswordPlaceholder] = useState('');
	const [fileImageFormat, setFileImageFormat] = useState('');
	const [image1Result, setImage1Result] = useState(EMPTY_FILE_IMAGE);
	const [image2Result, setImage2Result] = useState(EMPTY_FILE_IMAGE);
	const [file1Quality, setFile1Quality] = useState('');
	const [file1QualityPlaceholder, setFile1QualityPlaceholder] = useState('');

	const [fileError, setFileError] = useState('');
	const [fileSuccess, setFileSuccess] = useState('');
	const [fileSuccessHeadline, setFileSuccessHeadline] = useState('');
	const [fileConvertInProgress, setFileConvertInProgress] = useState(false);
	const [fileConvertAborted, setFileConvertAborted] = useState(false);
	const [fileConvertProgress, setFileConvertProgress] = useState(0.0);
	const [rewardedInterstitial, setRewardedInterstitial] = useState(
		InterstitialAd.createForAdRequest(adUnitId, {
			requestNonPersonalizedAdsOnly: showPersonalAds,
			keywords: ['fashion', 'clothing', 'games', '']
		})
	);

	const ConverterSectionStyle = createConverterSectionStyle(currentTheme);

	const openModal = () => {
		resetAllData();
		prepareRewardedAd();
		setShowPDFModal(true);
	};

	const prepareRewardedAd = () => {
		rewardedInterstitial.load();
	};

	//Resets all fields to default values and placeholder
	const resetAllData = () => {
		resetBasicData();
		setFileConvertProgress(0);
		setFileError('');
		setFileSuccessHeadline('');
		setFileSuccess('');
	};
	//Resets all non Error/Success fields after success konvert
	const resetBasicData = () => {
		setFile1NewName('');
		setFile2NewName('');
		setFile1NewNamePlaceholder(currentLanguage.converterDefaultFileName);
		setFile2NewNamePlaceholder(currentLanguage.converterDefaultFileName);
		setFileNewDirectory(EMPTY_DIRECTORY);
		setFile1Result(EMPTY_FILE_PDF);
		setFile2Result(EMPTY_FILE_PDF);
		setFile1Page('');
		setFile1PagePlaceholder(currentLanguage.converterDefaultPageSize);
		setFile1Password('');
		setFile2Password('');
		setFile1PasswordPlaceholder(currentLanguage.converterDefaultPassword);
		setFile2PasswordPlaceholder(currentLanguage.converterDefaultPassword);
		setFileImageFormat('');
		setFileConvertInProgress(false);
		setFileConvertAborted(false);
		setImage1Result(EMPTY_FILE_IMAGE);
		setImage2Result(EMPTY_FILE_PDF);
		setFile1Quality('');
		setFile1QualityPlaceholder(currentLanguage.converterDefaultQuality);
		overwritePlaceholder();
	};

	const overwritePlaceholder = () => {
		//Set default values after modal resetted, use for costume texts
		if (props.action === AvailableConverterActions.SPLIT_PDF) {
			setFile1PagePlaceholder(currentLanguage.converterDefaultSplitPageSize);
		} else if (props.action === AvailableConverterActions.REMOVE_SITE) {
			setFile1PagePlaceholder(currentLanguage.converterDefaultRemoveSite);
		} else if (props.action === AvailableConverterActions.EXTRACT_SITE) {
			setFile1PagePlaceholder(currentLanguage.converterDefaultExtractSite);
		} else if (props.action === AvailableConverterActions.ADD_WATERMARK) {
			setFile1QualityPlaceholder(currentLanguage.converterDefaultTransparency);
		}
	};

	//Action depend array of rendering components. Each action should be assigned to array with correct components
	const renderComponent = (component) => {
		let components = [];
		if (props.action === AvailableConverterActions.MERGE_PDF) {
			components = ['file1NewName', 'fileNewDirectory', 'file1Result', 'file2Result'];
		} else if (props.action === AvailableConverterActions.SPLIT_PDF) {
			components = ['file1NewName', 'file2NewName', 'file1Result', 'fileNewDirectory', 'file1Page'];
		} else if (
			props.action === AvailableConverterActions.COMPRESS_PDF ||
			props.action === AvailableConverterActions.EXTRACT_IMAGES ||
			props.action === AvailableConverterActions.ZIP_PDF ||
			props.action === AvailableConverterActions.CONVERT_PDF_EPUB
		) {
			components = ['file1NewName', 'fileNewDirectory', 'file1Result'];
		} else if (props.action === AvailableConverterActions.ADD_WATERMARK) {
			components = ['file1NewName', 'fileNewDirectory', 'file1Result', 'image1Result', 'file1Quality'];
		} else if (props.action === AvailableConverterActions.CONVERT_PDF_IMAGE) {
			components = ['file1NewName', 'fileNewDirectory', 'file1Result', 'fileImageFormat'];
		} else if (
			props.action === AvailableConverterActions.SET_PASSWORD ||
			props.action === AvailableConverterActions.REMOVE_PASSWORD
		) {
			components = ['file1NewName', 'fileNewDirectory', 'file1Result', 'file1Password', 'file2Password'];
		} else if (
			props.action === AvailableConverterActions.REMOVE_SITE ||
			props.action === AvailableConverterActions.EXTRACT_SITE
		) {
			components = ['file1NewName', 'fileNewDirectory', 'file1Result', 'file1Page'];
		}
		return components.includes(component);
	};
	//change filename input
	const changeFileNewName = (text, fieldNumber) => {
		if (currentVersion === AppVersions.LIGHT && !rewardedInterstitial.loaded) {
			prepareRewardedAd();
		}
		if (text.length > 0 && fileError === currentLanguage.errorMessageNoNameSelected) {
			setFileError('');
		}
		setFileSuccess('');
		if (fieldNumber === 1) {
			setFile1NewName(text);
		} else if (fieldNumber === 2) {
			setFile2NewName(text);
		}
	};
	//change filename input
	const selectPassword = (text, fieldNumber) => {
		if (currentVersion === AppVersions.LIGHT && !rewardedInterstitial.loaded) {
			prepareRewardedAd();
		}
		if (text.length > 0 && fileError === currentLanguage.errorMessagePasswordSelected) {
			setFileError('');
		}
		setFileSuccess('');
		if (fieldNumber === 1) {
			setFile1Password(text);
		} else if (fieldNumber === 2) {
			setFile2Password(text);
		}
	};
	//change filepage input
	const selectPage = (text, fieldNumber) => {
		if (currentVersion === AppVersions.LIGHT && !rewardedInterstitial.loaded) {
			prepareRewardedAd();
		}
		if (text.length > 0 && fileError === currentLanguage.errorMessageNoNameSelected) {
			setFileError('');
		}
		setFileSuccess('');
		if (text.length < 10) {
			if (fieldNumber === 1) {
				setFile1Page(text);
			} else if (fieldNumber === 2) {
				setFile2Page(text);
			}
		}
	};
	const selectQuality = (text, fieldNumber) => {
		if (currentVersion === AppVersions.LIGHT && !rewardedInterstitial.loaded) {
			prepareRewardedAd();
		}
		if (text.length > 0 && fileError === currentLanguage.errorMessageNoNameSelected) {
			setFileError('');
		}
		setFileSuccess('');
		if (text.length < 10) {
			if (fieldNumber === 1) {
				setFile1Quality(text);
			}
		}
	};
	//Select file depend on order 1 or 2 for file1 or file2
	const selectPDFFile = async (order) => {
		if (currentVersion === AppVersions.LIGHT && !rewardedInterstitial.loaded) {
			prepareRewardedAd();
		}
		try {
			const result = await DocumentPicker.getDocumentAsync({
				type: PDF_MIMETYPE
			});

			if (result.canceled === false) {
				let fileResultObject = {
					type: PDF_MIMETYPE,
					name: result.assets[0].name,
					uri: result.assets[0].uri,
					size: result.assets[0].size / Math.pow(1024, 2),
					file: result.assets[0].file
				};
				if (order === 1) {
					setFile1Result(fileResultObject);
					setFileError('');
					setFileSuccess('');
				} else if (order === 2) {
					setFile2Result(fileResultObject);
					setFileError('');
					setFileSuccess('');
				}
			}
		} catch (error) {
			setFileError(currentLanguage.errorMessageCantGetFile);
			setFileConvertInProgress(false);
		}
	};
	const selectImageFile = async (order) => {
		if (currentVersion === AppVersions.LIGHT && !rewardedInterstitial.loaded) {
			prepareRewardedAd();
		}
		try {
			const result = await DocumentPicker.getDocumentAsync({
				type: [PNG_MIMETYPE, JPG_MIMETYPE, BMP_MIMETYPE]
			});

			if (result.canceled === false) {
				let fileResultObject = {
					type: PNG_MIMETYPE,
					name: result.assets[0].name,
					uri: result.assets[0].uri,
					size: result.assets[0].size / Math.pow(1024, 2),
					file: result.assets[0].file
				};
				if (order === 1) {
					setImage1Result(fileResultObject);
					setFileError('');
					setFileSuccess('');
				} else if (order === 2) {
					setImage2Result(fileResultObject);
					setFileError('');
					setFileSuccess('');
				}
			}
		} catch (error) {
			setFileError(currentLanguage.errorMessageCantGetFile);
			setFileConvertInProgress(false);
		}
	};

	//Select directory to save files
	const selectDirectory = async () => {
		if (currentVersion === AppVersions.LIGHT && !rewardedInterstitial.loaded) {
			prepareRewardedAd();
		}
		try {
			const directory = await StorageAccessFramework.requestDirectoryPermissionsAsync();
			if (directory.granted) {
				let regex = /[^\w\s]/g;
				let decodedUri = decodeURIComponent(directory.directoryUri).replace(regex, '/').split('/');
				let newDirectoryObject = {
					uri: directory.directoryUri,
					name: '/' + decodedUri[decodedUri.length - 1]
				};
				setFileNewDirectory(newDirectoryObject);
				setFileError('');
				setFileSuccess('');
			}
		} catch (error) {
			setFileError(currentLanguage.errorMessagePermissionDirectory);
			setFileSuccess('');
			setFileConvertInProgress(false);
		}
	};

	const showErrorMessage = (message) => {
		setFileError(message);
		setFileSuccess('');
		setFileConvertProgress(0);
		setFileConvertInProgress(false);
	};

	const showSuccessMessage = (headline, message, inProgress, progress) => {
		setFileSuccessHeadline(headline);
		setFileSuccess(message);
		setFileConvertInProgress(inProgress);
		setFileConvertProgress(progress);
	};

	//Check preconditions for execute actions and show errors
	const startProcess = async (action) => {
		if (action === AvailableConverterActions.MERGE_PDF) {
			if (file1NewName === '') {
				showErrorMessage(currentLanguage.errorMessageNoNameSelected);
			} else if (fileNewDirectory.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoDirectorySelected);
			} else if (file1Result.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoFileSelected);
			} else if (file2Result.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoFileSelected);
			} else if (file1Result.size > currentVersion.fileSizeLimit) {
				showErrorMessage(currentLanguage.errorMessageFileToBig + currentVersion.fileSizeLimit + ' MB');
			} else if (file2Result.size > currentVersion.fileSizeLimit) {
				showErrorMessage(currentLanguage.errorMessageFileToBig + currentVersion.fileSizeLimit + ' MB');
			} else {
				showErrorMessage('');
				showSuccessMessage(currentLanguage.successHeadline, currentLanguage.successMessageInProgress, true, 0.1);
				if (currentVersion === AppVersions.LIGHT && rewardedInterstitial.loaded) {
					await rewardedInterstitial.show();
				}
				await uploadFile(action);
			}
		} else if (action === AvailableConverterActions.SPLIT_PDF) {
			if (file1NewName === '') {
				showErrorMessage(currentLanguage.errorMessageNoNameSelected);
			} else if (file2NewName === '') {
				showErrorMessage(currentLanguage.errorMessageNoNameSelected);
			} else if (fileNewDirectory.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoDirectorySelected);
			} else if (file1Result.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoFileSelected);
			} else if (file1Result.size > currentVersion.fileSizeLimit) {
				showErrorMessage(currentLanguage.errorMessageFileToBig + currentVersion.fileSizeLimit + ' MB');
			} else if (file1Page === '') {
				showErrorMessage(currentLanguage.errorMessagePageNotSet);
			} else {
				showErrorMessage('');
				showSuccessMessage(currentLanguage.successHeadline, currentLanguage.successMessageInProgress, true, 0.1);
				if (currentVersion === AppVersions.LIGHT && rewardedInterstitial.loaded) {
					await rewardedInterstitial.show();
				}
				await uploadFile(action);
			}
		} else if (
			action === AvailableConverterActions.COMPRESS_PDF ||
			action === AvailableConverterActions.EXTRACT_IMAGES ||
			action === AvailableConverterActions.ZIP_PDF ||
			action === AvailableConverterActions.CONVERT_PDF_EPUB
		) {
			if (file1NewName === '') {
				showErrorMessage(currentLanguage.errorMessageNoNameSelected);
			} else if (fileNewDirectory.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoDirectorySelected);
			} else if (file1Result.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoFileSelected);
			} else if (file1Result.size > currentVersion.fileSizeLimit) {
				showErrorMessage(currentLanguage.errorMessageFileToBig + currentVersion.fileSizeLimit + ' MB');
			} else {
				showErrorMessage('');
				showSuccessMessage(currentLanguage.successHeadline, currentLanguage.successMessageInProgress, true, 0.1);
				if (currentVersion === AppVersions.LIGHT && rewardedInterstitial.loaded) {
					await rewardedInterstitial.show();
				}
				await uploadFile(action);
			}
		} else if (action === AvailableConverterActions.CONVERT_PDF_IMAGE) {
			if (file1NewName === '') {
				showErrorMessage(currentLanguage.errorMessageNoNameSelected);
			} else if (fileNewDirectory.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoDirectorySelected);
			} else if (file1Result.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoFileSelected);
			} else if (file1Result.size > currentVersion.fileSizeLimit) {
				showErrorMessage(currentLanguage.errorMessageFileToBig + currentVersion.fileSizeLimit + ' MB');
			} else if (fileImageFormat === '') {
				showErrorMessage(currentLanguage.errorMessageFormatNotSelected);
			} else {
				showErrorMessage('');
				showSuccessMessage(currentLanguage.successHeadline, currentLanguage.successMessageInProgress, true, 0.1);
				if (currentVersion === AppVersions.LIGHT && rewardedInterstitial.loaded) {
					await rewardedInterstitial.show();
				}
				if (fileImageFormat === 'JPG') {
					await uploadFile(AvailableConverterActions.CONVERT_PDF_JPG);
				} else if (fileImageFormat === 'PNG') {
					await uploadFile(AvailableConverterActions.CONVERT_PDF_PNG);
				} else if (fileImageFormat === 'TIF') {
					await uploadFile(AvailableConverterActions.CONVERT_PDF_TIF);
				} else if (fileImageFormat === 'BMP') {
					await uploadFile(AvailableConverterActions.CONVERT_PDF_BMP);
				}
			}
		} else if (
			action === AvailableConverterActions.SET_PASSWORD ||
			action === AvailableConverterActions.REMOVE_PASSWORD
		) {
			if (file1NewName === '') {
				showErrorMessage(currentLanguage.errorMessageNoNameSelected);
			} else if (fileNewDirectory.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoDirectorySelected);
			} else if (file1Result.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoFileSelected);
			} else if (file1Result.size > currentVersion.fileSizeLimit) {
				showErrorMessage(currentLanguage.errorMessageFileToBig + currentVersion.fileSizeLimit + ' MB');
			} else if (file1Password === '' || file2Password === '') {
				showErrorMessage(currentLanguage.errorMessagePasswordSelected);
			} else if (file1Password !== file2Password) {
				showErrorMessage(currentLanguage.errorMessagePasswordMismatch);
			} else {
				showErrorMessage('');
				showSuccessMessage(currentLanguage.successHeadline, currentLanguage.successMessageInProgress, true, 0.1);
				if (currentVersion === AppVersions.LIGHT && rewardedInterstitial.loaded) {
					await rewardedInterstitial.show();
				}
				await uploadFile(action);
			}
		} else if (action === AvailableConverterActions.ADD_WATERMARK) {
			if (file1NewName === '') {
				showErrorMessage(currentLanguage.errorMessageNoNameSelected);
			} else if (fileNewDirectory.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoDirectorySelected);
			} else if (file1Result.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoFileSelected);
			} else if (file1Result.size > currentVersion.fileSizeLimit) {
				showErrorMessage(currentLanguage.errorMessageFileToBig + currentVersion.fileSizeLimit + ' MB');
			} else if (image1Result.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoImageSelected);
			} else if (image1Result.size > currentVersion.fileSizeLimit) {
				showErrorMessage(currentLanguage.errorMessageImageToBig + currentVersion.fileSizeLimit + ' MB');
			} else if (file1Quality.length <= 0 || Number(file1Quality) <= 0 || Number(file1Quality) > 100) {
				showErrorMessage(currentLanguage.errorMessageQualityEmpty);
			} else {
				showErrorMessage('');
				showSuccessMessage(currentLanguage.successHeadline, currentLanguage.successMessageInProgress, true, 0.1);
				if (currentVersion === AppVersions.LIGHT && rewardedInterstitial.loaded) {
					await rewardedInterstitial.show();
				}
				await uploadFile(action);
			}
		} else if (action === AvailableConverterActions.REMOVE_SITE || action === AvailableConverterActions.EXTRACT_SITE) {
			if (file1NewName === '') {
				showErrorMessage(currentLanguage.errorMessageNoNameSelected);
			} else if (fileNewDirectory.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoDirectorySelected);
			} else if (file1Result.uri === '') {
				showErrorMessage(currentLanguage.errorMessageNoFileSelected);
			} else if (file1Result.size > currentVersion.fileSizeLimit) {
				showErrorMessage(currentLanguage.errorMessageFileToBig + currentVersion.fileSizeLimit + ' MB');
			} else if (file1Page === '') {
				showErrorMessage(currentLanguage.errorMessagePageNotSet);
			} else {
				showErrorMessage('');
				showSuccessMessage(currentLanguage.successHeadline, currentLanguage.successMessageInProgress, true, 0.1);
				if (currentVersion === AppVersions.LIGHT && rewardedInterstitial.loaded) {
					await rewardedInterstitial.show();
				}
				await uploadFile(action);
			}
		}
	};

	const abortProcess = (option) => {
		setFileConvertAborted(true);
		if (option === 2) {
			setShowPDFModal(false);
		}
	};

	//Upload File depended on action with different endpoints
	const uploadFile = async (action) => {
		console.log(action);
		if (!fileConvertAborted) {
			try {
				setFileConvertProgress(0.3);
				let response;
				let formData = new FormData();
				if (action === AvailableConverterActions.MERGE_PDF) {
					formData.append('files', file1Result);
					formData.append('files', file2Result);
					formData.append('token', currentVersion.token);
					response = await axios.post(SERVER_URL + '/pdf/merge/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.SPLIT_PDF) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					formData.append('page', file1Page);
					response = await axios.post(SERVER_URL + '/pdf/split/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.COMPRESS_PDF) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					response = await axios.post(SERVER_URL + '/pdf/compress/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.CONVERT_PDF_JPG) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					response = await axios.post(SERVER_URL + '/pdf/convert/jpg/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.CONVERT_PDF_PNG) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					response = await axios.post(SERVER_URL + '/pdf/convert/png/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.CONVERT_PDF_TIF) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					response = await axios.post(SERVER_URL + '/pdf/convert/tif/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.CONVERT_PDF_BMP) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					response = await axios.post(SERVER_URL + '/pdf/convert/bmp/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.EXTRACT_IMAGES) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					response = await axios.post(SERVER_URL + '/pdf/extract/images/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.SET_PASSWORD) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					formData.append('password', file1Password);
					response = await axios.post(SERVER_URL + '/pdf/set/password/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.REMOVE_PASSWORD) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					formData.append('password', file1Password);
					response = await axios.post(SERVER_URL + '/pdf/remove/password/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.ADD_WATERMARK) {
					formData.append('file', file1Result);
					formData.append('image', image1Result);
					formData.append('token', currentVersion.token);
					formData.append('quality', file1Quality);
					response = await axios.post(SERVER_URL + '/pdf/add/watermark/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.ZIP_PDF) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					response = await axios.post(SERVER_URL + '/pdf/zip/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.REMOVE_SITE) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					formData.append('page', file1Page);
					response = await axios.post(SERVER_URL + '/pdf/remove/site/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.EXTRACT_SITE) {
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					formData.append('page', file1Page);
					response = await axios.post(SERVER_URL + '/pdf/extract/site/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				} else if (action === AvailableConverterActions.CONVERT_PDF_EPUB) {
					console.log('send file');
					formData.append('file', file1Result);
					formData.append('token', currentVersion.token);
					response = await axios.post(SERVER_URL + '/pdf/convert/pdf/epub/', formData, {
						timeout: RESPONSE_TIMEOUT,
						method: 'POST',
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					});
				}
				//Response Handling depending on StatusCode
				if (response.status === 200) {
					setFileConvertProgress(0.5);
					await saveBase64FileToDirectory(action, response);
				} else {
					console.log(response.status);
					showErrorMessage(currentLanguage.errorMessageUploadError);
				}
			} catch (error) {
				// Error handling
				console.log(error);
				setFileConvertInProgress(false);
				if (error.code === 'ERR_NETWORK') {
					showErrorMessage(currentLanguage.errorMessageNotReachable);
				} else if (error.code === 'ECONNABORTED') {
					showErrorMessage(currentLanguage.errorMessageTimeout);
				} else {
					showErrorMessage(currentLanguage.errorMessageUnknown);
				}
			}
		} else {
			showErrorMessage(currentLanguage.errorMessageAbortRequest);
			setFileConvertAborted(false);
		}
	};

	const saveBase64FileToDirectory = async (action, response) => {
		if (!fileConvertAborted) {
			try {
				setFileConvertProgress(0.75);
				let base64File = response.data;
				//One file pdf
				if (
					action === AvailableConverterActions.MERGE_PDF ||
					action === AvailableConverterActions.COMPRESS_PDF ||
					action === AvailableConverterActions.SET_PASSWORD ||
					action === AvailableConverterActions.REMOVE_PASSWORD ||
					action === AvailableConverterActions.ADD_WATERMARK ||
					action === AvailableConverterActions.REMOVE_SITE ||
					action === AvailableConverterActions.EXTRACT_SITE
				) {
					let fileUri = await StorageAccessFramework.createFileAsync(
						fileNewDirectory.uri,
						file1NewName + PDF_ENDING,
						PDF_MIMETYPE
					);
					await FileSystem.writeAsStringAsync(fileUri, base64File, {
						encoding: EncodingType.Base64
					});
					//Two Files pdf
				} else if (action === AvailableConverterActions.SPLIT_PDF) {
					let fileUri1 = await StorageAccessFramework.createFileAsync(
						fileNewDirectory.uri,
						file1NewName + PDF_ENDING,
						PDF_MIMETYPE
					);
					let fileUri2 = await StorageAccessFramework.createFileAsync(
						fileNewDirectory.uri,
						file2NewName + PDF_ENDING,
						PDF_MIMETYPE
					);
					await FileSystem.writeAsStringAsync(fileUri1, base64File[0], {
						encoding: EncodingType.Base64
					});
					await FileSystem.writeAsStringAsync(fileUri2, base64File[1], {
						encoding: EncodingType.Base64
					});
				} else if (action === AvailableConverterActions.CONVERT_PDF_JPG) {
					for (let i = 0; i < base64File.length; i++) {
						let fileName = file1NewName + '_' + (i + 1) + JPG_ENDING;
						let fileUri1 = await StorageAccessFramework.createFileAsync(fileNewDirectory.uri, fileName, JPG_MIMETYPE);
						await FileSystem.writeAsStringAsync(fileUri1, base64File[i], {
							encoding: EncodingType.Base64
						});
					}
				} else if (
					action === AvailableConverterActions.CONVERT_PDF_PNG ||
					action === AvailableConverterActions.EXTRACT_IMAGES
				) {
					for (let i = 0; i < base64File.length; i++) {
						let fileName = file1NewName + '_' + (i + 1) + PNG_ENDING;
						let fileUri1 = await StorageAccessFramework.createFileAsync(fileNewDirectory.uri, fileName, PNG_MIMETYPE);
						await FileSystem.writeAsStringAsync(fileUri1, base64File[i], {
							encoding: EncodingType.Base64
						});
					}
				} else if (action === AvailableConverterActions.CONVERT_PDF_TIF) {
					for (let i = 0; i < base64File.length; i++) {
						let fileName = file1NewName + '_' + (i + 1) + TIF_ENDING;
						let fileUri1 = await StorageAccessFramework.createFileAsync(fileNewDirectory.uri, fileName, TIF_MIMETYPE);
						await FileSystem.writeAsStringAsync(fileUri1, base64File[i], {
							encoding: EncodingType.Base64
						});
					}
				} else if (action === AvailableConverterActions.CONVERT_PDF_BMP) {
					for (let i = 0; i < base64File.length; i++) {
						let fileName = file1NewName + '_' + (i + 1) + BMP_ENDING;
						let fileUri1 = await StorageAccessFramework.createFileAsync(fileNewDirectory.uri, fileName, BMP_MIMETYPE);
						await FileSystem.writeAsStringAsync(fileUri1, base64File[i], {
							encoding: EncodingType.Base64
						});
					}
				} else if (action === AvailableConverterActions.ZIP_PDF) {
					let fileUri = await StorageAccessFramework.createFileAsync(
						fileNewDirectory.uri,
						file1NewName + ZIP_ENDING,
						ZIP_MIMETYPE
					);
					await FileSystem.writeAsStringAsync(fileUri, base64File, {
						encoding: EncodingType.Base64
					});
				} else if (action === AvailableConverterActions.CONVERT_PDF_EPUB) {
					let fileUri = await StorageAccessFramework.createFileAsync(
						fileNewDirectory.uri,
						file1NewName + EPUB_ENDING,
						EPUB_MIMETYPE
					);
					await FileSystem.writeAsStringAsync(fileUri, base64File, {
						encoding: EncodingType.Base64
					});
				}
				showSuccessMessage(
					currentLanguage.successConvertHeadline,
					currentLanguage.successMessageInProgressDone,
					false,
					1.0
				);
				resetBasicData();
			} catch (error) {
				showErrorMessage(currentLanguage.errorMessagePermissionDirectory);
			}
		} else {
			showErrorMessage(currentLanguage.errorMessageAbortRequest);
		}
	};

	return (
		<View
			style={
				props.lastElement
					? ConverterSectionStyle.converterSectionWrapper2
					: ConverterSectionStyle.converterSectionWrapper
			}
		>
			<Modal animationType={'fade'} transparent={true} visible={showPDFModal}>
				<View style={ConverterSectionStyle.converterSectionModalWrapper}>
					<View style={ConverterSectionStyle.converterSectionModal}>
						<View style={ConverterSectionStyle.converterSectionModalHeader}>
							<SimpleLineIcon
								style={ConverterSectionStyle.converterSectionModalHeaderIcon}
								name={props.iconName}
								color={currentTheme.secondaryColor}
								size={IconSettings.modalHeadlineIconSize}
							></SimpleLineIcon>
							<Text style={ConverterSectionStyle.converterSectionModalHeaderText}>{props.headline}</Text>
						</View>
						<View style={ConverterSectionStyle.converterSectionModalContent}>
							{/* Name file 1 input field */}
							{renderComponent('file1NewName') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'note'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
										></SimpleLineIcon>
									</View>
									<View style={ConverterSectionStyle.converterSectionModalInputField}>
										<TextInput
											style={
												file1NewName !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
											placeholder={file1NewNamePlaceholder}
											placeholderTextColor={currentTheme.secondaryVariantColor}
											value={file1NewName}
											onChangeText={(text) => changeFileNewName(text, 1)}
											editable={!fileConvertInProgress}
										/>
									</View>
								</View>
							)}
							{/* Name file 2 input field */}
							{renderComponent('file2NewName') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'note'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
										></SimpleLineIcon>
									</View>
									<View style={ConverterSectionStyle.converterSectionModalInputField}>
										<TextInput
											style={
												file2NewName !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
											placeholder={file2NewNamePlaceholder}
											placeholderTextColor={currentTheme.secondaryVariantColor}
											value={file2NewName}
											onChangeText={(text) => changeFileNewName(text, 2)}
											editable={!fileConvertInProgress}
										/>
									</View>
								</View>
							)}
							{/* Save Directory */}
							{renderComponent('fileNewDirectory') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'folder'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
											disabled={fileConvertInProgress}
										></SimpleLineIcon>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={ConverterSectionStyle.converterSectionModalInputField}
										onPress={() => selectDirectory(1)}
										disabled={fileConvertInProgress}
									>
										<Text
											style={
												fileNewDirectory.uri !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
										>
											{fileNewDirectory.name}
										</Text>
									</TouchableRipple>
								</View>
							)}
							{/* Select file 1 input field */}
							{renderComponent('file1Result') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'doc'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
											disabled={fileConvertInProgress}
										></SimpleLineIcon>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={ConverterSectionStyle.converterSectionModalInputField}
										onPress={() => selectPDFFile(1)}
										disabled={fileConvertInProgress}
									>
										<Text
											style={
												file1Result.uri !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
										>
											{file1Result.name}
										</Text>
									</TouchableRipple>
								</View>
							)}
							{/* Select file 2 input field */}
							{renderComponent('file2Result') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'doc'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
										></SimpleLineIcon>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={ConverterSectionStyle.converterSectionModalInputField}
										onPress={() => selectPDFFile(2)}
										disabled={fileConvertInProgress}
									>
										<Text
											style={
												file2Result.uri !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
										>
											{file2Result.name}
										</Text>
									</TouchableRipple>
								</View>
							)}
							{/* Select image 1 input field */}
							{renderComponent('image1Result') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'picture'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
											disabled={fileConvertInProgress}
										></SimpleLineIcon>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={ConverterSectionStyle.converterSectionModalInputField}
										onPress={() => selectImageFile(1)}
										disabled={fileConvertInProgress}
									>
										<Text
											style={
												image1Result.uri !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
										>
											{image1Result.name}
										</Text>
									</TouchableRipple>
								</View>
							)}
							{/* Select image 2 input field */}
							{renderComponent('image2Result') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'doc'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
										></SimpleLineIcon>
									</View>
									<TouchableRipple
										rippleColor={currentTheme.rippleEffectColor}
										borderless={true}
										style={ConverterSectionStyle.converterSectionModalInputField}
										onPress={() => selectImageFile(2)}
										disabled={fileConvertInProgress}
									>
										<Text
											style={
												image2Result.uri !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
										>
											{image2Result.name}
										</Text>
									</TouchableRipple>
								</View>
							)}
							{/* Password file 1 input field */}
							{renderComponent('file1Password') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'lock'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
										></SimpleLineIcon>
									</View>
									<View style={ConverterSectionStyle.converterSectionModalInputField}>
										<TextInput
											style={
												file1Password !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
											secureTextEntry={true}
											placeholder={file1PasswordPlaceholder}
											placeholderTextColor={currentTheme.secondaryVariantColor}
											value={file1Password}
											onChangeText={(text) => selectPassword(text, 1)}
											editable={!fileConvertInProgress}
										/>
									</View>
								</View>
							)}
							{/* Password file 2 input field */}
							{renderComponent('file2Password') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'lock'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
										></SimpleLineIcon>
									</View>
									<View style={ConverterSectionStyle.converterSectionModalInputField}>
										<TextInput
											style={
												file2Password !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
											secureTextEntry={true}
											placeholder={file2PasswordPlaceholder}
											placeholderTextColor={currentTheme.secondaryVariantColor}
											value={file2Password}
											onChangeText={(text) => selectPassword(text, 2)}
											editable={!fileConvertInProgress}
										/>
									</View>
								</View>
							)}
							{/* Page file 1 input field */}
							{renderComponent('file1Page') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'notebook'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
										></SimpleLineIcon>
									</View>
									<View style={ConverterSectionStyle.converterSectionModalInputField}>
										<TextInput
											keyboardType={'numeric'}
											style={
												file1Page !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
											placeholder={file1PagePlaceholder}
											placeholderTextColor={currentTheme.secondaryVariantColor}
											value={file1Page}
											onChangeText={(text) => selectPage(text, 1)}
											editable={!fileConvertInProgress}
										/>
									</View>
								</View>
							)}
							{/* File 1 Quality input field */}
							{renderComponent('file1Quality') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'frame'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
										></SimpleLineIcon>
									</View>
									<View style={ConverterSectionStyle.converterSectionModalInputField}>
										<TextInput
											keyboardType={'numeric'}
											style={
												file1Quality !== ''
													? fileConvertInProgress
														? ConverterSectionStyle.converterSectionModalInputFieldTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextActive
													: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
											}
											placeholder={file1QualityPlaceholder}
											placeholderTextColor={currentTheme.secondaryVariantColor}
											value={file1Quality}
											onChangeText={(text) => selectQuality(text, 1)}
											editable={!fileConvertInProgress}
										/>
									</View>
								</View>
							)}
							{/* File image format 1 input field */}
							{renderComponent('fileImageFormat') && (
								<View style={ConverterSectionStyle.converterSectionModalInputWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalInputButton}>
										<SimpleLineIcon
											style={ConverterSectionStyle.converterSectionModalInputButtonIcon}
											name={'picture'}
											color={currentTheme.secondaryColor}
											size={IconSettings.buttonIconSize}
										></SimpleLineIcon>
									</View>
									<View style={ConverterSectionStyle.converterSectionModalInputField}>
										<TouchableRipple
											rippleColor={currentTheme.rippleEffectColor}
											borderless={true}
											style={ConverterSectionStyle.converterSectionModalImageFormatWrapper}
											onPress={() => setFileImageFormat(currentLanguage.converterFormatJPG)}
										>
											<Text
												style={
													fileImageFormat === currentLanguage.converterFormatJPG
														? ConverterSectionStyle.converterSectionModalImageFormatTextActive
														: ConverterSectionStyle.converterSectionModalInputFieldTextInactive
												}
											>
												{currentLanguage.converterFormatJPG}
											</Text>
										</TouchableRipple>
										<TouchableRipple
											rippleColor={currentTheme.rippleEffectColor}
											borderless={true}
											style={ConverterSectionStyle.converterSectionModalImageFormatWrapper}
											onPress={() => setFileImageFormat(currentLanguage.converterFormatPNG)}
										>
											<Text
												style={
													fileImageFormat === currentLanguage.converterFormatPNG
														? ConverterSectionStyle.converterSectionModalImageFormatTextActive
														: ConverterSectionStyle.converterSectionModalImageFormatTextInactive
												}
											>
												{currentLanguage.converterFormatPNG}
											</Text>
										</TouchableRipple>
										<TouchableRipple
											rippleColor={currentTheme.rippleEffectColor}
											borderless={true}
											style={ConverterSectionStyle.converterSectionModalImageFormatWrapper}
											onPress={() => setFileImageFormat(currentLanguage.converterFormatTIF)}
										>
											<Text
												style={
													fileImageFormat === currentLanguage.converterFormatTIF
														? ConverterSectionStyle.converterSectionModalImageFormatTextActive
														: ConverterSectionStyle.converterSectionModalImageFormatTextInactive
												}
											>
												{currentLanguage.converterFormatTIF}
											</Text>
										</TouchableRipple>
										<TouchableRipple
											rippleColor={currentTheme.rippleEffectColor}
											borderless={true}
											style={ConverterSectionStyle.converterSectionModalImageFormatWrapper}
											onPress={() => setFileImageFormat(currentLanguage.converterFormatBMP)}
										>
											<Text
												style={
													fileImageFormat === currentLanguage.converterFormatBMP
														? ConverterSectionStyle.converterSectionModalImageFormatTextActive
														: ConverterSectionStyle.converterSectionModalImageFormatTextInactive
												}
											>
												{currentLanguage.converterFormatBMP}
											</Text>
										</TouchableRipple>
									</View>
								</View>
							)}
							{fileError !== '' && (
								<View style={ConverterSectionStyle.converterSectionModalErrorWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalErrorField}>
										<Text style={ConverterSectionStyle.converterSectionModalErrorHeadlineText}>
											{currentLanguage.errorHeadline}
										</Text>
										<Text style={ConverterSectionStyle.converterSectionModalErrorText}>{fileError}</Text>
									</View>
								</View>
							)}
							{fileSuccess !== '' && (
								<View style={ConverterSectionStyle.converterSectionModalSuccessWrapper}>
									<View style={ConverterSectionStyle.converterSectionModalSuccessField}>
										<Text style={ConverterSectionStyle.converterSectionModalSuccessHeadlineText}>
											{fileSuccessHeadline}
										</Text>
										<Text style={ConverterSectionStyle.converterSectionModalSuccessText}>{fileSuccess}</Text>
										<ProgressBar
											style={ConverterSectionStyle.converterSectionModalSuccessProgressbar}
											progress={fileConvertProgress}
											color={currentTheme.success}
										/>
									</View>
								</View>
							)}
							<View style={ConverterSectionStyle.converterSectionModalHintWrapper}>
								<Text style={ConverterSectionStyle.converterSectionModalHint}>
									{currentLanguage.converterModalConsent}
								</Text>
							</View>
							<View style={ConverterSectionStyle.converterSectionModalButtonWrapper}>
								<TouchableRipple
									rippleColor={currentTheme.rippleEffectColor}
									borderless={true}
									style={ConverterSectionStyle.converterSectionModalContentButton2}
									onPress={() => (fileConvertInProgress ? abortProcess(1) : startProcess(props.action))}
								>
									<Text style={ConverterSectionStyle.converterSectionModalContentButtonText}>
										{fileConvertInProgress ? currentLanguage.buttonAbortText : currentLanguage.buttonStartText}
									</Text>
								</TouchableRipple>
								<TouchableRipple
									rippleColor={currentTheme.rippleEffectColor}
									borderless={true}
									style={ConverterSectionStyle.converterSectionModalContentButton3}
									onPress={() => (fileConvertInProgress ? abortProcess(2) : setShowPDFModal(!showPDFModal))}
								>
									<Text style={ConverterSectionStyle.converterSectionModalContentButtonText}>
										{currentLanguage.buttonCloseText}
									</Text>
								</TouchableRipple>
							</View>
						</View>
					</View>
				</View>
			</Modal>
			<TouchableRipple
				rippleColor={currentTheme.rippleEffectColor}
				borderless={true}
				style={ConverterSectionStyle.converterSectionContainer}
				onPress={() => openModal()}
			>
				<View style={ConverterSectionStyle.converterSection}>
					<View style={ConverterSectionStyle.converterIconSection}>
						<SimpleLineIcon
							name={props.iconName}
							color={currentTheme.secondaryColor}
							size={IconSettings.settingsSectionIconSize}
						></SimpleLineIcon>
					</View>
					<View style={ConverterSectionStyle.converterSectionDividerWrapper}>
						<View style={ConverterSectionStyle.converterSectionDivider}></View>
					</View>
					<View style={ConverterSectionStyle.converterDescriptionSection}>
						<Text style={ConverterSectionStyle.converterHeadline}>{props.headline}</Text>
						<Text style={ConverterSectionStyle.converterDescription}>{props.description}</Text>
					</View>
				</View>
			</TouchableRipple>
		</View>
	);
};

export const AvailableConverterActions = {
	MERGE_PDF: 'merge-pdf',
	SPLIT_PDF: 'split-pdf',
	COMPRESS_PDF: 'compress-pdf',
	CONVERT_PDF_IMAGE: 'convert-pdf-image',
	CONVERT_PDF_EPUB: 'convert-pdf-epub',
	CONVERT_PDF_WORD: 'convert-pdf-word',
	CONVERT_PDF_POWER: 'convert-pdf-power',
	CONVERT_PDF_EXCEL: 'convert-pdf-excel',
	CONVERT_PDF_JPG: 'convert-pdf-jpg',
	CONVERT_PDF_PNG: 'convert-pdf-png',
	CONVERT_PDF_TIF: 'convert-pdf-tif',
	CONVERT_PDF_BMP: 'convert-pdf-bmp',
	CONVERT_IMAGE_PDF: 'convert-image-pdf',
	CONVERT_EPUB_PDF: 'convert-epub-pdf',
	CONVERT_WORD_PDF: 'convert-word-pdf',
	CONVERT_POWER_PDF: 'convert-power-pdf',
	CONVERT_EXCEL_PDF: 'convert-excel-pdf',
	EXTRACT_IMAGES: 'extract_images',
	SET_PASSWORD: 'set_password',
	REMOVE_PASSWORD: 'remove_password',
	ADD_WATERMARK: 'add_watermark',
	ZIP_PDF: 'zip_pdf',
	REMOVE_SITE: 'remove_site',
	EXTRACT_SITE: 'extract_site'
};
