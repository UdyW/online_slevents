import React from 'react';
import { withSvgBase } from '../SvgBase';

const SendMessagePath = () => (
  <path d="M26.13 14.02L3.35 2.44a.998.998 0 00-.42-.1c-.17 0-.33.04-.48.12-.47.27-.64.86-.38 1.33l6.27 10.23h17.79zM2.05 26.24c-.14.25-.14.59 0 .87.17.34.5.54.88.54.15 0 .29-.03.43-.1l22.78-11.59H8.34L2.05 26.24zm.88 3.36c-.32 0-.64-.05-.94-.16-.74-.25-1.34-.78-1.68-1.48-.43-.86-.4-1.88.07-2.72l6.28-10.26L.38 4.74C-.01 4.06-.1 3.28.11 2.52.33 1.77.82 1.15 1.5.77 1.93.52 2.43.4 2.92.4c.45 0 .89.1 1.29.3l24.72 12.56c.6.31 1 .91 1.05 1.59.01.05.01.1.01.15 0 .03 0 .06-.01.1-.01.26-.08.54-.2.79-.19.37-.48.66-.85.85L4.23 29.3c-.42.2-.85.3-1.3.3z" />
);

const SendMessage = withSvgBase(SendMessagePath);

export { SendMessage };
