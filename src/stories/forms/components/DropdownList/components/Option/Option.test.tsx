import React from 'react';
import Option from './Option';
import { mountWithTheme } from '../../../../utils/testUtils';

const props = {
  option: 'Test option',
  // eslint-disable-next-line no-console
  onSelect: (option) => console.log(option),
};

describe('<Option/>', () => {
  test('renders with required props', () => {
    const target = mountWithTheme(<Option {...props} />);

    expect(target).toMatchSnapshot();
  });
});
