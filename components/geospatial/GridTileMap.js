import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MapView, { UrlTile, Marker, Polygon } from 'react-native-maps';

import CurrentGridTile from './CurrentGridTile';

import tiles from '../../assets/geo/tiles.json';

export default class GridTileMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -43.983333,
        longitude: 170.45,
        latitudeDelta: 6,
        longitudeDelta: 6,
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gridTile !== this.props.gridTile) {
      const { gridTile } = this.props;

      // Only update region if gridTile isn't null
      if (gridTile) {
        this.setState({
          region: Object.assign({}, this.getCentroidLatLng(gridTile), {
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }),
        });
      }
    }
  }

  getPolygonLatLngs(gridTile) {
    return gridTile.geometry.coordinates[0].map((coordinates) => ({
      longitude: coordinates[0],
      latitude: coordinates[1],
    }));
  }

  getCentroidLatLng(gridTile) {
    return {
      longitude: gridTile.properties.centroid.coordinates[0],
      latitude: gridTile.properties.centroid.coordinates[1],
    };
  }

  getNeighbours(gridTile) {
    return gridTile.properties.neighbours.map((neighbourId) =>
      tiles.features.find(({ id }) => id === neighbourId)
    );
  }

  render() {
    const { region } = this.state;
    const { gridTile } = this.props;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={region}
          showsUserLocation={true}
          minZoomLevel={4}
          maxZoomLevel={15}
        >
          {gridTile && (
            <>
              <Polygon
                coordinates={this.getPolygonLatLngs(gridTile)}
                strokeColor="rgba(255,0,0,1)"
                fillColor="rgba(255,0,0,0.25)"
              />
              <Marker coordinate={this.getCentroidLatLng(gridTile)}>
                <Text>{gridTile.id}</Text>
              </Marker>
              {this.getNeighbours(gridTile).map((neighbour) => (
                <React.Fragment key={neighbour.id}>
                  <Polygon
                    coordinates={this.getPolygonLatLngs(neighbour)}
                    strokeColor="rgba(85,85,85,1)"
                    fillColor="rgba(85,85,85,0.25)"
                    strokeWidth={0.5}
                  />
                  <Marker coordinate={this.getCentroidLatLng(neighbour)}>
                    <Text>{neighbour.id}</Text>
                  </Marker>
                </React.Fragment>
              ))}
            </>
          )}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
