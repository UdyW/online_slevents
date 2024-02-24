import React from 'react';
import { useThemeFallback } from '../../theming';
import { Chevron, Home, ToolsAndEquipment } from '../../icons';
import JSXStyle from 'styled-jsx/style';
import { PrimaryMenuSubItem } from './PrimaryMenuSubItem';
import {
  KeyboardEventCallback,
  MenuItem,
  MenuRouteProps,
  MouseEventCallback,
} from '../types';

type Props = {
  name: string;
  icon: string;
  subMenu: Array<MenuItem>;
  handlePrimaryMenuToggle: MouseEventCallback;
  handlePrimaryMenuKeypress: KeyboardEventCallback;
} & MenuRouteProps;

const iconMappings = {
  home: Home,
  tools: ToolsAndEquipment,
};

const PrimaryMenuDropDown: React.FC<Props> = ({
  name,
  icon,
  subMenu,
  handlePrimaryMenuToggle,
  handlePrimaryMenuKeypress,
  currentTab,
  route,
  isMenuOpen,
  handleSidebarToggle,
  getIsActiveRoute,
}: Props) => {
  const theme = useThemeFallback();

  const isOpen = name === currentTab;
  const Icon = icon ? iconMappings[icon] : '';

  return (
    <ul className="menu-drop-down">
      <li aria-haspopup="true" className="menu-drop-down__item">
        <a
          onClick={handlePrimaryMenuToggle}
          onKeyDown={handlePrimaryMenuKeypress}
          data-name={name}
          href="#"
          className="menu-drop-down__button"
        >
          <div className="menu-drop-down__wrapper">
            <span className={icon ? 'menu-drop-down__icon' : 'is-hidden'}>
              {icon && (
                <Icon
                  width={theme.spacing.lg}
                  height={theme.spacing.lg}
                  className="icon"
                />
              )}
            </span>
            <span className="menu-drop-down__text">{name}</span>
          </div>
          <span
            className={`menu-drop-down__chevron ${isOpen ? 'is-active' : ''}`}
          >
            <Chevron
              width={theme.spacing.md}
              height={theme.spacing.md}
              className="chevron"
            />
          </span>
        </a>

        <PrimaryMenuSubItem
          subMenu={subMenu}
          isOpen={isOpen}
          route={route}
          isMenuOpen={isMenuOpen}
          handleSidebarToggle={handleSidebarToggle}
          getIsActiveRoute={getIsActiveRoute}
        />
      </li>

      <JSXStyle id="menu-drop-down__style">
        {`
          .menu-drop-down {
            padding: 0;
            width: 100%;
            font-size: ${theme.fontSizes.xl};
            color: ${theme.fontColors.fontColor5};
          }

          .menu-drop-down__item {
            cursor: pointer;
          }

          .menu-drop-down__button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: ${theme.spacing.xs} 0;
            color: ${theme.fontColors.fontColor5};
          }

          .menu-drop-down__button:hover {
            border-left: 4px solid ${theme.borderColors.borderColor5};
          }

          .menu-drop-down__button:hover > div > .menu-drop-down__icon,
          .menu-drop-down__button:hover > div > .is-hidden {
            padding-left: calc(${theme.spacing.md} - 4px);
          }

          .menu-drop-down__wrapper {
            position: relative;
            pointer-events: none;
            width: 100%;
            display: flex;
            align-items: center;
          }

          .menu-drop-down__chevron {
            width: ${theme.spacing.md};
            fill: ${theme.backgroundColors.backgroundColor10};
            display: block;
            transition-duration: 0.2s;
            position: relative;
            pointer-events: none;
            top: 0;
            right: ${theme.spacing.md};
            line-height: 0;
          }

          .menu-drop-down__chevron.is-active {
            transform: rotate(180deg);
          }

          .menu-drop-down__icon {
            display: flex;
            padding-left: ${theme.spacing.md};
            padding-right: ${theme.spacing.sm};
          }

          .menu-drop-down__icon .icon {
            fill: ${theme.palette.neutral.grey4};
          }

          .is-hidden {
            padding-left: ${theme.spacing.md};
          }

          .menu-drop-down__text {
            font-size: ${theme.fontSizes.xl};
            vertical-align: top;
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .menu-drop-down {
              padding: 0;
              margin: 0;
              position: relative;
            }

            .menu-drop-down__item {
              color: ${theme.fontColors.fontColor4};
              padding: 0;
              margin: 0;
              font-size: ${theme.fontSizes.lg};
            }

            .menu-drop-down__button {
              padding: 0 0 ${theme.spacing.xs} 0;
              color: ${theme.linkColors.linkColor2};
            }

            .menu-drop-down__button:hover {
              border-bottom: 4px solid ${theme.borderColors.borderColor5};
              padding-bottom: calc(${theme.spacing.xs} - 4px);
              border-left: none;
            }

            .menu-drop-down__button:hover > div > .menu-drop-down__icon,
            .menu-drop-down__button:hover > div > .is-hidden {
              padding-left: 0;
            }

            .menu-drop-down__button:focus {
              overflow: hidden;
            }

            .menu-drop-down__chevron {
              fill: ${theme.backgroundColors.backgroundColor9};
              width: ${theme.spacing.xs};
              display: block;
              top: 0;
              right: 0;
              line-height: 0;
            }

            .menu-drop-down__chevron .chevron {
              width: ${theme.spacing.xs};
              height: ${theme.spacing.xs};
            }

            .menu-drop-down__icon {
              display: none;
            }

            .is-hidden {
              padding-left: 0;
            }

            .menu-drop-down__text {
              font-size: ${theme.fontSizes.md};
              padding-right: 5px;
              display: block;
            }
          }

          @media all and (-ms-high-contrast: none),
            (-ms-high-contrast: active) {
            .menu-drop-down__chevron,
            .menu-drop-down__icon {
              height: 25px;
            }
          }
        `}
      </JSXStyle>
    </ul>
  );
};

export { PrimaryMenuDropDown };
export type { Props };
