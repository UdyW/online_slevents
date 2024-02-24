import React from 'react';
import { withSvgBase } from '../SvgBase';

const LoadingAnimationMiddlePath = () => (
  <>
    <rect
      x="0.352905"
      y="3.5293"
      width="2.94118"
      height="13.5294"
      fill="#404040"
    />
    <rect x="6.82349" width="2.94118" height="20" fill="#404040" />
    <rect
      x="13.2941"
      y="3.5293"
      width="2.94118"
      height="13.5294"
      fill="#404040"
    />
  </>
);

const LoadingAnimationMiddle = withSvgBase(
  LoadingAnimationMiddlePath,
  '0, 0, 17, 20',
);

export { LoadingAnimationMiddle };
