import React from 'react';
import { withSvgBase } from '../SvgBase';

const LoadingAnimationRightPath = () => (
  <>
    <rect
      x="0.352905"
      y="6.4707"
      width="2.94118"
      height="7.05882"
      fill="#404040"
    />
    <rect
      x="6.82349"
      y="3.5293"
      width="2.94118"
      height="13.5294"
      fill="#404040"
    />
    <rect x="13.2941" width="2.94118" height="20" fill="#404040" />
  </>
);

const LoadingAnimationRight = withSvgBase(
  LoadingAnimationRightPath,
  '0, 0, 17, 20',
);

export { LoadingAnimationRight };
