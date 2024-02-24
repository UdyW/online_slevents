import React from 'react';
import { useThemeFallback } from '../../theming';
import JSXStyle from 'styled-jsx/style';
import { MouseEventCallback } from '../types';

type Props = {
  isMenuOpen: boolean;
  handleSidebarToggle: MouseEventCallback;
};

const baseTiming = 0.2;
const baseHeight = 9;

const MenuButton: React.FC<Props> = ({
  isMenuOpen,
  handleSidebarToggle,
}: Props) => {
  const theme = useThemeFallback();

  return (
    <div className="menu-button">
      <nav>
        <a
          className="menu-button__hamburger-menu"
          onClick={handleSidebarToggle}
          aria-controls="side-bar-menu"
          aria-expanded={isMenuOpen}
          aria-haspopup={isMenuOpen}
          aria-label="navigation menu"
          href="#"
        >
          <span className="menu-button__text">Menu</span>
          <div
            className={`menu-button__icon ${
              isMenuOpen ? 'is-open' : 'is-closed'
            }`}
          >
            <span />
            <span />
            <span />
            <span />
          </div>
        </a>
      </nav>
      <JSXStyle id="menu-button__style">
        {`
          .menu-button__hamburger-menu {
            display: flex;
            cursor: pointer;
          }

          .menu-button__hamburger-menu:focus .menu-button__icon.is-open {
            outline: 1px dotted ${theme.borderColors.borderColor8};
            outline-offset: 5px;
          }

          .menu-button__text {
            margin-right: ${theme.spacing.xs};
            font-size: ${theme.fontSizes.md};
            color: ${theme.fontColors.fontColor4};
            line-height: 1;
          }

          .menu-button__icon {
            z-index: 1000;
            width: 22px;
            height: 20px;
            transform: rotate(0deg);
            transition: transform 0.5s ease-in-out;
          }

          .menu-button__icon span {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: ${theme.palette.neutral.grey3};
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
          }

          .menu-button__icon.is-open {
            position: fixed;
            right: ${theme.spacing.md};
            background-color: ${theme.palette.helpers.applyAlphaToColour(
              theme.palette.neutral.white,
              0.9,
            )};
            z-index: 10001;
          }

          .menu-button__icon.is-open span {
            background: ${theme.backgroundColors.backgroundColor10};
            transition: top ${baseTiming}s ease-in-out,
              opacity ${baseTiming}s ease-in-out,
              background ${baseTiming}s ease-in-out,
              transform ${baseTiming}s ${baseTiming}s ease-in-out;
          }

          .menu-button__icon.is-closed span {
            transition: transform ${baseTiming}s ease-in-out,
              top ${baseTiming}s ${baseTiming}s ease-in-out,
              opacity ${baseTiming}s ${baseTiming}s ease-in-out,
              background ${baseTiming}s ease-in-out;
          }

          .menu-button__icon span:nth-child(1) {
            top: ${baseHeight * 0}px;
          }

          .menu-button__icon span:nth-child(2),
          .menu-button__icon span:nth-child(3) {
            top: ${baseHeight}px;
          }

          .menu-button__icon span:nth-child(4) {
            top: ${baseHeight * 2}px;
          }

          .menu-button__icon.is-open span:nth-child(1),
          .menu-button__icon.is-open span:nth-child(4) {
            top: ${baseHeight}px;
            opacity: 0;
          }

          .menu-button__icon.is-open span:nth-child(2) {
            transform: rotate(45deg);
            top: ${baseHeight}px;
          }

          .menu-button__icon.is-open span:nth-child(3) {
            transform: rotate(-45deg);
            top: ${baseHeight}px;
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .menu-button__hamburger-menu {
              display: none;
            }
          }
        `}
      </JSXStyle>
    </div>
  );
};

export { MenuButton, Props };
