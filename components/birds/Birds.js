import React, { Component } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import { Icon, Container, Header, Content, ListItem, Text, Button, Item, Input } from 'native-base';
import { inject, observer } from 'mobx-react';

import { HeadingsText } from '../../components/presentation/StyledText';

class BirdListItem extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(slug) {
    this.props.navigation.navigate('Bird', { slug: slug });
  }

  render() {
    const { item, navigation } = this.props;

    const birdExtended = item.bird_extended || null;

    return (
      <ListItem onPress={() => this.onPress(item.slug)}>
        <Text style={birdExtended && styles.birdExtended}>
          {item.name} {item.band_combo && `(${item.band_combo})`}
        </Text>
      </ListItem>
    );
  }
}

const ListEmpty = (props) => {
  const { birds, fetchBirds, status } = props.rootStore.birdsStore;
  const isPending = status === 'pending';
  const isEmpty = birds.length === 0;

  return (
    <View style={styles.listEmpty}>
      {!isPending && isEmpty && (
        <Button iconLeft primary onPress={fetchBirds}>
          <Icon ios="ios-refresh" android="md-refresh" />
          <Text>Fetch Birds</Text>
        </Button>
      )}
      {!isPending && !isEmpty && <Text>No birds match your search</Text>}
    </View>
  );
};

class Birds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    this.setState({ text: text });
  }

  filterBirds(birds) {
    const search = new RegExp(`${this.state.text}`, 'i');
    return birds.filter(
      (bird) =>
        search.test(bird.name) || search.test(bird.band_combo) || search.test(bird.primary_band)
    );
  }

  render() {
    const { birds, fetchBirds, status } = this.props.rootStore.birdsStore;
    const { navigation } = this.props;
    const isPending = status === 'pending';
    const { storeLoaded } = this.props.rootStore;

    return (
      <Container>
        {storeLoaded && (
          <>
            <Header searchBar>
              <Item>
                <Icon ios="ios-search" android="md-search" />
                <Input
                  placeholder="Search Birds"
                  onChangeText={(text) => this.onChangeText(text)}
                  value={this.state.text}
                />
              </Item>
            </Header>
            <FlatList
              data={this.filterBirds(birds)}
              keyExtractor={(item) => item.slug}
              renderItem={({ item }) => <BirdListItem item={item} navigation={navigation} />}
              ListEmptyComponent={<ListEmpty {...this.props} />}
              onRefresh={fetchBirds}
              refreshing={isPending}
            />
          </>
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listEmpty: {
    alignSelf: 'center',
    marginTop: 20,
  },
  birdExtended: {
    fontWeight: 'bold',
  },
});

export default inject('rootStore')(observer(Birds));
