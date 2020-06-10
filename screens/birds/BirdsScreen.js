import React, { Component } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Container, Header, Content, ListItem, Text, Button } from 'native-base';
import { inject, observer } from 'mobx-react';

import { HeadingsText } from '../../components/presentation/StyledText';

class Item extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(slug) {
    this.props.navigation.navigate('Bird', { slug: slug });
  }

  render() {
    const { item, navigation } = this.props;

    return (
      <ListItem onPress={() => this.onPress(item.slug)}>
        <Text>
          {item.name} ({item.band_combo})
        </Text>
      </ListItem>
    );
  }
}

const BirdsScreen = (props) => {
  const { birds, fetchBirds, status } = props.rootStore.birdsStore;
  const { navigation } = props;
  /*const { storeLoaded } = props.rootStore;*/

  return (
    <Container>
      <FlatList
        data={birds}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
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
