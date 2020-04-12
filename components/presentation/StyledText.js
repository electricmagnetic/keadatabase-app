import * as React from 'react';
import { Text } from 'react-native';

const HeadingsText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'zilla-slab' }]} />
);

export { HeadingsText };
