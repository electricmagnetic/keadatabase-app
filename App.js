import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'mobx-react';
import { AsyncStorage } from 'react-native';
import { AsyncTrunk, date } from 'mobx-sync';
import 'mobx-react-lite/batchingForReactNative';

import store from './store/store';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const Stack = createStackNavigator();

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState();

        // Load fonts
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
          'zilla-slab': require('./assets/fonts/ZillaSlab-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider rootStore={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <BottomTabNavigator />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
};

const trunk = new AsyncTrunk(store, { storage: AsyncStorage });
trunk.init().then(() => {
  store.storeLoaded = true;
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
