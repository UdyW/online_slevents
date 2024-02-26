import React, { HTMLProps, useEffect, useState } from 'react';
import { useThemeFallback } from '../../../theming';
import classnames from 'classnames';
import { WithError } from '../../shared/WithError';
import { WithErrorProps } from '../../types';
import { RadioButtonInput } from './RadioButtonInput';
import { StyledRadioButton } from '../../styles/StyledRadioButton';

type Props = HTMLProps<HTMLInputElement> & {
  description?: string;
  isElementChecked?: boolean;
  isElementCheckedFlag?: boolean;
  label: string;
  variant?: 'basic' | 'bordered';
  vertical?: boolean;
} & WithErrorProps;

const RadioButton = ({
  className = '',
  description,
  disabled,
  errorMessage,
  hasError,
  isElementChecked = false,
  isElementCheckedFlag = true,
  label,
  onClick = () => {},
  variant = 'basic',
  vertical = false,
  ...props
}: Props) => {
  const theme = useThemeFallback();
  const [isChecked, setIsChecked] = useState(isElementChecked);

  const isBordered = variant === 'bordered';
  const isVertical = vertical && isBordered;

  const wrapperClassNames = classnames(
    'radio-button',
    {
      'radio-button--bordered': isBordered,
      'radio-button--checked': isChecked,
      'radio-button--disabled': disabled,
      'radio-button--vertical': isVertical,
    },
    className,
  );

  const onInputChange = (e: any) => {
    if (isElementCheckedFlag) {
      setIsChecked(e.target.checked);
    }

    onClick(e);
  };

  useEffect(() => {
    setIsChecked(isElementChecked);
  }, [isElementChecked]);

  return (
    <StyledRadioButton
      theme={theme}
      className={wrapperClassNames}
      data-qa="radio-button"
    >
      <RadioButtonInput
        label={label}
        disabled={disabled}
        vertical={isVertical}
        onChange={onInputChange}
        checked={isChecked}
        description={description}
        {...props}
      />
    </StyledRadioButton>
  );
};

const RadioButtonWithError = WithError<Props>(RadioButton);

export { RadioButtonWithError as RadioButton };
export type { Props };
