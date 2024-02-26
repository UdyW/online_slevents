import { Theme } from '../../theming';

export type WithErrorProps = {
  id?: string;
  hasError?: boolean;
  errorMessage?: string;
  theme?: Theme;
};
