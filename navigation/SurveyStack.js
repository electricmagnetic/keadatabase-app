import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GridTilesScreen from '../screens/GridTilesScreen';

const SurveyStack = createStackNavigator();

const SurveyStackScreen = () => (
  <SurveyStack.Navigator>
    <SurveyStack.Screen name="Grid Tiles" component={GridTilesScreen} />
  </SurveyStack.Navigator>
);

export default SurveyStackScreen;
