import React from 'react';
import { createTheme } from '../../theming';
import { AutoComplete, AutoCompleteProps } from '../AutoComplete';
import { mountWithTheme } from '../../../utils/testUtils';

const props: AutoCompleteProps = {
  id: 'abc-123',
  supportingText: '',
  hint: '',
  options: ['Account: 6577576', 'Account: 2056907', 'Account: 4676884'],
  // eslint-disable-next-line no-console
  onOptionSelect: (option) => console.log(option),
  theme: createTheme(),
};

describe('<AutoComplete />', () => {
  test('should render correctly', () => {
    const target = mountWithTheme(<AutoComplete {...props} />);

    expect(target).toMatchSnapshot();

    expect(target.find('input').prop('id')).toBe(props.id);
  });

  test('should have supporting text', () => {
    props.supportingText = 'This is some supporting text';

    const target = mountWithTheme(<AutoComplete {...props} />);

    expect(target).toMatchSnapshot();
  });

  test('should have hint text', () => {
    props.hint = 'This is hint text';

    const target = mountWithTheme(<AutoComplete {...props} />);

    expect(target).toMatchSnapshot();
  });

  test('should pass random props to autocomplete', () => {
    props['data-qa'] = 'autocomplete--main';

    const target = mountWithTheme(<AutoComplete {...props} />);

    expect(target).toMatchSnapshot();

    expect(target.find('input').prop('data-qa')).toBe(props['data-qa']);
  });

  test('should change value attribute when onChange event occurs', () => {
    const value = 'test';
    const onChange = jest.fn();
    const target = mountWithTheme(
      <AutoComplete {...props} onChange={onChange} />,
    );

    target.find('input').simulate('change', { target: { value } });

    expect(target.find('input').prop('value')).toEqual(value);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test("should invoke the onBlur function if it's provided in component props", () => {
    const onBlur = jest.fn();

    const target = mountWithTheme(<AutoComplete {...props} onBlur={onBlur} />);

    target.find('input').simulate('blur');

    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test("should invoke the onFocus function if it's provided in component props", () => {
    const onFocus = jest.fn();

    const target = mountWithTheme(
      <AutoComplete {...props} onFocus={onFocus} />,
    );

    target.find('input').simulate('focus');

    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  test("should invoke the onKeyDown function if it's provided in component props", () => {
    const onKeyDown = jest.fn();

    const target = mountWithTheme(
      <AutoComplete {...props} onKeyDown={onKeyDown} />,
    );

    target.find('input').simulate('keydown');

    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  test('should invoke the onOptionSelect function when selecting an option', () => {
    const onOptionSelect = jest.fn();

    const target = mountWithTheme(
      <AutoComplete {...props} onOptionSelect={onOptionSelect} />,
    );

    target.find('li').first().simulate('click');

    expect(onOptionSelect).toHaveBeenCalledTimes(1);
  });
});
