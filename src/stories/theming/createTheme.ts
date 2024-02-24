import merge from 'deepmerge';
import { Theme, shellTheme } from './theme';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/**
 * Extend the ShellEnergy theme or override properties
 *
 * @remarks
 * The created theme will need to be passed to the ThemeProvider
 *
 * @example
 * ```
 * type ExtendedTheme = {
 *   customColor: string;
 *   optionalProp?: string;
 * };
 * createTheme<ExtendedTheme>({
 *   customColor: '#ff0000',
 *   palette: {
 *     primary: {
 *       primary1: '#000'
 *     }
 *   }
 * });
 * ```
 *
 * @param {object} themeOptions - a theme object
 */
const createTheme = <T extends Record<string, unknown>>(
  themeOptions: DeepPartial<Theme> & T = null,
): Theme & T =>
  merge<Theme, DeepPartial<Theme> & T>(shellTheme, themeOptions || {});

export { createTheme };
