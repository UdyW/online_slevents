import React from 'react';
import { useThemeFallback } from '../../theming';
import { ExternalLink, Home, Search, Help } from '../../icons';
import JSXStyle from 'styled-jsx/style';
import { PrimaryMenuDropDown } from './PrimaryMenuDropDown';
import { isActiveLink } from '../utils/isActiveLink';
import {
  KeyboardEventCallback,
  MenuItem,
  MenuRouteProps,
  MouseEventCallback,
} from '../types';

type Props = {
  item: MenuItem;
  subMenu?: Array<MenuItem>;
  handlePrimaryMenuToggle: MouseEventCallback;
  handlePrimaryMenuKeypress: KeyboardEventCallback;
} & MenuRouteProps;

const iconMappings = {
  home: Home,
  search: Search,
  help: Help,
};

const PrimaryMenuItem: React.FC<Props> = ({
  item: { name, url, icon, subMenu = [], opensInNewTab = false, onClick },
  route,
  currentTab,
  isMenuOpen,
  handlePrimaryMenuToggle,
  handlePrimaryMenuKeypress,
  handleSidebarToggle,
  getIsActiveRoute,
}: Props) => {
  const theme = useThemeFallback();

  const Icon = icon ? iconMappings[icon] : '';

  return (
    <li className="primary-menu-item">
      <div className="primary-menu-item__list">
        {subMenu.length ? (
          <PrimaryMenuDropDown
            name={name}
            icon={icon}
            subMenu={subMenu}
            currentTab={currentTab}
            isMenuOpen={isMenuOpen}
            handlePrimaryMenuToggle={handlePrimaryMenuToggle}
            handlePrimaryMenuKeypress={handlePrimaryMenuKeypress}
            handleSidebarToggle={handleSidebarToggle}
            route={route}
            getIsActiveRoute={getIsActiveRoute}
          />
        ) : (
          <a
            aria-label={
              opensInNewTab
                ? 'This link opens in a new tab'
                : 'Follow this link for more information'
            }
            className={`primary-menu-item__link ${
              isActiveLink(getIsActiveRoute, route, url, true)
                ? 'is-active'
                : ''
            } ${opensInNewTab ? 'is-external-link' : ''}
            `}
            href={url}
            target={opensInNewTab ? '_blank' : '_self'}
            rel="noreferrer"
            {...(onClick && {
              onClick: (e) => {
                if (isMenuOpen && handleSidebarToggle) {
                  handleSidebarToggle(e);
                }

                onClick(e, url);
              },
            })}
          >
            <span>
              <span className={icon ? 'primary-menu-item__icon' : 'is-hidden'}>
                {!!icon && (
                  <Icon
                    width={theme.spacing.lg}
                    height={theme.spacing.lg}
                    className="icon"
                  />
                )}
              </span>
              {name}
            </span>

            {opensInNewTab && (
              <ExternalLink
                width={theme.spacing.md}
                height={theme.spacing.md}
                className="external-link"
              />
            )}
          </a>
        )}
      </div>

      <JSXStyle id="primary-menu-item__style">
        {`
          .primary-menu-item__list {
            display: flex;
            align-items: center;
          }

          .primary-menu-item__link {
            font-size: ${theme.fontSizes.md};
            color: ${theme.fontColors.fontColor5};
            display: flex;
            align-items: center;
            padding: ${theme.spacing.xs} 0;
            width: 100%;
          }

          .primary-menu-item__link:hover {
            box-shadow: inset 4px 0 0 ${theme.borderColors.borderColor5};
          }

          .primary-menu-item__link.is-active {
            color: ${theme.palette.primary.primary1};
            box-shadow: inset 4px 0 0 ${theme.borderColors.borderColor1};
            font-weight: bold;
          }

          .primary-menu-item__link.is-active > icon {
            fill: ${theme.backgroundColors.backgroundColor9};
          }

          .is-external-link {
            justify-content: space-between;
            padding-right: ${theme.spacing.md};
          }

          .primary-menu-item__icon {
            padding-left: ${theme.spacing.md};
            padding-right: ${theme.spacing.sm};
            width: ${theme.spacing.sm};
            vertical-align: middle;
          }

          .primary-menu-item__icon .icon {
            fill: ${theme.palette.neutral.grey4};
          }

          .is-hidden {
            padding-left: ${theme.spacing.md};
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .primary-menu-item__list {
              padding: 0;
              margin-right: ${theme.spacing.md};
            }

            .primary-menu-item__link {
              font-size: ${theme.fontSizes.md};
              color: ${theme.linkColors.linkColor2};
              padding: 0 0 ${theme.spacing.xs} 0;
            }

            .primary-menu-item__link.is-active,
            .primary-menu-item__link:hover {
              color: ${theme.linkColors.linkColor2};
              box-shadow: inset 0 -4px 0 0 ${theme.borderColors.borderColor5};
            }

            .primary-menu-item__link.is-active {
              color: ${theme.linkColors.linkColor2};
              font-weight: normal;
              box-shadow: inset 0 -4px 0 0 ${theme.borderColors.borderColor1};
            }

            .primary-menu-item__icon,
            .is-hidden {
              display: none;
            }

            .primary-menu-item__list .is-external-link .external-link {
              width: ${theme.spacing.xs};
              height: ${theme.spacing.xs};
              margin-left: ${theme.spacing.xs};
            }
          }
        `}
      </JSXStyle>
    </li>
  );
};

export { PrimaryMenuItem };
export type { Props };
