import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from '../screens/MenuScreen';

const MenuStack = createStackNavigator();

const MenuStackScreen = () => (
  <MenuStack.Navigator>
    <MenuStack.Screen name="Menu" component={MenuScreen} />
  </MenuStack.Navigator>
);

export default MenuStackScreen;
