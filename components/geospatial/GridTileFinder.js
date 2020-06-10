import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CurrentGridTile from './CurrentGridTile';
import GridTileMap from './GridTileMap';

class GridTileFinder extends Component {
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
    const { showMap } = this.props;

    return (
      <View style={styles.container}>
        <CurrentGridTile gridTile={gridTile} onGridTileChange={this.onGridTileChange} />
        {showMap && <GridTileMap gridTile={gridTile} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

GridTileFinder.defaultProps = {
  showMap: true,
};

export default GridTileFinder;
