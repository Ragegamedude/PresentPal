import { View, Text } from 'react-native';
import React from 'react';
import { createHeaderStyle } from './HeaderStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconSettings } from '../constants/IconSettings';

export default Header = (props) => {
	const HeaderStyle = createHeaderStyle(props.currentTheme);
	return (
		<View style={HeaderStyle.headerWrapper}>
			<View style={HeaderStyle.leftContainer}>
				<View style={HeaderStyle.leftIcon}>
					<MaterialCommunityIcons
						name={'refresh'}
						color={props.currentTheme.secondaryColor}
						size={IconSettings.headerIconSize}
					></MaterialCommunityIcons>
				</View>
			</View>
			<View style={HeaderStyle.centerContainer}>
				<Text style={HeaderStyle.centerText}>{props.title}</Text>
			</View>
			<View style={HeaderStyle.rightContainer}>
				<View style={HeaderStyle.rightIcon}>
					<MaterialCommunityIcons
						name={'refresh'}
						color={props.currentTheme.secondaryColor}
						size={IconSettings.headerIconSize}
					></MaterialCommunityIcons>
				</View>
			</View>
		</View>
	);
};
