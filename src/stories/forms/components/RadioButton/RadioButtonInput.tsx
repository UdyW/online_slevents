import React, { InputHTMLAttributes } from 'react';
import { useThemeFallback } from '../../../theming';
import classnames from 'classnames';
import { RadioButtonInputWrapper } from '../../styles/StyledRadioButtonInput';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
  description?: string;
  label: string;
  vertical?: boolean;
};

const RadioButtonInput: React.FC<Props> = ({
  children,
  description,
  label,
  onChange = () => {},
  vertical,
  ...props
}) => {
  const theme = useThemeFallback();

  const contentClassName = classnames('radio-button-input__content', {
    'radio-button-input__content--vertical': vertical,
  });

  const wrapperClassName = classnames('radio-button-input', {
    'radio-button-input--vertical': vertical,
  });

  return (
    <RadioButtonInputWrapper
      className={wrapperClassName}
      theme={theme}
      data-qa="radio-button-input"
    >
      <input
        onChange={onChange}
        className="radio-button-input__input"
        data-qa="radio-button-input__input"
        type="radio"
        {...props}
      />

      <span
        className="radio-button-input__checkmark"
        data-qa="radio-button-input__checkmark"
      />

      <span className={contentClassName}>
        <span
          className="radio-button-input__label"
          data-qa="radio-button-input__label"
        >
          {label}
        </span>

        {!vertical && description && (
          <span
            className="radio-button-input__description"
            data-qa="radio-button-input__description"
          >
            {description}
          </span>
        )}
      </span>

      {vertical && children && (
        <span
          className="radio-button-input__children"
          data-qa="radio-button-input__children"
        >
          {children}
        </span>
      )}
    </RadioButtonInputWrapper>
  );
};

export { RadioButtonInput };
export type { Props };
