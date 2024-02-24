import React from 'react';
import { useThemeFallback } from '../../theming';
import JSXStyle from 'styled-jsx/style';
import { SecondaryMenuItem } from './SecondaryMenuItem';
import { MenuItemSecondary, MouseEventCallback } from '../types';

type Props = {
  secondaryMenu: Array<MenuItemSecondary>;
  isMenuOpen?: boolean;
  handleSidebarToggle?: MouseEventCallback;
  isSidebar?: boolean;
};

const SecondaryMenu: React.FC<Props> = ({
  secondaryMenu,
  isMenuOpen,
  handleSidebarToggle,
  isSidebar,
}: Props) => {
  const theme = useThemeFallback();

  return (
    <ul
      className={`secondary-menu ${
        isSidebar ? 'secondary-menu-sidebar' : 'secondary-menu-main'
      }`}
    >
      {secondaryMenu &&
        secondaryMenu.map((item, key) => (
          <SecondaryMenuItem
            key={key}
            item={item}
            isMenuOpen={isMenuOpen}
            handleSidebarToggle={handleSidebarToggle}
          />
        ))}
      <JSXStyle id="secondary-menu__style">
        {`
          .secondary-menu {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .secondary-menu {
              flex-direction: row;
              align-items: center;
              border-right: 2px solid ${theme.borderColors.borderColor1};
              margin-right: ${theme.spacing.md};
            }
          }
        `}
      </JSXStyle>
    </ul>
  );
};

export { SecondaryMenu, Props };
