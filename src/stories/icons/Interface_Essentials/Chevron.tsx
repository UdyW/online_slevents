import React from 'react';
import { withSvgBase } from '../SvgBase';

const ChevronPath = () => (
  <path d="M15 22.77c-.5 0-.97-.2-1.32-.55L.27 8.83A.98.98 0 010 8.16c0-.25.1-.48.27-.66.18-.18.41-.28.66-.28s.49.1.67.28L15 20.9 28.4 7.5c.18-.18.41-.28.66-.28s.49.1.66.28c.18.18.28.41.28.66s-.1.49-.27.66l-13.4 13.4c-.36.36-.83.55-1.33.55z" />
);

const Chevron = withSvgBase(ChevronPath);

export { Chevron };
