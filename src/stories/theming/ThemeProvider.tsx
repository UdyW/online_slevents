import React, { useContext } from 'react';
import { Theme, shellTheme } from './theme';

type Props = {
  theme?: Theme;
  children: React.ReactNode;
};

const ThemeContext = React.createContext(shellTheme);

const ThemeProvider: React.FC<Props> = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

const useTheme = (): Theme => useContext(ThemeContext);

const useThemeFallback = (propsTheme?: Theme): Theme => {
  const auroraTheme = useTheme();

  return propsTheme || auroraTheme || shellTheme;
};

export { ThemeProvider, useTheme, useThemeFallback, ThemeContext };
