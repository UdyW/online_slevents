import React from 'react';
import { withSvgBase } from '../SvgBase';

const ArrowLeft2Path = () => (
  <path d="M14.3 1.22c.34.34.34.9 0 1.24L1.76 15 14.3 27.54c.34.34.34.9 0 1.24-.34.34-.9.34-1.24 0L.51 16.24C.19 15.91 0 15.47 0 15s.19-.91.51-1.24L13.06 1.22c.34-.35.9-.35 1.24 0zm15.44 0c.34.34.34.9 0 1.24L17.2 15l12.54 12.54c.34.34.34.9 0 1.24-.34.34-.9.34-1.24 0L15.96 16.24c-.33-.33-.51-.78-.51-1.24 0-.47.19-.91.51-1.24L28.5 1.22c.34-.35.9-.35 1.24 0z" />
);

const ArrowLeft2 = withSvgBase(ArrowLeft2Path);

export { ArrowLeft2 };
