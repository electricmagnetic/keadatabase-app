import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';

import Constants from 'expo-constants';

import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Button,
  Icon,
  Separator,
} from 'native-base';

const MenuScreen = (props) => (
  <Container>
    <Content>
      <List>
        <Separator bordered>
          <Text>Forms</Text>
        </Separator>
        <ListItem icon button={true} onPress={() => props.navigation.navigate('ReportObservation')}>
          <Left>
            <Icon ios="ios-eye" android="md-eye" />
          </Left>
          <Body>
            <Text>Report Observation</Text>
          </Body>
        </ListItem>
        <ListItem icon button={true} onPress={() => props.navigation.navigate('SubmitSurvey')}>
          <Left>
            <Icon ios="ios-clipboard" android="md-clipboard" />
          </Left>
          <Body>
            <Text>Submit Survey</Text>
          </Body>
        </ListItem>
        <Separator bordered>
          <Text>Online Resources</Text>
        </Separator>
        <ListItem
          icon
          button={true}
          onPress={() =>
            WebBrowser.openBrowserAsync('https://keadatabase.nz', { enableBarCollapsing: true })
          }
        >
          <Left>
            <Icon ios="ios-filing" android="md-filing" />
          </Left>
          <Body>
            <Text>Kea Database</Text>
          </Body>
        </ListItem>
        <ListItem
          icon
          button={true}
          onPress={() =>
            WebBrowser.openBrowserAsync('https://survey.keadatabase.nz', {
              enableBarCollapsing: true,
            })
          }
        >
          <Left>
            <Icon ios="ios-grid" android="md-grid" />
          </Left>
          <Body>
            <Text>Kea Survey Tool</Text>
          </Body>
        </ListItem>
        <Separator bordered>
          <Text>About</Text>
        </Separator>
        <ListItem last>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>Kea App</Text>
            {'\n'}
            By ElectricMagnetic
            {'\n\n'}
            <Text>Build: {Constants.nativeBuildVersion}</Text>
          </Text>
        </ListItem>
      </List>
    </Content>
  </Container>
);

export default MenuScreen;
