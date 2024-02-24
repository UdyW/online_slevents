import React from 'react';
import { withSvgBase } from '../SvgBase';

const ArrowLeftLinePath = () => (
  <path d="M4.21 0c.51 0 .93.42.93.93v27.84c0 .51-.42.93-.93.93s-.93-.42-.93-.93V.93c0-.51.42-.93.93-.93zm22.23.58c.36.36.36.95 0 1.31L13.18 15.15l13.26 13.26c.36.36.36.95 0 1.31a.93.93 0 01-1.31 0L11.87 16.47c-.35-.35-.54-.82-.54-1.31s.2-.96.54-1.31L25.13.58a.93.93 0 011.31 0z" />
);

const ArrowLeftLine = withSvgBase(ArrowLeftLinePath);

export { ArrowLeftLine };
