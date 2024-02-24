import React from 'react';
import { useThemeFallback } from '../../theming';
import { Preferences, Settings, Shuffle } from '../../icons';
import JSXStyle from 'styled-jsx/style';
import { isActiveLink } from '../utils/isActiveLink';
import { MenuItem, MenuRouteProps } from '../types';

type Props = {
  item: MenuItem;
} & MenuRouteProps;

const iconMappings = {
  levels: Preferences,
  shuffle: Shuffle,
  settings: Settings,
};

const AuthenticatedMenuItem: React.FC<Props> = ({
  item: { name, url, icon, onClick },
  route,
  isMenuOpen,
  handleSidebarToggle,
  getIsActiveRoute,
}: Props) => {
  const theme = useThemeFallback();

  const Icon = icon ? iconMappings[icon] : '';

  const linkClass = `auth-menu-item__link 
    ${name === 'log out' ? 'is-hidden-mobile' : ''} 
    ${isActiveLink(getIsActiveRoute, route, url) ? 'is-active' : ''}`;

  return (
    <div className="auth-menu-item">
      <a
        href={url}
        className={linkClass}
        {...(onClick && {
          onClick: (e) => {
            if (isMenuOpen && handleSidebarToggle) {
              handleSidebarToggle(e);
            }

            onClick(e, url);
          },
        })}
      >
        <span
          className={`auth-menu-item__icon ${
            icon ? 'auth-menu-item__icon--is-icon' : 'is-hidden'
          }`}
        >
          {!!icon && (
            <Icon
              width={theme.spacing.lg}
              height={theme.spacing.lg}
              className="icon"
            />
          )}
        </span>
        {name}
      </a>
      <JSXStyle id="auth-menu-item__style">
        {`
          .auth-menu-item__link {
            color: ${theme.fontColors.fontColor5};
            padding: ${theme.spacing.xs} 0 ${theme.spacing.xs}
              ${theme.spacing.md};
            display: flex;
            align-items: center;
          }

          .auth-menu-item__link .is-hidden {
            padding-left: 0;
          }

          .auth-menu-item__icon--is-icon {
            display: flex;
            justify-content: center;
            padding-right: ${theme.spacing.sm};
            fill: ${theme.palette.neutral.grey4};
          }

          .auth-menu-item__link.is-active {
            border-left: 3px solid ${theme.borderColors.borderColor1};
            color: ${theme.palette.primary.primary1};
            padding-left: calc(${theme.spacing.md} - 3px);
          }

          .auth-menu-item__link.is-active > .auth-menu-item__icon {
            fill: ${theme.backgroundColors.backgroundColor1};
          }

          .is-hidden-mobile {
            display: none;
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .is-hidden-mobile {
              display: block;
            }

            .auth-menu-item__icon {
              display: none;
            }

            .auth-menu-item__link {
              box-sizing: border-box;
              border-bottom: 1px solid ${theme.borderColors.borderColor5};
              padding: ${theme.spacing.md};
              padding-bottom: calc(${theme.spacing.md} - 1px);
              color: ${theme.linkColors.linkColor2};
              font-size: ${theme.fontSizes.sm};
            }

            .auth-menu-item__link.is-active,
            .auth-menu-item__link:hover {
              border: none;
              border-bottom: 3px solid ${theme.borderColors.borderColor1};
              color: ${theme.linkColors.linkColor2};
              padding-bottom: calc(${theme.spacing.md} - 3px);
            }

            .auth-menu-item__icon--is-icon .icon {
              width: ${theme.spacing.sm};
              height: ${theme.spacing.sm};
            }
          }
        `}
      </JSXStyle>
    </div>
  );
};

export { AuthenticatedMenuItem, Props };
