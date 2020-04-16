import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { point, polygon, booleanPointInPolygon } from '@turf/turf';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { HeadingsText } from '../presentation/StyledText';

import tiles from '../../assets/geo/tiles.json';

const LOCATION_SETTINGS = {
  accuracy: Location.Accuracy.High,
  timeInterval: 10000,
  distanceInterval: 10,
};

export default class CurrentGridTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPermission: false,
      error: false,
      location: null,
      removeLocation: null,
    };

    this.watchLocation = this.watchLocation.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.getGridTile = this.getGridTile.bind(this);
    this.checkLocationPermissions = this.checkLocationPermissions.bind(this);
  }

  componentDidMount() {
    //console.log('component mounted')
    this.checkLocationPermissions();
  }

  componentWillUnmount() {
    //console.log('unmounting');
    if (this.state.removeLocation) {
      this.state.removeLocation();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hasPermission !== this.state.hasPermission) {
      this.watchLocation();
    }

    if (prevState.location !== this.state.location) {
      this.props.onGridTileChange(this.getGridTile());
    }
  }

  updateLocation(location) {
    //console.log('updating location');

    this.setState({ location: location });
  }

  async watchLocation() {
    //console.log('getting location')

    const { remove } = await Location.watchPositionAsync(LOCATION_SETTINGS, this.updateLocation);
    this.setState({ removeLocation: remove });
  }

  async checkLocationPermissions() {
    //console.log('checking location permissions');

    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status === 'granted') this.setState({ hasPermission: true, error: false });
    else this.setState({ hasPermission: false, error: true });
  }

  getGridTile() {
    //console.log('getting grid tile');

    const coordinates = this.state.location && this.state.location.coords;
    const pointLocation = coordinates ? point([coordinates.longitude, coordinates.latitude]) : null;

    return tiles.features.reduce(
      (accumulator, tile) =>
        booleanPointInPolygon(pointLocation, polygon(tile.geometry.coordinates))
          ? tile
          : accumulator,
      null
    );
  }

  render() {
    const { hasPermission, error, location } = this.state;
    const { gridTile } = this.props;
    const coordinates = location && location.coords;
    const gridTileId = gridTile && gridTile.id;

    return (
      <View style={styles.container}>
        {hasPermission ? (
          location ? (
            <>
              <Text>You are in grid tile</Text>
              <HeadingsText style={{ fontSize: 30, marginBottom: 5 }}>
                {gridTileId || 'Unknown'}
              </HeadingsText>
              <Text>
                {coordinates.latitude}, {coordinates.longitude}
              </Text>
            </>
          ) : (
            <Text>Finding your current location…</Text>
          )
        ) : (
          <Text>Location permissions are not granted.</Text>
        )}
      </View>
    );
  }
}

CurrentGridTile.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
