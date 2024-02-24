import React from 'react';
import { withSvgBase } from '../SvgBase';

const BarGraphPath = () => (
  <path d="M7.5 26.25V15H3.75v11.25H7.5zm9.38 0V3.75h-3.75v22.5h3.75zm9.37 0V9.38H22.5v16.88h3.75zM.94 28.12c-.52 0-.94-.42-.94-.93s.42-.94.94-.94h.94V15c0-1.03.84-1.88 1.88-1.88H7.5c1.03 0 1.88.84 1.88 1.88v11.25h1.88V3.75c0-1.03.84-1.88 1.88-1.88h3.75c1.03 0 1.88.84 1.88 1.88v22.5h1.88V9.38c0-1.03.84-1.88 1.88-1.88h3.75c1.03 0 1.88.84 1.88 1.88v16.88h.94a.939.939 0 110 1.88H.94z" />
);

const BarGraph = withSvgBase(BarGraphPath);

export { BarGraph };
