import React from 'react';
import { withSvgBase } from '../SvgBase';

const TickCircledSolidPath = () => (
  <path d="M15 30c8.28 0 15-6.72 15-15S23.28 0 15 0 0 6.72 0 15s6.72 15 15 15zm-3.34-6.56c-.15 0-.29-.02-.44-.04-.59-.12-1.1-.46-1.43-.96l-3.05-4.33c-.3-.42-.2-1.01.23-1.31.16-.11.34-.17.54-.17.3 0 .59.15.77.4l3.06 4.35c.07.1.15.16.25.18.02.01.05.01.07.01.07 0 .14-.02.21-.06.04-.02.07-.05.09-.09L21.77 9a.928.928 0 011.31-.16.949.949 0 01.16 1.32l-9.8 12.4c-.14.19-.32.35-.53.49-.38.26-.81.39-1.25.39z" />
);

const TickCircledSolid = withSvgBase(TickCircledSolidPath);

export { TickCircledSolid };
