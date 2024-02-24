import React from 'react';
import { withSvgBase } from '../SvgBase';

const ArrowRightPath = () => (
  <path d="M7.5.28c-.37.37-.37.96 0 1.32L20.9 15 7.5 28.4c-.37.37-.37.96 0 1.32.18.18.41.27.64.28h.04c.23-.01.47-.1.64-.28l13.4-13.4c.35-.35.55-.83.55-1.33s-.2-.97-.55-1.32L8.83.28A.94.94 0 008.16 0a.9.9 0 00-.66.28z" />
);

const ArrowRight = withSvgBase(ArrowRightPath);

export { ArrowRight };
