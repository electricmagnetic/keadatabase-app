import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { inject, observer } from 'mobx-react';

const BirdScreen = (props) => {
  const { route, navigation, rootStore } = props;

  const { birds } = rootStore.birdsStore;
  const { slug } = route.params;

  const bird = birds.find((bird) => bird.slug === slug);
  const birdExtended = bird.bird_extended || null;

  const htmlContent = `
      ${
        birdExtended && birdExtended.profile_picture
          ? `<p><img src=${birdExtended.profile_picture.large} /></p>`
          : ''
      }
      <div style="padding: 5%;">
        <div>
          <h1>${bird.name}</h1>
          <dl>
            <dd>${bird.status} ${bird.sex} ${bird.get_life_stage} &middot; ${bird.study_area}</dd>
            <dd>${bird.primary_band} &middot; ${bird.band_combo}</dd>
          </dl>
        </div>
        <div>
          ${birdExtended && birdExtended.description ? `<p>${birdExtended.description}</p>` : ''}
          ${
            birdExtended && birdExtended.profile_picture_attribution
              ? `<p>Photo: ${birdExtended.profile_picture_attribution}</p>`
              : ''
          }
        </div>
      </div>
  `;

  return (
    <ScrollView style={{ flex: 1 }}>
      <HTML
        html={htmlContent}
        imagesMaxWidth={Dimensions.get('window').width}
        baseFontStyle={{ fontSize: 16 }}
      />
    </ScrollView>
  );
};

BirdScreen.navigationOptions = {
  header: null,
};

BirdScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
};

export default inject('rootStore')(observer(BirdScreen));
