import React from 'react';
import { useThemeFallback } from '../../theming';
import { ExternalLink } from '../../icons';
import JSXStyle from 'styled-jsx/style';
import { MenuItemFeatured } from '../types';

type Props = MenuItemFeatured;

const FeaturedMenuItem: React.FC<Props> = ({
  introText,
  url,
  linkLabel,
  opensInNewTab = false,
}: Props) => {
  const theme = useThemeFallback();

  return (
    <>
      <div className="featured-menu-item">
        {/* <hr className="featured-menu-item__divider" /> */}
        <p>{introText}</p>
        <a
          href={url}
          target={opensInNewTab ? '_blank' : '_self'}
          rel="noreferrer"
          aria-label={
            opensInNewTab
              ? 'This link opens in a new tab'
              : 'Follow this link for more information'
          }
          className={`featured-menu-item__link 
            ${opensInNewTab ? 'is-external-link' : ''}`}
        >
          <strong>{linkLabel}</strong>

          {opensInNewTab && (
            <ExternalLink
              height={theme.spacing.md}
              width={theme.spacing.md}
              className="external-link"
            />
          )}
        </a>
      </div>

      <JSXStyle id="featured-menu-item__style">
        {`
          .featured-menu-item {
            margin: 0 ${theme.spacing.md};
          }

          .featured-menu-item__divider {
            border: none;
            border-bottom: 1px solid ${theme.borderColors.borderColor6};
          }

          .featured-menu-item__link {
            color: ${theme.palette.primary.primary1};
            border: 2px solid ${theme.borderColors.borderColor8};
            font-size: ${theme.fontSizes.md};
            font-weight: bold;
            padding: ${theme.spacing.sm} ${theme.spacing.md};
          }

          .is-external-link .external-link {
            margin-left: ${theme.spacing.xs};
          }
        `}
      </JSXStyle>
    </>
  );
};

export { FeaturedMenuItem, Props };
