import {ActivityIndicator, Modal, View} from "react-native";
import {useContext} from "react";
import {Context} from "../context/Context";
import {createLoadingContentStyle} from "./LoadingContentStyle";
import {IconSettings} from "../constants/IconSettings";
import {Text} from "react-native";

export default LoadingContent = (props) => {
  const {theme, language} = useContext(Context)
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;

  const LoadingContentStyle = createLoadingContentStyle(currentTheme)
  return (
      <Modal animationType={'fade'} transparent={true} visible={props.loading}>
        <View style={LoadingContentStyle.loadingContentWrapper}>
          <View style={LoadingContentStyle.loadingContentIndicator}>
            <ActivityIndicator animating={true}
                               color={currentTheme.colors.primary}
                               theme={currentTheme}
                               size={IconSettings.loadingIndicatorSize}/>
          </View>
          <Text style={LoadingContentStyle.loadingText}>{currentLanguage.loading}</Text>
        </View>
      </Modal>
  )
}