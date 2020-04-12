import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/presentation/TabBarIcon';
import GridTilesScreen from '../screens/GridTilesScreen';
import MenuScreen from '../screens/MenuScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Grid Tiles';

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Grid Tiles':
      return 'Grid Tiles';
    case 'Menu':
      return 'Main Menu';
  }
}

const BottomTabNavigator = ({ navigation, route }) => {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Grid Tiles"
        component={GridTilesScreen}
        options={{
          title: 'Grid Tiles',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: 'Menu',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-menu" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
