import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CurrentGridTile from './CurrentGridTile';
import GridTileMap from './GridTileMap';

export default class GridTileFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridTile: null,
    };
    this.onGridTileChange = this.onGridTileChange.bind(this);
  }

  onGridTileChange(gridTile) {
    this.setState({ gridTile: gridTile });
  }

  render() {
    const { gridTile } = this.state;

    return (
      <View style={styles.container}>
        <CurrentGridTile gridTile={gridTile} onGridTileChange={this.onGridTileChange} />
        <GridTileMap gridTile={gridTile} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
