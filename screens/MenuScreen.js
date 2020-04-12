import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

const OptionButton = ({ icon, label, onPress, isLastOption }) => (
  <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.optionIconContainer}>
        <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
      </View>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{label}</Text>
      </View>
    </View>
  </RectButton>
);

const MenuScreen = () => (
  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <Text style={[styles.option, { fontWeight: 'bold', paddingBottom: 5 }]}>Online Resources</Text>
    <OptionButton
      icon="md-book"
      label="Kea Database"
      onPress={() => WebBrowser.openBrowserAsync('https://keadatabase.nz')}
    />

    <OptionButton
      icon="md-grid"
      label="Kea Survey Tool"
      onPress={() => WebBrowser.openBrowserAsync('https://survey.keadatabase.nz')}
    />

    <OptionButton
      icon="md-map"
      label="Kea Map"
      onPress={() => WebBrowser.openBrowserAsync('https://map.keadatabase.nz')}
    />

    <Text style={[styles.option, { marginTop: 20, borderWidth: 0 }]}>
      <Text style={{ fontWeight: 'bold' }}>Kea App Beta</Text>
      {'\n'}
      By ElectricMagnetic
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

export default MenuScreen;
