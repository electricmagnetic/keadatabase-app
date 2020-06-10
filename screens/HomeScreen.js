import * as React from 'react';
import { Container, Text } from 'native-base';

import GridTileFinder from '../components/geospatial/GridTileFinder';

const HomeScreen = () => (
  <Container>
    <GridTileFinder showMap={false} />
  </Container>
);

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
