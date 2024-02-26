import React from 'react';
import { useThemeFallback } from '../theming';
import { StyledButton } from './styles';
import classNames from 'classnames';

type Variant = 'link' | 'primary' | 'secondary' | 'marketing';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: Variant;
  label: string;
  theme?: any;
  loading?: boolean;
  element?: string;
  className?: string;
  icon?: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant,
  className,
  label,
  icon,
  theme: propsTheme,
  loading = false,
  element = 'button',
  ...props
}: ButtonProps) => {
  const theme = useThemeFallback(propsTheme);

  return (
    <StyledButton
      aria-label={loading ? 'Loading...' : undefined}
      aria-live={loading ? 'assertive' : undefined}
      as={element}
      className={classNames(`btn btn--${variant}`, {
        [`${className}`]: className,
      })}
      theme={theme}
      {...props}
    >
      {!loading && label && (
        <span
          className={classNames('btn__text', {
            'btn__text--has-icon': icon,
          })}
        >
          {label}
        </span>
      )}

      {!loading &&
        icon &&
        React.cloneElement(icon, {
          className: 'btn__icon',
          size: label ? '20' : '30',
        })}

      {loading && (
        <span className="btn__loader">
          <span />
          <span />
          <span />
        </span>
      )}
    </StyledButton>
  );
};
