import { Text, View } from 'react-native';
import React from 'react';
import { createHeaderStyle } from './HeaderStyle';

export default Header = (props) => {
	const HeaderStyle = createHeaderStyle(props.currentTheme);
	return (
		<View style={HeaderStyle.headerWrapper}>
			<View style={HeaderStyle.leftContainer}>
				<View style={HeaderStyle.leftIcon}></View>
			</View>
			<View style={HeaderStyle.centerContainer}>
				<Text style={HeaderStyle.centerText}>{props.title}</Text>
			</View>
			<View style={HeaderStyle.rightContainer}>
				<View style={HeaderStyle.rightIcon}></View>
			</View>
		</View>
	);
};
