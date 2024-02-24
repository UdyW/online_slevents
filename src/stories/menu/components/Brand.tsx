import React from 'react';
import { useThemeFallback } from '../../theming';
import JSXStyle from 'styled-jsx/style';
import { SleventsLogo } from '../img/slevents-logo';
import { BrandLogo } from '../types';

type Props = {
  homeUrl?: string;
};

const Brand: React.FC<Props> = ({ homeUrl = '/' }: Props) => {
  const theme = useThemeFallback();

  // const Logo = logo;

  return (
    <div className="brand-wrapper">
      <span className="brand-wrapper__logo">
        <a
          className="brand-wrapper__link"
          href={homeUrl}
          aria-label="Go to homepage"
        >
          <SleventsLogo />
        </a>
      </span>
      <JSXStyle id="brand-wrapper__style">
        {`
          .brand-wrapper {
            display: flex;
            flex-grow: 1;
            width: 150px;
          }

          .brand-wrapper__link {
            display: block;
          }

          .brand-wrapper__logo {
            width: 142.15px;
            height: 35px;
          }

          @media all and (-ms-high-contrast: none),
            (-ms-high-contrast: active) {
            .brand-wrapper__logo {
              margin-top: -50px;
              margin-bottom: 60px;
            }
          }
                   
          @media (min-width: ${theme.breakpoints.xl}) {
            .brand-wrapper__logo {
              width: 180px;
              height: 50px;
            }
          }

          @media (min-width: 1120px) {
            .brand-wrapper__logo {
              width: 223.34px;
              height: 55px;
            }
          }
        `}
      </JSXStyle>
    </div>
  );
};

export { Brand };
export type { Props };
