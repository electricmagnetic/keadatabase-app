import React, { Component } from 'react';

import Birds from '../../components/birds/Birds';

class BirdsScreen extends Component {
  render() {
    return <Birds {...this.props} />;
  }
}

export default BirdsScreen;
