import React from 'react';
import { Label } from './Label';
import { mountWithTheme } from '../utils/testUtils';

describe('<Label />', () => {
  const elements = {
    label: 'label.label',
  };

  const props = {
    id: 'abc-123',
    label: 'test label',
  };

  test('should render correctly', () => {
    const target = mountWithTheme(<Label {...props} />);

    expect(target).toMatchSnapshot();

    expect(target.find(elements.label).prop('htmlFor')).toBe(props.id);

    expect(target.find(elements.label).text()).toBe(props.label);
  });
});
