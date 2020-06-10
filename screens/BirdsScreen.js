import * as React from 'react';
import { FlatList } from 'react-native';
import { Container, Header, Content, ListItem, Text } from 'native-base';

import { HeadingsText } from '../components/presentation/StyledText';

import tempBirds from '../assets/geo/tempBirds.json';

function Item({ item }) {
  return (
    <ListItem key={item.slug}>
      <Text>
        {item.bird && item.bird.name} ({item.name})
      </Text>
    </ListItem>
  );
}

const BirdsScreen = () => (
  <Container>
    <FlatList
      data={tempBirds.results}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.slug}
    />
  </Container>
);

BirdsScreen.navigationOptions = {
  header: null,
};

export default BirdsScreen;
