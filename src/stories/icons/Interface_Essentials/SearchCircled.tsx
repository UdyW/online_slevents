import React from 'react';
import { withSvgBase } from '../SvgBase';

const SearchCircledPath = () => (
  <path d="M13.91 9.38c-2.5 0-4.53 2.03-4.53 4.53s2.03 4.53 4.53 4.53c2.5 0 4.53-2.03 4.53-4.53s-2.04-4.53-4.53-4.53zm0-1.88c3.53 0 6.41 2.87 6.41 6.41 0 1.37-.45 2.71-1.27 3.81l3.18 3.18c.18.18.27.41.27.66 0 .25-.1.49-.27.66-.18.18-.41.27-.66.27s-.49-.1-.66-.27l-3.18-3.18c-1.1.82-2.44 1.27-3.82 1.27-3.53 0-6.41-2.87-6.41-6.41s2.87-6.4 6.41-6.4zM15 1.88C7.76 1.88 1.88 7.76 1.88 15S7.76 28.12 15 28.12 28.12 22.24 28.12 15 22.24 1.88 15 1.88zM15 0c8.27 0 15 6.73 15 15s-6.73 15-15 15S0 23.27 0 15 6.73 0 15 0z" />
);

const SearchCircled = withSvgBase(SearchCircledPath);

export { SearchCircled };
