import React from 'react';
import { createTheme } from '../../theming';
import { mountWithTheme } from '../../../utils/testUtils';
import { AutoComplete } from '../../AutoComplete/AutoComplete';

const props = {
  id: 'testId',
  options: ['a', 'b', 'c'],
  featuredOptions: ['b'],
  sortOptions: true,
  theme: createTheme(),
  onOptionSelect: (option: string) => console.log(option),
};

describe('<DropdownList/>', () => {
  test('should render correctly', () => {
    const target = mountWithTheme(<AutoComplete {...props} />);

    expect(target).toMatchSnapshot();
  });
});
