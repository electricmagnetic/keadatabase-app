import * as React from 'react';
import renderer from 'react-test-renderer';

import { HeadingsText } from '../presentation/StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<HeadingsText>Snapshot test!</HeadingsText>).toJSON();

  expect(tree).toMatchSnapshot();
});
