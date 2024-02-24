import {
  BackgroundColors,
  BorderColors,
  FontColors,
  LinkColors,
  Palette,
  backgroundColors,
  borderColors,
  fontColors,
  linkColors,
  palette,
} from './colors';
import { FontSizes, fontSizes } from './fontSizes';
import { Spacing, spacing } from './spacing';
import { Breakpoints, breakpoints } from './breakpoints';

type Theme = {
  palette: Palette;
  backgroundColors: BackgroundColors;
  borderColors: BorderColors;
  fontColors: FontColors;
  linkColors: LinkColors;
  spacing: Spacing;
  breakpoints: Breakpoints;
  fontSizes: FontSizes;
};

const shellTheme: Theme = {
  palette,
  backgroundColors,
  borderColors,
  fontColors,
  linkColors,
  fontSizes,
  spacing,
  breakpoints,
};

export { shellTheme };

export type { Theme };
