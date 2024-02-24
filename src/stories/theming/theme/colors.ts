import { applyAlphaToColour } from './utils/applyAlphaToColour';

type Palette = {
  primary: {
    primary1: string;
    primary2: string;
    primary3: string;
  };
  secondary: {
    secondary1: string;
    secondary2: string;
    secondary3: string;
  };
  neutral: {
    white: string;
    black: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    grey6: string;
  };
  misc: {
    misc1: string;
    misc2: string;
    misc3: string;
    misc4: string;
    misc5: string;
  };
  helpers: {
    applyAlphaToColour: (color: string, alpha: number) => string;
  };
};

type BackgroundColors = {
  backgroundColor1: string;
  backgroundColor2: string;
  backgroundColor3: string;
  backgroundColor4: string;
  backgroundColor5: string;
  backgroundColor6: string;
  backgroundColor7: string;
  backgroundColor8: string;
  backgroundColor9: string;
  backgroundColor10: string;
  backgroundColor11: string;
};

type BorderColors = {
  borderColor1: string;
  borderColor2: string;
  borderColor3: string;
  borderColor4: string;
  borderColor5: string;
  borderColor6: string;
  borderColor7: string;
  borderColor8: string;
  borderColor9: string;
  borderColor10: string;
  borderColor11: string;
};

type FontColors = {
  fontColor1: string;
  fontColor2: string;
  fontColor3: string;
  fontColor4: string;
  fontColor5: string;
  fontColor6: string;
};

type LinkColors = {
  linkColor1: string;
  linkColor2: string;
  linkColor3: string;
  linkColor4: string;
};

const palette: Palette = {
  primary: {
    /**  Shell Yellow */
    primary1: '#EB7400',
    /** Shell Red */
    primary2: '#FFBE29',
    /** Mid Blue */
    primary3: '#00534E',
  },
  secondary: {
    /** Dark Blue */
    secondary1: '#8D153A',
    /** Dark Green */
    secondary2: '#f07014',
    /** Light Blue */
    secondary3: '#921348',
  },
  neutral: {
    /** White */
    white: '#FFFFFF',
    /** Black */
    black: '#000000',
    /** Shell Very Pale Grey */
    grey1: '#F9F9F9',
    /** Shell Pale Grey */
    grey2: '#D9D9D9',
    /** Shell Light Grey */
    grey3: '#A6A6A6',
    /** Shell Mid Grey */
    grey4: '#7F7F7F',
    /** Shell Dark Grey */
    grey5: '#595959',
    /** Shell Very Dark Grey */
    grey6: '#404040',
  },
  misc: {
    /** Dark Red */
    misc1: '#811114',
    /** Mid Red */
    misc2: '#BD2C2F',
    /** Pale Blue */
    misc3: '#62BFD0',
    /** Purple */
    misc4: '#800080',
    /** Dark Blue */
    misc5: '#0A274D',
  },
  helpers: {
    applyAlphaToColour,
  },
};

const backgroundColors: BackgroundColors = {
  backgroundColor1: palette.primary.primary1,
  backgroundColor2: palette.primary.primary2,
  backgroundColor3: palette.primary.primary3,
  backgroundColor4: palette.secondary.secondary1,
  backgroundColor5: palette.secondary.secondary2,
  backgroundColor6: palette.neutral.white,
  backgroundColor7: palette.neutral.grey1,
  backgroundColor8: palette.neutral.grey2,
  backgroundColor9: palette.neutral.grey5,
  backgroundColor10: palette.neutral.grey6,
  backgroundColor11: palette.misc.misc2,
};

const borderColors: BorderColors = {
  borderColor1: palette.primary.primary1,
  borderColor2: palette.primary.primary2,
  borderColor3: palette.primary.primary3,
  borderColor4: palette.secondary.secondary2,
  borderColor5: palette.neutral.grey2,
  borderColor6: palette.neutral.grey3,
  borderColor7: palette.neutral.grey5,
  borderColor8: palette.neutral.grey6,
  borderColor9: palette.neutral.white,
  borderColor10: palette.neutral.grey1,
  borderColor11: palette.neutral.grey4,
};

const fontColors: FontColors = {
  fontColor1: palette.primary.primary2,
  fontColor2: palette.primary.primary3,
  fontColor3: palette.secondary.secondary2,
  fontColor4: palette.neutral.grey6,
  fontColor5: palette.neutral.white,
  fontColor6: palette.neutral.grey4,
};

const linkColors: LinkColors = {
  linkColor1: palette.secondary.secondary1,
  linkColor2: palette.neutral.grey6,
  linkColor3: palette.misc.misc5,
  linkColor4: palette.misc.misc4,
};

export { palette, backgroundColors, borderColors, fontColors, linkColors };

export type { Palette, BackgroundColors, BorderColors, FontColors, LinkColors };
