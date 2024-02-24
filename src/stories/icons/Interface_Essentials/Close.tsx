import React from 'react';
import { withSvgBase } from '../SvgBase';

const ClosePath = () => (
  <path d="M29.06 30c-.25 0-.49-.1-.66-.27L15 16.33 1.6 29.73a.938.938 0 01-1.32 0 .936.936 0 010-1.33L13.68 15 .28 1.6C.1 1.42 0 1.19 0 .94S.1.45.28.28C.45.1.69 0 .94 0s.48.1.66.28L15 13.67 28.4.27c.18-.17.41-.27.66-.27s.49.1.66.28c.18.17.28.41.28.66s-.1.49-.27.66L16.33 15l13.4 13.4c.36.36.36.96 0 1.33a.98.98 0 01-.67.27z" />
);

const Close = withSvgBase(ClosePath);

export { Close };
