import React from 'react';
import { events } from '../../helpers';
import { mountWithTheme } from '../../../../utils/testUtils';
import { TextField } from '../../../TextField';
import { Option } from '../../../DropdownList/components';

describe('event', () => {
  const mockFn = jest.fn();

  test('onBlur should execute without optional props provided', () => {
    const onBlur = jest.fn(events.onBlur);
    const target = mountWithTheme(
      <TextField id="test" onBlur={(event) => onBlur(event, mockFn)} />,
    );

    target.find('input').simulate('blur');

    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test('onChange should execute without optional props provided', () => {
    const onChange = jest.fn(events.onChange);

    const target = mountWithTheme(
      <TextField
        id="test"
        onChange={(event) => onChange(event, mockFn, mockFn)}
      />,
    );

    target.find('input').simulate('change');

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('onFocus should execute without optional props provided', () => {
    const onFocus = jest.fn(events.onFocus);
    const target = mountWithTheme(
      <TextField id="test" onFocus={(event) => onFocus(event, mockFn)} />,
    );

    target.find('input').simulate('focus');

    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  test('onKeyDown should execute without optional props provided', () => {
    const onKeyDown = jest.fn(events.onKeyDown);
    const target = mountWithTheme(
      <TextField
        id="test"
        onKeyDown={(event) =>
          onKeyDown(event, 0, ['test'], 'test', '', mockFn, mockFn, mockFn)
        }
      />,
    );

    target.find('input').simulate('keyDown', { code: 'ArrowUp' });
    target.find('input').simulate('keyDown', { code: 'ArrowDown' });
    target.find('input').simulate('keyDown', { code: 'Enter' });

    expect(onKeyDown).toHaveBeenCalledTimes(3);
  });

  test('onKeyDown should execute with search text and non 0 index', () => {
    const onKeyDown = jest.fn(events.onKeyDown);
    const target = mountWithTheme(
      <TextField
        id="test"
        onKeyDown={(event) =>
          onKeyDown(
            event,
            1,
            ['test', 'test1', 'test2'],
            'test1',
            'te',
            mockFn,
            mockFn,
            mockFn,
          )
        }
      />,
    );

    target.find('input').simulate('keyDown', { code: 'ArrowUp' });
    target.find('input').simulate('keyDown', { code: 'ArrowDown' });

    expect(onKeyDown).toHaveBeenCalledTimes(2);
  });

  test('onSelect should execute without optional props provided', () => {
    const onSelect = jest.fn(events.onSelect);
    const target = mountWithTheme(
      <ul>
        <Option
          option="test"
          onSelect={(option) => onSelect(option, mockFn, mockFn)}
        />
      </ul>,
    );

    target.find('li').simulate('click');

    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
