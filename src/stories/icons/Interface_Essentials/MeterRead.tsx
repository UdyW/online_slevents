import React from 'react';
import { withSvgBase } from '../SvgBase';

const MeterReadPath = () => (
  <path d="M15.94 6.56a.939.939 0 110 1.88H6.56a.939.939 0 110-1.88h9.38zm0 3.75a.939.939 0 110 1.88H6.56a.939.939 0 110-1.88h9.38zm-4.69 3.75a.939.939 0 110 1.88H6.56a.939.939 0 110-1.88h4.69zM27.19.94C28.74.94 30 2.2 30 3.75v15a.939.939 0 11-1.88 0v-15c0-.52-.42-.94-.94-.94h-2.81v10.31a.939.939 0 11-1.88 0V2.81H2.81c-.52 0-.94.42-.94.94v16.88c0 .52.42.94.94.94h6.57a.939.939 0 110 1.88H2.81A2.827 2.827 0 010 20.63V3.75C0 2.2 1.26.94 2.81.94h24.38zm-8.44 12.19c1.55 0 2.81 1.26 2.81 2.81v2.96l1.71.28a4.69 4.69 0 013.92 4.62v4.32a.939.939 0 11-1.88 0V23.8c0-1.38-.99-2.55-2.35-2.77l-2.49-.41a.944.944 0 01-.78-.93v-3.75a.939.939 0 10-1.88 0v6.56c0 .7-.73 1.15-1.36.84l-1.48-.73c-.3-.15-.65-.16-.96-.02-.31.14-.53.41-.61.74-.1.42.05.87.39 1.14l3.66 2.93c.4.32.47.91.15 1.32-.32.41-.91.47-1.32.15l-3.66-2.93a2.983 2.983 0 01.61-5.05c.82-.38 1.77-.36 2.58.04l.12.06v-5.05a2.821 2.821 0 012.82-2.81z" />
);

const MeterRead = withSvgBase(MeterReadPath);

export { MeterRead };