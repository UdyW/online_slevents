import '!style-loader!css-loader!./globalStyles.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { createTheme } from '../src/stories/theming/createTheme';
/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
      default: createTheme()
  },
  Provider: ThemeProvider,
})];