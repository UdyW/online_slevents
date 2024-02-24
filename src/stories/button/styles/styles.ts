import styled from 'styled-components';
import { Props } from '../types';

const StyledButton = styled.div<Props>`
  &.btn,
  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: calc(${(props) => props.theme.spacing.sm} - 2px)
      calc(${(props) => props.theme.spacing.sm} - 2px);
    font-size: ${(props) => props.theme.fontSizes.md};
    line-height: 1.5;
    cursor: pointer;

    &:focus {
      outline: 1px dotted ${(props) => props.theme.borderColors.borderColor8};
    }

    &--link {
      padding: 0;
      border: none;
      background: transparent;
      color: ${(props) => props.theme.palette.secondary.secondary1};
      font-size: ${(props) => props.theme.fontSizes.md};
      font-weight: normal;
    }

    &--link:hover {
      color: ${(props) => props.theme.palette.misc.misc5};
    }

    &--marketing {
      background: ${(props) => props.theme.backgroundColors.backgroundColor2};
      border-color: ${(props) => props.theme.borderColors.borderColor2};
      color: ${(props) => props.theme.fontColors.fontColor5};
    }

    &--marketing:active {
      background: ${(props) => props.theme.palette.misc.misc1};
      border-color: ${(props) => props.theme.palette.misc.misc1};
    }

    &--marketing:hover {
      background: ${(props) => props.theme.palette.misc.misc2};
      border-color: ${(props) => props.theme.palette.misc.misc2};
    }

    &--primary {
      background: linear-gradient(
        270deg,
        ${(props) => props.theme.palette.primary.primary1} 0%,
        ${(props) => props.theme.palette.secondary.secondary1} 100%
      );
      border-radius: 8px;
      color: ${(props) => props.theme.fontColors.fontColor5};
    }

    &--primary:active {
      background: ${(props) => props.theme.palette.misc.misc3};
      border-color: ${(props) => props.theme.palette.misc.misc3};
      color: ${(props) => props.theme.fontColors.fontColor4};
    }

    &--primary:hover {
      background: ${(props) => props.theme.palette.secondary.secondary3};
      border-color: ${(props) => props.theme.palette.secondary.secondary3};
      color: ${(props) => props.theme.fontColors.fontColor5};
    }

    &--secondary {
      background-color: #f3ec78;
      background-image: linear-gradient(
        45deg,
        ${(props) => props.theme.palette.primary.primary1},
        ${(props) => props.theme.palette.secondary.secondary1}
      );
      background-size: 100%;
      border-color: ${(props) => props.theme.borderColors.borderColor6};
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    &--secondary:active {
      background: ${(props) => props.theme.backgroundColors.backgroundColor10};
      border-color: ${(props) => props.theme.borderColors.borderColor8};
      color: ${(props) => props.theme.fontColors.fontColor5};
    }

    &--secondary:hover {
      // background: ${(props) =>
        props.theme.backgroundColors.backgroundColor9};
      // opacity: 0.6;
      border-color: ${(props) => props.theme.borderColors.borderColor7};
      // color: ${(props) => props.theme.fontColors.fontColor5};

      background-color: ${(props) =>
        props.theme.backgroundColors.backgroundColor10};
      // background-image: linear-gradient(45deg, ${(props) =>
        props.theme.palette.primary.primary1}, ${(props) =>
        props.theme.palette.secondary.secondary1});
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    &--marketing,
    &--primary,
    &--secondary {
      &[disabled] {
        background: ${(props) => props.theme.backgroundColors.backgroundColor8};
        border-color: ${(props) => props.theme.borderColors.borderColor5};
        color: ${(props) => props.theme.fontColors.fontColor4};
      }
    }

    &[disabled] {
      cursor: not-allowed;
    }

    &__loader {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(${(props) => props.theme.fontSizes.lg} * 1.5);

      span {
        display: inline-block;
        width: 4px;
        height: 30px;
        background-color: currentColor;

        &:nth-child(1) {
          animation: grow 1s ease-in-out infinite;
        }

        &:nth-child(2) {
          animation: grow 1s ease-in-out 0.15s infinite;
          margin: 0 4px;
        }

        &:nth-child(3) {
          animation: grow 1s ease-in-out 0.3s infinite;
        }
      }
    }

    &__text {
      text-align: left;
    }

    &__text--has-icon {
      margin-right: ${(props) => props.theme.spacing.sm};
    }

    @keyframes grow {
      0%,
      100% {
        transform: scaleY(0.33);
      }

      50% {
        transform: scaleY(1);
      }
    }
  }
`;

export { StyledButton };
