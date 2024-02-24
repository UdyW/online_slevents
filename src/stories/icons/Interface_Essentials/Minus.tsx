import React from 'react';
import { withSvgBase } from '../SvgBase';

const MinusPath = () => (
  <path d="M.94 15.94a.939.939 0 110-1.88h28.12a.939.939 0 110 1.88H.94z" />
);

const Minus = withSvgBase(MinusPath);

export { Minus };
