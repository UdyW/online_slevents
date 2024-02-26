import React from 'react';
import { WithError } from './WithError';
import { mountWithTheme } from '../utils/testUtils';

const TestComponent = () => <>Test</>;
const TestComponentWithError = WithError(TestComponent);

const props = {
  id: 'text-id',
  content: 'test content',
};

describe('WithError()', () => {
  test('should render correctly', () => {
    const target = mountWithTheme(<TestComponentWithError {...props} />);

    expect(target).toMatchSnapshot();
  });
});
