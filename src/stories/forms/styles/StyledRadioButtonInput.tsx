import styled from 'styled-components';
import { Theme } from '../../theming';

type WrapperProps = {
  theme: Theme;
};

const RadioButtonInputWrapper = styled.label(
  ({
    theme: { backgroundColors, borderColors, fontSizes, palette, spacing },
  }: WrapperProps) => `
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & .radio-button-input__checkmark {
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.056em solid ${borderColors.borderColor5};
    border-radius: 50%;

    &,
    &:after {
      position: absolute;
    }

    &:after {
      top: 0.2rem;
      right: 0.2rem;
      bottom: 0.2rem;
      left: 0.2rem;
      border-radius: 50%;
      background: transparent;
      content: '';
    }
  }

  & .radio-button-input__children {
    padding-bottom: ${spacing.sm};

    img,
    svg {
      display: block;
    }
  }

  & .radio-button-input__content {
    width: 100%;
    padding-left: calc(1.5rem + ${spacing.xs2});
    color: ${palette.neutral.grey6};
    font-family: Arial, sans-serif;
    font-size: ${fontSizes.md};
  }

  & .radio-button-input__content--vertical {
    padding-bottom: ${spacing.lg};
    padding-left: 0;
  }

  & .radio-button-input__description {
    color: ${palette.neutral.grey5};
    font-size: ${fontSizes.xs};
  }

  & .radio-button-input__description,
  & .radio-button-input__label {
    display: block;
  }

  & .radio-button-input__input {
    position: absolute;
    width: 0;
    height: 0;
    transition: opacity 0.001s;
    opacity: 0;
    pointer-events: none;
    visibility: none;

    &:checked {
      opacity: 0.001;

      & ~ .radio-button-input__checkmark {
        border-color: ${borderColors.borderColor3};

        &:after {
          background: ${backgroundColors.backgroundColor3};
        }
      }

      &:disabled {
        & ~ .radio-button-input__checkmark {
          &:after {
            background: ${palette.neutral.grey4};
          }
        }
      }
    }

    &:disabled {
      & ~ .radio-button-input__checkmark {
        border-color: ${borderColors.borderColor11};
        background: ${backgroundColors.backgroundColor8};
      }
    }
  }

  &:hover {
    .radio-button-input__checkmark {
      border-color: ${borderColors.borderColor7};
    }
  }

  &.radio-button-input--vertical {
    display: flex;
    flex-direction: column-reverse;

    & {
      .radio-button-input__checkmark {
        position: relative;
        top: 0;
        left: 0;
        margin-top: auto;
      }

      .radio-button-input__label {
        text-align: center;
      }
    }
  }
`,
);

export { RadioButtonInputWrapper };
