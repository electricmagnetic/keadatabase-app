import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
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

const MenuScreen = () => (
  <Container>
    <Content>
      <List>
        <Separator bordered>
          <Text>Online Resources</Text>
        </Separator>
        <ListItem
          icon
          button={true}
          onPress={() => WebBrowser.openBrowserAsync('https://keadatabase.nz')}
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
          onPress={() => WebBrowser.openBrowserAsync('https://survey.keadatabase.nz')}
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
            Version: {Constants.nativeBuildVersion} &middot; By ElectricMagnetic
          </Text>
        </ListItem>
      </List>
    </Content>
  </Container>
);

export default MenuScreen;
