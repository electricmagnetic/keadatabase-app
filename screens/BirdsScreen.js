import * as React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Container, Header, Content, ListItem, Text, Button } from 'native-base';
import { inject, observer } from 'mobx-react';

import { HeadingsText } from '../components/presentation/StyledText';

function Item({ item }) {
  return (
    <ListItem>
      <Text>
        {item.name} ({item.band_combo})
      </Text>
    </ListItem>
  );
}

const BirdsScreen = (props) => {
  const { birds, fetchBirds, status } = props.rootStore.birdsStore;
  const { storeLoaded } = props.rootStore;

  return (
    <Container>
      <FlatList
        data={birds}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => <Item item={item} />}
        ListEmptyComponent={<Text>No birds loaded. Pull down to refresh.</Text>}
        onRefresh={fetchBirds}
        refreshing={status === 'pending'}
      />
    </Container>
  );
};

BirdsScreen.navigationOptions = {
  header: null,
};

export default inject('rootStore')(observer(BirdsScreen));
