import React from 'react';
import { withSvgBase } from '../SvgBase';

const ArrowLeftPath = () => (
  <path d="M22.5 28.4c.37.37.37.96 0 1.32-.37.37-.96.37-1.33 0l-13.4-13.4c-.35-.35-.54-.82-.54-1.32s.2-.97.55-1.32L21.18.28c.37-.37.96-.37 1.33 0 .37.37.37.96 0 1.32L9.1 15l13.4 13.4z" />
);

const ArrowLeft = withSvgBase(ArrowLeftPath);

export { ArrowLeft };
