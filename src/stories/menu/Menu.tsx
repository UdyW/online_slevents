import React, { useEffect, useRef, useState } from 'react';
import { useThemeFallback } from '../theming';
import JSXStyle from 'styled-jsx/style';
import { Brand } from './components/Brand';
import { MenuButton } from './components/MenuButton';
import { PrimaryMenu } from './components/PrimaryMenu';
import { SecondaryMenu } from './components/SecondaryMenu';
import { Sidebar } from './components/Sidebar';
import { AuthenticatedMenu } from './components/AuthenticatedMenu';
import {
  BrandLogo,
  GetIsActiveRoute,
  MenuItem,
  MenuItemFeatured,
  MenuItemSecondary,
} from './types';

type Props = {
  isUserAuthenticated: boolean;
  primaryMenu: Array<MenuItem>;
  secondaryMenu: Array<MenuItemSecondary>;
  featuredMenuItem: MenuItemFeatured;
  authenticatedMenu: Array<MenuItem>;
  authenticatedMenuName: string;
  loginUrl: string;
  loginText: string;
  showAccountSwitcher?: boolean;
  accountSwitcherUrl?: string;
  accountSwitcherText?: string;
  customerAddress?: string;
  homeUrl?: string;
  getIsActiveRoute?: GetIsActiveRoute;
};

const Menu: React.FC<Props> = ({
  isUserAuthenticated,
  primaryMenu,
  secondaryMenu,
  featuredMenuItem,
  authenticatedMenu,
  authenticatedMenuName,
  loginUrl,
  loginText,
  showAccountSwitcher,
  accountSwitcherUrl,
  accountSwitcherText,
  customerAddress,
  homeUrl,
  getIsActiveRoute,
}) => {
  const theme = useThemeFallback();
  const [route, setRoute] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentOpenTab, setCurrentOpenTab] = useState('');
  const [accountSwitcherMaxWidth, setAccountSwitcherMaxWidth] = useState(0);
  const menuRef = useRef(null);

  const changeAccountSwitcherMaxWidth = (): void => {
    const menuWidth = menuRef.current.offsetWidth || 0;
    const primaryMenuWidth = menuRef.current.firstChild.offsetWidth || 0;

    setAccountSwitcherMaxWidth(menuWidth - primaryMenuWidth - 30);
  };

  const handleMenuToggle = (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ): void => {
    e.preventDefault();
    const selectedTab: string = (e.target as HTMLElement).dataset
      .name as string;

    if (currentOpenTab === selectedTab) {
      setCurrentOpenTab('');
    } else {
      setCurrentOpenTab(selectedTab);
    }
  };

  const handleMenuKeyPress = (e: React.KeyboardEvent<HTMLElement>): void => {
    const keyPressed = e.keyCode;

    if (keyPressed === 13) {
      handleMenuToggle(e);
    }
  };

  const handleSidebarToggle = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  const getRoute = (): void => {
    if (typeof window !== 'undefined') {
      setRoute(window.location.pathname);
    }
  };

  const handleCloseAllMenus = (e: MouseEvent): void => {
    setCurrentOpenTab((prevCurrentOpenTab) =>
      prevCurrentOpenTab !== (e.target as HTMLElement).dataset.name
        ? ''
        : prevCurrentOpenTab,
    );
  };

  useEffect(() => {
    window.addEventListener('click', handleCloseAllMenus);
    getRoute();
    changeAccountSwitcherMaxWidth();
    window.addEventListener('resize', changeAccountSwitcherMaxWidth);

    return () => {
      window.removeEventListener('click', handleCloseAllMenus);
      window.removeEventListener('resize', changeAccountSwitcherMaxWidth);
    };
  }, []);

  useEffect(() => {
    if (route !== window.location.pathname) {
      getRoute();
    }
    changeAccountSwitcherMaxWidth();
  }, [route, accountSwitcherMaxWidth]);

  return (
    <nav className="menu" aria-label="main menu">
      <div className="menu__top-layer">
        <MenuButton
          isMenuOpen={isSidebarOpen}
          handleSidebarToggle={handleSidebarToggle}
        />

        <Sidebar
          isMenuOpen={isSidebarOpen}
          primaryMenu={primaryMenu}
          secondaryMenu={secondaryMenu}
          featuredMenuItem={featuredMenuItem}
          isUserAuthenticated={isUserAuthenticated}
          currentTab={currentOpenTab}
          authenticatedMenu={authenticatedMenu}
          authenticatedMenuName={authenticatedMenuName}
          handleSidebarToggle={handleSidebarToggle}
          handlePrimaryMenuToggle={handleMenuToggle}
          handlePrimaryMenuKeypress={handleMenuKeyPress}
          route={route}
          loginText={loginText}
          loginUrl={loginUrl}
          showAccountSwitcher={showAccountSwitcher}
          accountSwitcherUrl={accountSwitcherUrl}
          accountSwitcherText={accountSwitcherText}
          customerAddress={customerAddress}
          getIsActiveRoute={getIsActiveRoute}
        />
      </div>
      <div className="menu__primary-menu is-hidden-mobile" ref={menuRef}>
        <Brand homeUrl={homeUrl} />

        <PrimaryMenu
          primaryMenu={primaryMenu}
          route={route}
          currentTab={currentOpenTab}
          handlePrimaryMenuToggle={handleMenuToggle}
          handlePrimaryMenuKeypress={handleMenuKeyPress}
          getIsActiveRoute={getIsActiveRoute}
        />

        <div className="menu__secondary-menu is-hidden-mobile">
          <SecondaryMenu secondaryMenu={secondaryMenu} />

          {isUserAuthenticated ? (
            <AuthenticatedMenu
              handleAuthenticatedMenuToggle={handleMenuToggle}
              currentTab={currentOpenTab}
              authenticatedMenu={authenticatedMenu}
              authenticatedMenuName={authenticatedMenuName}
              handleAuthenticatedMenuKeypress={handleMenuKeyPress}
              route={route}
              getIsActiveRoute={getIsActiveRoute}
            />
          ) : (
            <a className="menu__login-btn" href={loginUrl}>
              {loginText}
            </a>
          )}
        </div>
      </div>

      <JSXStyle id="menu-global__style" global>
        {`
          body {
            overflow-y: ${isSidebarOpen ? 'scroll' : 'auto'};
            position: ${isSidebarOpen ? 'fixed' : 'relative'};
            height: ${isSidebarOpen ? '100%' : 'auto'};
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            body {
              overflow-y: auto;
              width: 100%;
              position: relative;
            }
          }
        `}
      </JSXStyle>

      <JSXStyle id="menu__style">
        {`
          .menu a:not(.account-switcher__cta--link) {
            text-decoration: none;
            color: ${theme.fontColors.fontColor4};
          }

          .menu a:focus {
            outline: 1px dotted ${theme.borderColors.borderColor8};
          }

          .menu__login-btn {
            font-weight: bold;
            font-size: ${theme.fontSizes.sm};
          }

          .menu__login-btn:hover {
            border-bottom: 4px solid ${theme.borderColors.borderColor5};
            margin-bottom: -4px;
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .menu a:not(.account-switcher__cta--link) {
              color: ${theme.fontColors.fontColor4};
            }
          }

          .menu li {
            list-style-type: none;
          }

          .menu
            .featured-menu-item__link, .account-switcher__cta--button, .sidebar__link {
            background-color: transparent;
            border-radius: 0;
            font-family: inherit;
            line-height: 100%;
            font-weight: normal;
            white-space: nowrap;
            display: inline-block;
            width: auto;
            height: auto;
            box-sizing: border-box;
            text-align: center;
            cursor: pointer;
            transition: background-color ease-in-out 0.6s;
          }

          .menu .btn-secondary {
            border: 1px solid ${theme.borderColors.borderColor1};
            background-color: transparent;
            color: ${theme.fontColors.fontColor4};
          }

          .menu .btn-secondary:hover {
            background-color: #fef5cd;
          }

          .menu .btn-secondary:active {
            background-color: #fdeb9c;
          }

          .menu {
            display: flex;
            flex-direction: column;
            padding: ${theme.spacing.md};
            box-sizing: content-box;
            position: relative;
          }

          .menu__top-layer {
            display: flex;
            align-items: center;
          }

          .is-hidden-mobile {
            display: none;
          }

          @media (min-width: ${theme.breakpoints.md}) {
            .menu {
              padding: ${theme.spacing.md} ${theme.spacing.lg};
            }
            .menu__skip .menu__skip__link {
              visibility: visible;
            }
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .menu {
              padding: ${theme.spacing.lg} ${theme.spacing.xl}
                ${theme.spacing.xs};
              margin: 0 auto;
              max-width: 1200px;
            }

            .menu__primary-menu,
            .menu__secondary-menu {
              display: flex;
              justify-content: space-between;
            }

            .menu__primary-menu {
              display: flex;
              flex-wrap: wrap-reverse;
              align-items: baseline;
              height: 68.69px;
            }

            .menu__secondary-menu {
              // position: absolute;
              // top: ${theme.spacing.lg};
              // right: ${theme.spacing.xl};
              display: flex;
            }
          }
        `}
      </JSXStyle>
    </nav>
  );
};

export { Menu, Props };
