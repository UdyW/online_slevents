import React from 'react';
import { withSvgBase } from '../SvgBase';

const LoadingStaticPath = () => (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M0.333344 0H3.00001V20H0.333344V0ZM5.66668 3.33333H8.33334V16.6667H5.66668V3.33333ZM11 6.66667H13.6667V13.3333H11V6.66667Z"
    fill="#404040"
  />
);

const LoadingStatic = withSvgBase(LoadingStaticPath, '0, 0, 14, 20');

export { LoadingStatic };
