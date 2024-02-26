import { useThemeFallback } from '../../theming';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { WithError } from '../shared/WithError';
import { WithErrorProps } from '../types';

type Props = React.HTMLProps<HTMLInputElement> & {
  id: string;
  label: string;
  isChecked: boolean;
} & WithErrorProps;

const CheckboxInput = styled.input`
  cursor: pointer;
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;

  & + .checkbox__label:before {
    content: '';
    position: absolute;
    top: 0.056em;
    left: 0;
    width: 1.333em;
    height: 1.333em;
    border: 0.056em solid ${(p) => p.theme.borderColors.borderColor6};
    background: ${(p) => p.theme.backgroundColors.backgroundColor6};
    transition: background-color 0.2s ease-in-out;
  }

  &:checked + .checkbox__label:before {
    background-color: ${(p) => p.theme.backgroundColors.backgroundColor3};
    border-color: ${(p) => p.theme.borderColors.borderColor3};
  }

  &:checked + .checkbox__label:after {
    content: '';
    position: absolute;
    top: 0.111em;
    left: 0.444em;
    display: inline-block;
    height: 1em;
    width: 0.444em;
    transform: rotate(45deg);
    border-bottom: 0.111em solid ${(p) => p.theme.borderColors.borderColor9};
    border-right: 0.111em solid ${(p) => p.theme.borderColors.borderColor9};
  }

  &:disabled + .checkbox__label:before {
    background-color: ${(p) => p.theme.backgroundColors.backgroundColor8};
    border-color: ${(p) => p.theme.borderColors.borderColor5};
    cursor: not-allowed;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  position: relative;
  padding-left: calc(1.333em + ${(p) => p.theme.spacing.xs2});
  cursor: pointer;
  font-size: ${(p) => p.theme.fontSizes.md};

  &:hover:before {
    border-color: ${(p) => p.theme.borderColors.borderColor11};
  }
`;

const CheckBox: React.FC<Props> = forwardRef(
  ({ id, label, isChecked, as, ref, ...props }: Props, forwardedRef) => {
    const theme = useThemeFallback();

    return (
      <div className="checkbox">
        <CheckboxInput
          id={id}
          type="checkbox"
          className="checkbox__input"
          checked={isChecked}
          theme={theme}
          ref={forwardedRef}
          {...props}
        />

        <CheckboxLabel htmlFor={id} className="checkbox__label" theme={theme}>
          {label}
        </CheckboxLabel>
      </div>
    );
  },
) as React.FC<Props>;

CheckBox.displayName = 'CheckBox';

const CheckBoxWithError = WithError<Props>(CheckBox);

export { CheckBoxWithError as CheckBox };

export type { Props };
