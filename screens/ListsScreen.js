import {ScrollView, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {Context} from '../context/Context';
import {createListsScreenStyle} from './ListsScreenStyle';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {AppVersions} from '../constants/AppVersions';
import Header from '../components/Header';
import {Button,Card,Chip,Dialog,Modal,ProgressBar,Searchbar,Menu,List,HelperText,MD3Colors,Icon,Checkbox,Avatar,Text, FAB, PaperProvider, Portal} from "react-native-paper";

export default ListsScreen = ({navigation, props}) => {
  const {theme, language, version, personalAds} = useContext(Context);
  const [currentTheme, setCurrentTheme] = theme;
  const [currentLanguage, setCurrentLanguage] = language;
  const [currentVersion, setCurrentVersion] = version;
  const [showPersonalAds, setShowPersonalAds] = personalAds;

  const adUnitId = __DEV__ ? TestIds.BANNER
      : 'ca-app-pub-9694787014775307/4284015587';

  const ListsScreenStyle = createListsScreenStyle(currentTheme);

  const [fabOpen, setFabOpen] = useState(false);
  const toggleFabOpen = () => setFabOpen(!fabOpen);
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
      <PaperProvider theme={currentTheme}>
        <View style={ListsScreenStyle.lists}>
          <Header screen={'settings'} title={currentLanguage.listsScreenTitle}
                  currentTheme={currentTheme}></Header>
          <ScrollView>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
              Press me
            </Button>
            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
              <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
              </Card.Content>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>
            <Checkbox
                status={true ? 'checked' : 'unchecked'}
                onPress={() => {
                  setFabOpen(!fabOpen);
                }}
            />
            <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
            <Dialog visible={false} onDismiss={false}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">This is simple dialog</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={false}>Done</Button>
              </Dialog.Actions>
            </Dialog>
            <HelperText type="error" visible={true}>
              Email address is invalid!
            </HelperText>
            <List.Accordion
                title="Uncontrolled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
                title="Controlled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}
                expanded={false}
                onPress={console.log("test")}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
            <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
            <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
            <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Cut" disabled />
            <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Copy" disabled />
            <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
            <ProgressBar progress={0.5} color={MD3Colors.error50} />
            <Portal>
              <FAB.Group
                  open={fabOpen}
                  visible={true}
                  icon={fabOpen ? 'close' : 'plus'}
                  actions={[
                    {icon: 'plus', onPress: () => console.log('Pressed add')},
                    {
                      icon: 'star',
                      label: 'Star',
                      onPress: () => console.log('Pressed star'),
                    },
                    {
                      icon: 'email',
                      label: 'Email',
                      onPress: () => console.log('Pressed email'),
                    },
                    {
                      icon: 'bell',
                      label: 'Remind',
                      onPress: () => console.log('Pressed notifications'),
                    },
                  ]}
                  onStateChange={toggleFabOpen}
                  onPress={() => {
                    if (fabOpen) {
                      // do something if the speed dial is open
                    }
                  }}
              />
            </Portal>
          </ScrollView>
          {currentVersion === AppVersions.LIGHT && (
              <BannerAd
                  unitId={adUnitId}
                  size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                  requestOptions={{
                    requestNonPersonalizedAdsOnly: showPersonalAds
                  }}
              ></BannerAd>
          )}
        </View>
      </PaperProvider>
  );
};
