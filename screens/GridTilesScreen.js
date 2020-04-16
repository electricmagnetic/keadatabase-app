import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import GridTileMap from '../components/geospatial/GridTileMap';
import { HeadingsText } from '../components/presentation/StyledText';

const GridTilesScreen = () => (
  <View style={styles.container}>
    <GridTileMap />
  </View>
);

GridTilesScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default GridTilesScreen;
