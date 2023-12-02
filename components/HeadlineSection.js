import { Text, View } from 'react-native';
import { createHeadlineSectionStyle } from './HeadlineSectionStyle';
import { useContext } from 'react';
import { Context } from '../context/Context';

export default HeadlineSection = (props) => {
	const { theme } = useContext(Context);
	const [currentTheme] = theme;

	const HeadlineSectionStyle = createHeadlineSectionStyle(currentTheme);

	return (
		<View style={HeadlineSectionStyle.headlineSectionWrapper}>
			<Text style={HeadlineSectionStyle.headlineSectionText}>{props.description}</Text>
		</View>
	);
};
