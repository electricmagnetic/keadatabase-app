import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from '../screens/menu/MenuScreen';
import ReportObservationScreen from '../screens/menu/ReportObservationScreen';
import SubmitSurveyScreen from '../screens/menu/SubmitSurveyScreen';

const MenuStack = createStackNavigator();

const MenuStackScreen = () => (
  <MenuStack.Navigator>
    <MenuStack.Screen name="Menu" component={MenuScreen} />
    <MenuStack.Screen
      name="ReportObservation"
      component={ReportObservationScreen}
      options={{ title: 'Report Observation' }}
    />
    <MenuStack.Screen
      name="SubmitSurvey"
      component={SubmitSurveyScreen}
      options={{ title: 'Submit Survey' }}
    />
  </MenuStack.Navigator>
);

export default MenuStackScreen;
