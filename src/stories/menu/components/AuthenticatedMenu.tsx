import React from 'react';
import { useThemeFallback } from '../../theming';
import JSXStyle from 'styled-jsx/style';
import { AuthenticatedMenuItem } from './AuthenticatedMenuItem';
import {
  KeyboardEventCallback,
  MenuItem,
  MenuRouteProps,
  MouseEventCallback,
} from '../types';

type Props = {
  authenticatedMenu: Array<MenuItem>;
  authenticatedMenuName: string;
  handleAuthenticatedMenuToggle?: MouseEventCallback;
  handleAuthenticatedMenuKeypress?: KeyboardEventCallback;
} & MenuRouteProps;

const name = 'authenticated-menu';

const isOpen = (currentTab: string): boolean => currentTab === name;

const AuthenticatedMenu: React.FC<Props> = ({
  authenticatedMenu,
  authenticatedMenuName,
  handleAuthenticatedMenuToggle,
  handleAuthenticatedMenuKeypress,
  currentTab,
  route,
  isMenuOpen,
  handleSidebarToggle,
  getIsActiveRoute,
}: Props) => {
  const theme = useThemeFallback();

  return (
    <div className="authenticated-menu" data-name="authenticated-menu">
      {/* <hr className="authenticated-menu__divider" /> */}
      <a
        href="#"
        onClick={handleAuthenticatedMenuToggle}
        onKeyDown={handleAuthenticatedMenuKeypress}
        data-name={name}
        id={name}
        className="authenticated-menu__link"
      >
        <span
          className="authenticated-menu__text"
          data-name="authenticated-menu"
        >
          {authenticatedMenuName}
        </span>

        <span
          className={`authenticated-menu__icon ${
            isOpen(currentTab ?? '/') ? 'is-active' : ''
          }`}
        ></span>
      </a>

      <div
        className={`authenticated-menu__list ${
          isOpen(currentTab ?? '/') ? 'is-active' : ''
        }`}
      >
        {authenticatedMenu.map((item, key) => (
          <AuthenticatedMenuItem
            key={key}
            item={item}
            route={route}
            isMenuOpen={isMenuOpen}
            handleSidebarToggle={handleSidebarToggle}
            getIsActiveRoute={getIsActiveRoute}
          />
        ))}
      </div>

      <JSXStyle id="authenticated-menu__style">
        {`
          .authenticated-menu {
            position: relative;
          }

          .authenticated-menu__list {
            display: flex;
            flex-direction: column;
          }

          .authenticated-menu__divider {
            border: none;
            border-bottom: 1px solid ${theme.borderColors.borderColor6};
            margin: ${theme.spacing.md};
          }

          .authenticated-menu__link {
            display: none;
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .authenticated-menu__list {
              position: absolute;
              right: 2px;
              display: flex;
              flex-direction: column;
              background-color: ${theme.backgroundColors.backgroundColor6};
              box-shadow: 0 1px 3px 0
                ${theme.palette.helpers.applyAlphaToColour(
                  theme.palette.neutral.black,
                  0.4,
                )};
              width: 220px;
              visibility: hidden;
              transform: translateY(0em);
              opacity: 0;
              z-index: -1;
            }

            .authenticated-menu__list.is-active {
              visibility: visible;
              transform: translateY(1em);
              opacity: 1;
              transition-duration: 0.3s;
              z-index: 9999;
            }

            .authenticated-menu__divider {
              display: none;
            }

            .authenticated-menu__link {
              position: relative;
              display: flex;
              align-items: center;
              font-size: ${theme.fontSizes.sm};
              color: ${theme.linkColors.linkColor2};
              cursor: pointer;
              font-weight: 600;
            }

            .authenticated-menu__link:hover > .authenticated-menu__text {
              border-bottom: 2px solid ${theme.borderColors.borderColor1};
              margin-bottom: -2px;
            }

            .authenticated-menu__text {
              padding-right: 5px;
              position: relative;
              z-index: -1;
            }

            .authenticated-menu__icon {
              fill: ${theme.backgroundColors.backgroundColor9};
              width: ${theme.spacing.xs};
              height: 100%;
              display: block;
              transition-duration: 0.2s;
              position: relative;
              z-index: -1;
              top: 0;
              left: 0;
              line-height: 0;
            }

            .authenticated-menu__icon.is-active {
              transform: rotate(180deg);
            }
          }

          @media all and (-ms-high-contrast: none),
            (-ms-high-contrast: active) {
            .authenticated-menu__icon {
              height: 25px;
            }
          }
        `}
      </JSXStyle>
    </div>
  );
};

export { AuthenticatedMenu };
export type { Props };
