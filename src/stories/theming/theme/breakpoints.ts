type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2';

type Breakpoints = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xl2: string;
  /**
   * Applies styling to screensizes above the breakpoint provided
   *
   * @example
   * ```
   * theme.breakpoints.up('xs') {
   *   display: none;
   * }
   * ```
   *
   * @param {Breakpoint} breakpoint - xs, sm, md, lg, xl or xl2
   */
  up: (breakpoint: Breakpoint) => string;
};

const breakpoints: Breakpoints = {
  /** Small mobile portrait (Apple iPhone 3GS) / Mobile landscape (Samsung Galaxy S) */
  xs: '480px',
  /** Mobile landscape (Apple iPhone SE) */
  sm: '640px',
  /** Chromebook (Samsung Chromebook) / Small tablet landscape (Apple iPad Mini) */
  md: '768px',
  /** Large retina mobile portrait (Apple iPhone Xr) */
  lg: '896px',
  /** Large mobile landscape (Apple iPhone 8 Plus) / Small laptop (Dell XPS 13) */
  xl: '1080px',
  /** Laptop (Apple MacBook Pro 13-inch) */
  xl2: '1600px',
  up: (breakpoint) => {
    if (breakpoint) {
      return `@media (min-width: ${breakpoints[breakpoint]})`;
    }

    throw new Error(
      'breakpoints.up:: the breakpoint provided is invalid, ' +
        'please use one of the following:: xs, sm, md, lg, xl or xl2',
    );
  },
};

export { breakpoints, Breakpoints };
