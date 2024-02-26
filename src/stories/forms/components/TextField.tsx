import { Theme, useThemeFallback } from '../../theming';
import React, { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import { Label } from '../shared/Label';
import { SupportingText } from '../shared/SupportingText';
import { WithError } from '../shared/WithError';
import { WithErrorProps } from '../types';

type TextFieldType = 'text' | 'email' | 'tel' | 'number' | 'password' | 'url';

type Props = React.HTMLProps<HTMLInputElement> & {
  id: string;
  type?: TextFieldType;
  label?: string;
  hint?: ReactNode;
  supportingText?: ReactNode;
  removeBrowserDefaults?: boolean;
  theme?: Theme;
} & WithErrorProps;

const StyledTextField = styled.input`
  width: 100%;
  padding: ${(p) => p.theme.spacing.sm};
  margin: 0;
  background: ${(p) => p.theme.backgroundColors.backgroundColor6};
  border: 1px solid ${(p) => p.theme.borderColors.borderColor5};
  color: ${(p) => p.theme.palette.neutral.grey5};
  transition: all 0.2s ease-in-out;
  font-size: ${(p) => p.theme.fontSizes.sm};

  &:active,
  &:hover {
    border: 1px solid ${(p) => p.theme.borderColors.borderColor11};
  }

  &:disabled {
    background: ${(p) => p.theme.backgroundColors.backgroundColor8};
    border-color: ${(p) => p.theme.borderColors.borderColor11};
    cursor: not-allowed;
  }

  &:after {
    content: ' ';
    position: absolute;
    right: 0;
    top: 0;
    height: 48px;
    width: 48px;
    background-color: ${(props) =>
      props.theme.backgroundColors.backgroundColor8};
  }

  &.textfield--remove-browser-defaults {
    -moz-appearance: textfield;
  }

  &.textfield--remove-browser-defaults::-webkit-outer-spin-button,
  &.textfield--remove-browser-defaults::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const TextField: React.FC<Props> = forwardRef(
  (
    {
      id,
      type = 'text',
      label,
      hint,
      supportingText,
      removeBrowserDefaults = true,
      hasError,
      as,
      ref,
      theme: propsTheme,
      ...props
    },
    forwardedRef,
  ) => {
    const theme = useThemeFallback(propsTheme);
    const accessibilityAttributes = {
      'aria-labelledby': `${id}-label`,
      'aria-invalid': hasError,
      'aria-errormessage': `${id}-error`,
    };

    return (
      <>
        {label && <Label id={id} label={label} theme={theme} />}

        {hint && <SupportingText content={hint} theme={theme} position="top" />}

        <StyledTextField
          id={id}
          type={type}
          className={`textfield ${
            removeBrowserDefaults ? 'textfield--remove-browser-defaults' : ''
          }`}
          theme={theme}
          {...accessibilityAttributes}
          {...props}
          ref={forwardedRef}
        />

        {supportingText && (
          <SupportingText
            content={supportingText}
            theme={theme}
            position="bottom"
          />
        )}
      </>
    );
  },
) as React.FC<Props>;

TextField.displayName = 'TextField';

const TextFieldWithError = WithError<Props>(TextField);

export { TextFieldWithError as TextField };
export type { Props };
