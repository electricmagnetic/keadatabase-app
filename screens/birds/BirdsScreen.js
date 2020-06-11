import React, { Component } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import { Icon, Container, Header, Content, ListItem, Text, Button } from 'native-base';
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

const ListEmpty = (props) => {
  const { birds, fetchBirds, status } = props.rootStore.birdsStore;
  const isPending = status === 'pending';

  return (
    <View style={styles.listEmpty}>
      {!isPending && (
        <Button iconLeft primary onPress={fetchBirds}>
          <Icon ios="ios-refresh" android="md-refresh" />
          <Text>Fetch Birds</Text>
        </Button>
      )}
    </View>
  );
};

const BirdsScreen = (props) => {
  const { birds, fetchBirds, status } = props.rootStore.birdsStore;
  const { navigation } = props;
  const isPending = status === 'pending';
  /*const { storeLoaded } = props.rootStore;*/

  return (
    <Container>
      <FlatList
        data={birds}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        ListEmptyComponent={<ListEmpty {...props} />}
        onRefresh={fetchBirds}
        refreshing={isPending}
      />
    </Container>
  );
};

BirdsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  listEmpty: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default inject('rootStore')(observer(BirdsScreen));
