import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BirdScreen from '../screens/birds/BirdScreen';
import BirdsScreen from '../screens/birds/BirdsScreen';

const BirdStack = createStackNavigator();

const BirdStackScreen = () => (
  <BirdStack.Navigator>
    <BirdStack.Screen name="Birds" component={BirdsScreen} />
    <BirdStack.Screen name="Bird" component={BirdScreen} />
  </BirdStack.Navigator>
);

export default BirdStackScreen;
