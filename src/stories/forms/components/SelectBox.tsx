import { Theme, useThemeFallback } from '../../theming';
import React, { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import { Label } from '../shared/Label';
import { SupportingText } from '../shared/SupportingText';
import { WithError } from '../shared/WithError';
import { WithErrorProps } from '../types';

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props = React.HTMLProps<HTMLSelectElement> & {
  id: string;
  options: Array<Option>;
  label?: string;
  hint?: ReactNode;
  supportingText?: ReactNode;
  removeBrowserDefaults?: boolean;
  disabled?: boolean;
  theme?: Theme;
} & WithErrorProps;

const StyledSelectBox = styled.div`
  &.selectbox--disabled .selectbox__box {
    background: ${(p) => p.theme.backgroundColors.backgroundColor8};
  }

  &.selectbox--remove-browser-defaults .selectbox__select {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: ${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.xl2}
    ${(p) => p.theme.spacing.sm} ${(p) => p.theme.spacing.sm};
  background-color: ${(p) => p.theme.backgroundColors.backgroundColor6};
  border: 1px solid ${(p) => p.theme.borderColors.borderColor5};
  color: ${(p) => p.theme.palette.neutral.grey5};
  transition: all 0.2s ease-in-out;
  font-size: ${(p) => p.theme.fontSizes.sm};

  &:disabled {
    border-color: ${(p) => p.theme.borderColors.borderColor6};
    cursor: not-allowed;
  }

  &:focus ~ .selectbox__arrow {
    transform: translateY(-50%) rotate(180deg);
  }

  &:focus ~ .selectbox__box {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
  }
`;

const SelectBoxArrow = styled.span`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 1.1rem;
  display: inline-block;
  pointer-events: none;
  width: 0;
  height: 0;
  border-left: 0.4rem solid transparent;
  border-right: 0.4rem solid transparent;
  border-top: 0.4rem solid ${(p) => p.theme.borderColors.borderColor7};
  transform: translateY(-50%);
  transform-origin: center center;
`;

const SelectBoxBox = styled.span`
  content: '';
  position: absolute;
  z-index: 1;
  top: 1px;
  right: 1px;
  pointer-events: none;
  width: 3rem;
  height: calc(100% - 2px);
  background: ${(p) => p.theme.backgroundColors.backgroundColor7};
  transition: background 0.2s ease-in-out;

  @media only screen and (min-width: 761px) {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
  }
`;

const SelectBoxWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectBox: React.FC<Props> = forwardRef(
  (
    {
      id,
      options,
      label,
      hint,
      supportingText,
      removeBrowserDefaults = true,
      disabled = false,
      as,
      ref,
      theme: propsTheme,
      ...props
    },
    frowardedRef,
  ) => {
    const theme = useThemeFallback(propsTheme);

    return (
      <StyledSelectBox
        className={`selectbox ${
          removeBrowserDefaults ? 'selectbox--remove-browser-defaults' : ''
        } ${disabled ? 'selectbox--disabled' : ''}`}
        theme={theme}
      >
        {label && <Label id={id} label={label} theme={theme} />}

        {hint && <SupportingText content={hint} theme={theme} position="top" />}

        <SelectBoxWrapper className="selectbox__wrapper" theme={theme}>
          <StyledSelect
            id={id}
            className="selectbox__select"
            disabled={disabled}
            {...props}
            theme={theme}
            ref={frowardedRef}
          >
            {Array.isArray(options) &&
              options.map((option, optionKey) => (
                <option
                  value={option.value}
                  key={optionKey}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
          </StyledSelect>

          <SelectBoxArrow className="selectbox__arrow" theme={theme} />
          <SelectBoxBox className="selectbox__box" theme={theme} />
        </SelectBoxWrapper>

        {supportingText && (
          <SupportingText
            content={supportingText}
            theme={theme}
            position="bottom"
          />
        )}
      </StyledSelectBox>
    );
  },
) as React.FC<Props>;

SelectBox.displayName = 'SelectBox';

const SelectBoxWithError = WithError<Props>(SelectBox);

export { SelectBoxWithError as SelectBox };
export type { Props };
