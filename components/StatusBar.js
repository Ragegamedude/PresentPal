import { Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { createStatusBarStyle } from './StatusBarStyle';
import { AppVersions } from '../constants/AppVersions';

export default StatusBar = (props) => {
	const { theme, language, version } = useContext(Context);
	const [currentTheme, setCurrentTheme] = theme;
	const [currentLanguage, setCurrentLanguage] = language;
	const [currentVersion, setCurrentVersion] = version;

	const StatusBarStyle = createStatusBarStyle(currentTheme);

	return (
		<View style={StatusBarStyle.statusWrapper}>
			<View style={StatusBarStyle.status}>
				<Text style={StatusBarStyle.statusHeadline}>{currentLanguage.settingsStatusHeadlineVersion + ': '}</Text>
				<Text style={StatusBarStyle.statusText}>
					{currentVersion === AppVersions.LIGHT
						? currentLanguage.settingsStatusHeadlineFreeVersion
						: currentLanguage.settingsStatusHeadlinePremiumVersion}
				</Text>
			</View>
			<View style={StatusBarStyle.status}>
				<Text style={StatusBarStyle.statusHeadline}>{currentLanguage.settingsStatusHeadlineLimit + ': '}</Text>
				<Text style={StatusBarStyle.statusText}>{currentVersion.fileSizeLimit + ' MB'}</Text>
			</View>
		</View>
	);
};
