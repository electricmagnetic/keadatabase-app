import * as React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import Bird from '../../components/birds/Bird';

const BirdScreen = ({ route, birdsStore }) => {
  const { birds } = birdsStore;
  const { slug } = route.params;

  const bird = birds.find((bird) => bird.slug === slug);

  return <Bird bird={bird} />;
};

BirdScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
};

export default inject('birdsStore')(observer(BirdScreen));
