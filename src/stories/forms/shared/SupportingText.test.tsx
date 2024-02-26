import React from 'react';
import { SupportingText } from './SupportingText';
import { mountWithTheme } from '../utils/testUtils';

describe('<SupportingText />', () => {
  test('should render correctly', () => {
    const target = mountWithTheme(<SupportingText content="Test content" />);

    expect(target).toMatchSnapshot();
  });

  test('should render child components', () => {
    const ContentComponent = () => <p>Content component copy</p>;

    const target = mountWithTheme(
      <SupportingText content={<ContentComponent />} />,
    );

    expect(target).toMatchSnapshot();
  });

  test('should render correctly with a position of top', () => {
    const target = mountWithTheme(
      <SupportingText content="Test content" position="top" />,
    );

    expect(target).toMatchSnapshot();

    expect(target.find('div.supporting-text--top')).toHaveLength(1);
  });

  test('should render correctly with a position of bottom', () => {
    const target = mountWithTheme(
      <SupportingText content="Test content" position="bottom" />,
    );

    expect(target).toMatchSnapshot();

    expect(target.find('div.supporting-text--bottom')).toHaveLength(1);
  });
});
