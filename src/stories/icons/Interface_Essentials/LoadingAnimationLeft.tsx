import React from 'react';
import { withSvgBase } from '../SvgBase';

const LoadingAnimationLeftPath = () => (
  <>
    <rect x="0.764648" width="2.94118" height="20" fill="#404040" />
    <rect
      x="7.23523"
      y="3.5293"
      width="2.94118"
      height="13.5294"
      fill="#404040"
    />
    <rect
      x="13.7058"
      y="6.4707"
      width="2.94118"
      height="7.05882"
      fill="#404040"
    />
  </>
);

const LoadingAnimationLeft = withSvgBase(
  LoadingAnimationLeftPath,
  '0, 0, 17, 20',
);

export { LoadingAnimationLeft };
