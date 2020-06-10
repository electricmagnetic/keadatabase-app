import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';
import { inject, observer } from 'mobx-react';

const BirdScreen = (props) => {
  const { route, navigation, rootStore } = props;

  const { birds } = rootStore.birdsStore;
  const { slug } = route.params;

  const bird = birds.find((bird) => bird.slug === slug);

  return (
    <View style={styles.container}>
      <Text>Bird: {slug}</Text>
      <Text>Name: {bird.name}</Text>
      <Text>Status: {bird.status}</Text>
      <Text>Sex: {bird.sex}</Text>
      <Text>Life Stage: {bird.life_stage}</Text>
      <Text>Study Area: {bird.study_area}</Text>
      <Text>Primary Band: {bird.primary_band}</Text>
      <Text>Band Combo {bird.band_combo}</Text>
      {bird.bird_extended && (
        <>
          <Text>Description: {bird.bird_extended.description}</Text>
          <Image
            source={{ uri: bird.bird_extended.profile_picture.thumbnail }}
            style={{ width: 350, height: 250 }}
          />
          <Text>Profile Picture: {bird.bird_extended.profile_picture_attribution}</Text>
        </>
      )}
    </View>
  );
};

BirdScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

BirdScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
};

export default inject('rootStore')(observer(BirdScreen));
