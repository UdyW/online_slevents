import React from 'react';
import { useThemeFallback } from '../../theming';
import JSXStyle from 'styled-jsx/style';
import { PrimaryMenu } from './PrimaryMenu';
import { SecondaryMenu } from './SecondaryMenu';
import { AuthenticatedMenu } from './AuthenticatedMenu';
import { FeaturedMenuItem } from './FeaturedMenuItem';

import {
  GetIsActiveRoute,
  KeyboardEventCallback,
  MenuItem,
  MenuItemFeatured,
  MouseEventCallback,
} from '../types';

type Props = {
  isMenuOpen: boolean;
  primaryMenu: Array<MenuItem>;
  secondaryMenu: Array<MenuItem>;
  featuredMenuItem: MenuItemFeatured;
  route: string;
  currentTab: string;
  authenticatedMenu: Array<MenuItem>;
  isUserAuthenticated: boolean;
  handleSidebarToggle: MouseEventCallback;
  authenticatedMenuName: string;
  handlePrimaryMenuToggle: MouseEventCallback;
  handlePrimaryMenuKeypress: KeyboardEventCallback;
  loginText: string;
  loginUrl: string;
  showAccountSwitcher?: boolean;
  accountSwitcherUrl?: string;
  customerAddress?: string;
  accountSwitcherText?: string;
  getIsActiveRoute?: GetIsActiveRoute;
};

const Sidebar: React.FC<Props> = ({
  isMenuOpen,
  primaryMenu,
  secondaryMenu,
  featuredMenuItem,
  isUserAuthenticated,
  authenticatedMenu,
  authenticatedMenuName,
  currentTab,
  handleSidebarToggle,
  handlePrimaryMenuToggle,
  handlePrimaryMenuKeypress,
  route,
  loginText,
  loginUrl,
  showAccountSwitcher,
  accountSwitcherUrl,
  accountSwitcherText,
  customerAddress,
  getIsActiveRoute,
}: Props) => {
  const theme = useThemeFallback();

  return (
    <div className="sidebar">
      {isMenuOpen && (
        <div className="sidebar__container" onClick={handleSidebarToggle} />
      )}
      <div
        id="side-bar-menu"
        role="navigation"
        className={`sidebar__menu ${
          isMenuOpen ? 'is-open' : 'is-hidden-mobile'
        }`}
      >
        <div
          className="sidebar__wrapper"
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
        >
          {!showAccountSwitcher && (
            <a href={loginUrl} className="sidebar__link">
              <strong>{loginText}</strong>
            </a>
          )}
          <PrimaryMenu
            primaryMenu={primaryMenu}
            currentTab={currentTab}
            handlePrimaryMenuToggle={handlePrimaryMenuToggle}
            handlePrimaryMenuKeypress={handlePrimaryMenuKeypress}
            handleSidebarToggle={handleSidebarToggle}
            isMenuOpen={isMenuOpen}
            route={route}
            getIsActiveRoute={getIsActiveRoute}
          />
          {featuredMenuItem && (
            <FeaturedMenuItem
              introText={featuredMenuItem.introText}
              url={featuredMenuItem.url}
              linkLabel={featuredMenuItem.linkLabel}
              opensInNewTab={featuredMenuItem.opensInNewTab}
            />
          )}
          <hr className="sidebar__divider" />
          <SecondaryMenu
            secondaryMenu={secondaryMenu}
            isMenuOpen={isMenuOpen}
            handleSidebarToggle={handleSidebarToggle}
            isSidebar={true}
          />
          {isUserAuthenticated && (
            <AuthenticatedMenu
              authenticatedMenu={authenticatedMenu}
              authenticatedMenuName={authenticatedMenuName}
              route={route}
              isMenuOpen={isMenuOpen}
              handleSidebarToggle={handleSidebarToggle}
              getIsActiveRoute={getIsActiveRoute}
            />
          )}
        </div>
      </div>
      <JSXStyle id="sidebar__style">
        {`
          .is-hidden-mobile {
            display: none;
          }

          .sidebar__divider {
            border: none;
            border-bottom: 1px solid ${theme.borderColors.borderColor6};
            margin: ${theme.spacing.md};
          }

          .sidebar__container {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: ${theme.palette.helpers.applyAlphaToColour(
              theme.palette.neutral.black,
              0.7,
            )};
            z-index: 9999;
          }

          @keyframes sidebar__container {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          .sidebar__container {
            animation-name: fade-in;
            animation-duration: 0.3s;
            animation-fill-mode: both;
          }

          .sidebar__menu {
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-color: ${theme.backgroundColors.backgroundColor6};
            transform: translate3d(100%, 0, 0);
            transition: transform 0.5s ease-in-out;
            will-change: transform;
            z-index: 10000;
          }

          .sidebar__menu.is-open {
            transform: translate3d(0, 0, 0);
            will-change: transform;
          }

          .sidebar__wrapper {
            overflow-y: auto;
            height: 100%;
          }

          .sidebar__link {
            color: ${theme.palette.primary.primary1};
            border: 2px solid ${theme.borderColors.borderColor8};
            font-size: ${theme.fontSizes.md};
            padding: ${theme.spacing.sm} ${theme.spacing.md};
          }

          .sidebar__wrapper > .sidebar__link {
            margin-top: ${theme.spacing.lg};
            margin-bottom: ${theme.spacing.xl};
            margin-left: ${theme.spacing.md};
          }

          @media (min-width: ${theme.breakpoints.md}) {
            .sidebar__menu {
              width: 384px;
              right: 0;
              left: auto;
            }
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .sidebar__container,
            .sidebar__menu {
              display: none;
            }
          }
        `}
      </JSXStyle>
    </div>
  );
};

export { Sidebar };
export type { Props };
