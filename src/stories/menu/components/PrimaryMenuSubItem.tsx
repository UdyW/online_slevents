import React from 'react';
import { useThemeFallback } from '../../theming';
import JSXStyle from 'styled-jsx/style';
import { isActiveLink } from '../utils/isActiveLink';
import { MenuItem, MenuRouteProps } from '../types';

type Props = {
  subMenu: Array<MenuItem>;
  isOpen: boolean;
} & MenuRouteProps;

const PrimaryMenuSubItem: React.FC<Props> = ({
  subMenu,
  isOpen,
  route,
  isMenuOpen,
  handleSidebarToggle,
  getIsActiveRoute,
}: Props) => {
  const theme = useThemeFallback();

  return (
    <div className="primary-menu-sub-item">
      <ul
        className={`primary-menu-sub-item__list ${isOpen ? 'is-active' : ''}`}
        role="tablist"
      >
        {subMenu.map((subItem, key) => (
          <li key={key} className="primary-menu-sub-item__list-item">
            <a
              className={`primary-menu-sub-item__link ${
                isActiveLink(getIsActiveRoute, route, subItem.url)
                  ? 'is-active'
                  : ''
              }`}
              href={subItem.url}
              role="tab"
              aria-selected={!!isOpen}
              {...(subItem.onClick && {
                onClick: (e) => {
                  if (isMenuOpen && handleSidebarToggle) {
                    handleSidebarToggle(e);
                  }

                  subItem.onClick(e, subItem.url);
                },
              })}
            >
              {subItem.name}
            </a>
          </li>
        ))}
        <JSXStyle id="primary-menu-sub-item__style">
          {`
            .primary-menu-sub-item__list {
              padding-left: 0;
              visibility: hidden;
              position: absolute;
              opacity: 0;
              z-index: -1;
              width: auto;
              transform: translateY(-1rem);
            }

            .primary-menu-sub-item__list.is-active {
              position: relative;
              visibility: visible;
              opacity: 1;
              z-index: 9999;
              transform: translateY(0);
              transition-duration: 0.3s;
            }

            .primary-menu-sub-item__link {
              padding: ${theme.spacing.sm};
              padding-left: calc(
                calc(${theme.spacing.md} * 3) + ${theme.spacing.sm}
              );
              color: ${theme.fontColors.fontColor5};
              display: flex;
            }

            @media (min-width: ${theme.breakpoints.xl}) {
              .primary-menu-sub-item__list.is-active {
                display: block;
                visibility: visible;
                position: absolute;
                top: 26px;
              }

              .primary-menu-sub-item__list {
                background-color: ${theme.backgroundColors.backgroundColor6};
                width: 220px;
                padding-left: 0;
                box-shadow: 0 1px 3px 0
                  ${theme.palette.helpers.applyAlphaToColour(
                    theme.palette.neutral.black,
                    0.4,
                  )};
                z-index: 999;
              }

              .primary-menu-sub-item__list-item {
                border: 1px solid ${theme.borderColors.borderColor5};
                border-top: none;
              }

              .primary-menu-sub-item__link {
                display: flex;
                align-items: center;
                color: ${theme.linkColors.linkColor2};
                font-size: ${theme.fontSizes.sm};
                padding: ${theme.spacing.md};
              }
              .primary-menu-sub-item__link:hover {
                border-bottom: 4px solid ${theme.borderColors.borderColor5};
                padding-bottom: calc(${theme.spacing.md} - 4px);
              }
              .primary-menu-sub-item__link.is-active {
                border-bottom: 4px solid ${theme.borderColors.borderColor1};
                padding-bottom: calc(${theme.spacing.md} - 4px);
              }
            }
          `}
        </JSXStyle>
      </ul>
    </div>
  );
};

export { PrimaryMenuSubItem, Props };
