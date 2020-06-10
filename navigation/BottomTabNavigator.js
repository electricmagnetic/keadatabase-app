import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/presentation/TabBarIcon';

import HomeStackScreen from './HomeStack';
import SurveyStackScreen from './SurveyStack';
import BirdStackScreen from './BirdStack';
import MenuStackScreen from './MenuStack';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const BottomTabNavigator = ({ navigation, route }) => {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="SurveyStack"
        component={SurveyStackScreen}
        options={{
          title: 'Survey',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-grid" />,
        }}
      />
      <BottomTab.Screen
        name="BirdStack"
        component={BirdStackScreen}
        options={{
          title: 'Birds',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
        }}
      />
      <BottomTab.Screen
        name="MenuStack"
        component={MenuStackScreen}
        options={{
          title: 'Menu',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-menu" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
