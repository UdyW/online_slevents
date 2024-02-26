import styled from 'styled-components';
import { Theme } from '../../theming';

type StyledRadioButtonProps = {
  theme: Theme;
};

const StyledRadioButton = styled.div(
  ({
    theme: { backgroundColors, borderColors, spacing },
  }: StyledRadioButtonProps) => `
  display: inline-flex;
  cursor: pointer;

  &.radio-button--bordered {
    width: 100%;
    border: 1px solid ${borderColors.borderColor5};
    border-radius: 0.25rem;

    &:hover {
      border-color: ${borderColors.borderColor3};
    }

    & > label {
      width: 100%;
      border: ${spacing.sm} solid transparent;
    }

    &.radio-button--disabled {
      background-color: ${backgroundColors.backgroundColor8};
      border-color: ${borderColors.borderColor6};
    }

    &.radio-button--vertical {
      & > label {
        border-width: ${spacing.md};
      }
    }
  }

  &.radio-button--checked {
    &,
    & .radio-button-input__checkmark {
      border-color: ${borderColors.borderColor3};
    }

    &.radio-button--disabled {
      border-color: ${borderColors.borderColor6};
    }
  }

  &.radio-button--disabled {
    cursor: not-allowed;

    & > label {
      pointer-events: none;
    }
  }

  &:hover {
    .radio-button-input__checkmark {
      border-color: ${borderColors.borderColor6};
    }
  }
`,
);

export { StyledRadioButton };
