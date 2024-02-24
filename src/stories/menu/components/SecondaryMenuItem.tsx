import React from 'react';
import { useThemeFallback } from '../../theming';
import { ExternalLink } from '../../icons';
import JSXStyle from 'styled-jsx/style';
import { MenuItemSecondary, MouseEventCallback } from '../types';

type Props = {
  item: MenuItemSecondary;
  isMenuOpen?: boolean;
  handleSidebarToggle?: MouseEventCallback;
};

const SecondaryMenuItem: React.FC<Props> = ({
  item: {
    name,
    url,
    customClassName,
    opensInNewTab = false,
    hasDivider = false,
    showInSidebar = true,
    secondaryMenuIcon,
    isPrefixIcon,
    onClick,
  },
  isMenuOpen,
  handleSidebarToggle,
}: Props) => {
  const theme = useThemeFallback();

  const classes = `secondary-menu-item
    ${!showInSidebar ? 'secondary-menu-item--hide-in-sidebar' : ''}
    ${hasDivider ? 'has-divider' : ''} 
    ${customClassName}`;

  return (
    <>
      <li className={classes}>
        <a
          href={url}
          target={opensInNewTab ? '_blank' : '_self'}
          rel="noreferrer"
          className={`secondary-menu-item__link ${
            opensInNewTab ? 'is-external-link' : ''
          }`}
          {...(onClick && {
            onClick: (e) => {
              if (isMenuOpen && handleSidebarToggle) {
                handleSidebarToggle(e);
              }

              onClick(e, url);
            },
          })}
        >
          {isPrefixIcon && secondaryMenuIcon}
          <span>{name}</span>
          {!isPrefixIcon && secondaryMenuIcon}
          {opensInNewTab && <ExternalLink className="external-link" />}
        </a>
      </li>
      <JSXStyle id="secondary-menu-item__style">
        {`
          .secondary-menu-item {
            display: flex;
          }

          .secondary-menu-item__link {
            font-size: ${theme.fontSizes.md};
            color: ${theme.fontColors.fontColor5};
            margin-right: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: ${theme.spacing.xs} ${theme.spacing.md};
          }
          
          .secondary-menu-item__link svg:first-child {
            display: none;
          }

          .is-external-link .external-link {
            width: ${theme.spacing.md};
            height: ${theme.spacing.md};
          }

          .secondary-menu-item--hide-in-sidebar {
            display: none;
          }

          @media (min-width: ${theme.breakpoints.xl}) {
          
            .has-divider {
              border-right: 2px solid ${theme.borderColors.borderColor1};
              margin-right: ${theme.spacing.sm};
            }
            
            .secondary-menu-item {
              padding-right: 0;
            }

            .secondary-menu-item__link {
              font-size: ${theme.fontSizes.sm};
              color: ${theme.linkColors.linkColor2};
              margin-right: ${theme.spacing.sm};
              padding: 0 0 4px 0;
            }

            .is-external-link {
              align-items: center;
            }

            .is-external-link .external-link {
              margin-left: ${theme.spacing.xs};
            }
            
            .secondary-menu-item__link svg:first-child {
              display: block;
            }

            .secondary-menu-item__link:hover {
              border-bottom: 4px solid ${theme.borderColors.borderColor5};
              margin-bottom: -4px;
            }

            .secondary-menu-item--hide-in-sidebar {
              display: inherit;
            }
          }
        `}
      </JSXStyle>
    </>
  );
};

export { SecondaryMenuItem, Props };
