import React from 'react';
import { withSvgBase } from '../SvgBase';

const MessageBubblePath = () => (
  <path d="M.94 30c-.25 0-.49-.1-.66-.28a.932.932 0 01-.18-1.06l3.64-7.64a13.95 13.95 0 01-1.85-6.99C1.89 6.29 8.18 0 15.91 0h.04c2.62 0 5.19.73 7.42 2.12 3.18 1.98 5.41 5.09 6.26 8.75s.23 7.43-1.74 10.62a13.955 13.955 0 01-8.74 6.27 13.972 13.972 0 01-10.17-1.49l-7.63 3.64c-.14.06-.27.09-.41.09zM15.91 1.88c-6.69 0-12.15 5.45-12.16 12.15 0 2.28.63 4.51 1.84 6.45.17.27.19.61.05.9l-2.72 5.71 5.7-2.72a.931.931 0 01.89.05c1.94 1.21 4.15 1.84 6.41 1.84.93 0 1.87-.11 2.79-.32 3.17-.74 5.86-2.67 7.58-5.43 3.55-5.71 1.79-13.24-3.91-16.78-1.93-1.2-4.16-1.84-6.43-1.84h-.04z" />
);

const MessageBubble = withSvgBase(MessageBubblePath);

export { MessageBubble };
