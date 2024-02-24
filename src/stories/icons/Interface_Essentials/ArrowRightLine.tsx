import React from 'react';
import { withSvgBase } from '../SvgBase';

const ArrowRightLinePath = () => (
  <path d="M3.56.58a.93.93 0 000 1.31l13.26 13.26L3.56 28.42a.93.93 0 000 1.31c.36.36.95.36 1.31 0l13.26-13.26c.35-.35.54-.82.54-1.31 0-.49-.19-.97-.54-1.31L4.87.58a.93.93 0 00-1.31 0zm21.3.35v27.83c0 .51.42.93.93.93s.93-.41.93-.93V.93c0-.51-.42-.93-.93-.93s-.93.42-.93.93z" />
);

const ArrowRightLine = withSvgBase(ArrowRightLinePath);

export { ArrowRightLine };
