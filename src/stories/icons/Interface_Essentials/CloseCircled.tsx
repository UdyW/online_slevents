import React from 'react';
import { withSvgBase } from '../SvgBase';

const CloseCircledPath = () => (
  <path d="M20.62 8.44c.25 0 .49.1.66.28.18.18.27.41.27.66s-.1.49-.27.66L16.33 15l4.96 4.96c.36.36.36.96 0 1.33-.18.18-.41.27-.66.27s-.49-.1-.66-.28L15 16.33l-4.96 4.96c-.18.18-.41.28-.66.28s-.49-.1-.66-.28a.954.954 0 010-1.33L13.67 15l-4.96-4.96c-.17-.18-.27-.42-.27-.66s.1-.49.27-.66c.18-.18.41-.28.66-.28s.49.1.66.28L15 13.67l4.96-4.96a.93.93 0 01.66-.27zM15 1.88C7.76 1.88 1.88 7.76 1.88 15S7.76 28.12 15 28.12 28.12 22.24 28.12 15 22.24 1.88 15 1.88zM15 0c8.27 0 15 6.73 15 15s-6.73 15-15 15S0 23.27 0 15 6.73 0 15 0z" />
);

const CloseCircled = withSvgBase(CloseCircledPath);

export { CloseCircled };
