import React from 'react';
import { useThemeFallback } from '../../theming';
import JSXStyle from 'styled-jsx/style';
import { PrimaryMenuItem } from './PrimaryMenuItem';
import {
  KeyboardEventCallback,
  MenuItem,
  MenuRouteProps,
  MouseEventCallback,
} from '../types';

type Props = {
  primaryMenu: Array<MenuItem>;
  handlePrimaryMenuToggle: MouseEventCallback;
  handlePrimaryMenuKeypress: KeyboardEventCallback;
} & MenuRouteProps;

const PrimaryMenu: React.FC<Props> = ({
  primaryMenu,
  route,
  currentTab,
  handlePrimaryMenuToggle,
  handlePrimaryMenuKeypress,
  handleSidebarToggle,
  isMenuOpen,
  getIsActiveRoute,
}: Props) => {
  const theme = useThemeFallback();

  return (
    <ul className="primary-menu" role="navigation">
      {primaryMenu.map((item, key) => (
        <PrimaryMenuItem
          key={key}
          item={item}
          route={route}
          isMenuOpen={isMenuOpen}
          getIsActiveRoute={getIsActiveRoute}
          currentTab={currentTab}
          handleSidebarToggle={handleSidebarToggle}
          handlePrimaryMenuToggle={handlePrimaryMenuToggle}
          handlePrimaryMenuKeypress={handlePrimaryMenuKeypress}
        />
      ))}

      <JSXStyle id="primary-menu__style">
        {`
          .primary-menu {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .primary-menu {
              flex-direction: row;
              align-items: stretch;
            }
          }
        `}
      </JSXStyle>
    </ul>
  );
};

export { PrimaryMenu };
export type { Props };
