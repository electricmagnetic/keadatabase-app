import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import MapView, { Geojson, UrlTile } from 'react-native-maps';

import CurrentGridTile from '../components/geospatial/CurrentGridTile';
import { HeadingsText } from '../components/presentation/StyledText';
// import tiles from '../assets/geo/tiles.json';
import birdAtlas from '../assets/geo/birdAtlas.json';

const GridTilesScreen = () => (
  <View style={styles.container}>
    <CurrentGridTile />
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: -43.983333,
        longitude: 170.45,
        latitudeDelta: 5,
        longitudeDelta: 5,
      }}
      showsUserLocation={true}
    >
      <Geojson geojson={birdAtlas} strokeColor="black" strokeWidth={1} />
    </MapView>
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
