import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theming';
import 'jest-styled-components';

export const mountWithTheme = (children: React.ReactChild): ReactWrapper =>
  mount(<ThemeProvider theme={createTheme()}>{children}</ThemeProvider>);
