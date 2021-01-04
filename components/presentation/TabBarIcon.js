import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const TabBarIcon = (props) => (
  <Ionicons
    name={props.name}
    size={25}
    style={{ marginBottom: -5 }}
    color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

export default TabBarIcon;
