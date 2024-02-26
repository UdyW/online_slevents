/* TODO fix the below */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import { useThemeFallback } from '../../theming';
import { WithErrorProps } from '../types';

const StyledWithError = styled.div`
  &.has-error {
    padding-left: ${(p) => p.theme.spacing.xs};
    border-left: 2px solid ${(p) => p.theme.borderColors.borderColor2};
  }
`;

const ErrorMessage = styled.p`
  display: block;
  margin: ${(p) => p.theme.spacing.xs2} 0 0;
  font-size: ${(p) => p.theme.fontSizes.sm};
  color: ${(p) => p.theme.fontColors.fontColor1};
`;

const WithError =
  <P extends object>(
    Component: React.ComponentType<P>,
  ): React.FC<P & WithErrorProps> =>
  // eslint-disable-next-line react/display-name
  ({
    hasError = false,
    errorMessage = 'Required',
    theme: propsTheme,
    ...props
  }) => {
    // TODO fix the below
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useThemeFallback(propsTheme);
    const mergedProps = {
      ...props,
      hasError,
    };

    return (
      <StyledWithError className={hasError ? 'has-error' : ''} theme={theme}>
        <Component {...(mergedProps as P & WithErrorProps)} />

        {hasError && (
          <ErrorMessage
            id={`${props.id}-error`}
            className="error-message"
            data-qa="with-error__error-message"
            theme={theme}
          >
            {errorMessage}
          </ErrorMessage>
        )}
      </StyledWithError>
    );
  };

export { WithError };
