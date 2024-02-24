const clampAlphaValue = (value: number): number => {
  if (value < 0) {
    return 0;
  }

  if (value > 1) {
    return 1;
  }

  return value;
};

const hexToRgb = (colour: string): string => {
  const newcolour = colour?.substring(1) || '';

  if (newcolour) {
    const re = new RegExp(`.{1,${newcolour.length / 3}}`, 'g');

    let colours: Array<string> = newcolour.match(re);

    if (colours && colours[0].length === 1) {
      colours = colours.map((n) => n + n);
    }

    return colours
      ? `rgb(${colours.map((n) => parseInt(n, 16)).join(', ')})`
      : '';
  }

  return '';
};

/**
 * Apply alpha to an rbg or hex colour
 *
 * @example
 * ```
 * applyAlphaToColour('#000', 0.5);
 * applyAlphaToColour('#000000', 0.5);
 * applyAlphaToColour('rgb(1, 1, 1)', 0.5);
 * applyAlphaToColour(theme.palette.primary.primary1, 0.5);
 * ```
 *
 * @param {string} colour - an rgb or hex colour
 * @param {number} alpha - a value between 0 and 1
 */
const applyAlphaToColour = (colour: string, alphaValue: number): string => {
  if (colour && alphaValue) {
    let rgbColour = colour;

    if (rgbColour.charAt(0) === '#') {
      rgbColour = hexToRgb(rgbColour);
    }

    const marker = rgbColour.indexOf('(');

    const type = rgbColour.substring(0, marker);

    if (type !== 'rgb') {
      throw new Error(`applyAlphaToColour: unsupported colour ${colour}`);
    }

    const colourValues = rgbColour
      .substring(marker + 1, rgbColour.length - 1)
      .split(',');

    const clampedAlpha = clampAlphaValue(alphaValue);

    return `rgba(${colourValues.join(',')}, ${clampedAlpha})`;
  }

  throw new Error(
    'applyAlphaToColour: the colour or alpha value provided is not valid',
  );
};

export { clampAlphaValue, hexToRgb, applyAlphaToColour };
