import React from 'react';
import { withSvgBase } from '../SvgBase';

const ViewOffPath = () => (
  <path d="M14.99 10.5c.25 0 .45.2.45.45v.9c0 .12-.05.23-.13.32s-.2.13-.32.13c-.96 0-1.86.38-2.55 1.06-.68.68-1.05 1.58-1.05 2.54a.9.9 0 01-.26.64.9.9 0 01-.64.26c-.5 0-.9-.4-.9-.9 0-1.44.56-2.79 1.58-3.82.96-.96 2.21-1.51 3.55-1.58h.27zm-.16-3.6h.28c1.02 0 2.02.12 3 .37.48.12.78.61.66 1.09-.1.4-.46.68-.87.68-.07 0-.15-.01-.22-.03-.83-.21-1.69-.31-2.55-.31h-.27c-4.64 0-9.33 3.34-12.17 6.47-.37.42-.37 1.05 0 1.46.92 1 1.93 1.94 3 2.77.19.15.31.36.34.6s-.03.47-.18.66c-.17.22-.43.34-.71.34-.2 0-.39-.07-.55-.19-1.16-.9-2.24-1.9-3.23-2.98-1-1.11-1-2.78 0-3.88 3.09-3.4 8.26-7.05 13.47-7.05zM19.5 15c.5 0 .9.4.9.9 0 1.44-.56 2.8-1.58 3.82A5.37 5.37 0 0115 21.3c-.25 0-.45-.2-.45-.45v-.9c0-.12.05-.23.13-.32s.2-.13.32-.13a3.585 3.585 0 003.6-3.6c0-.5.4-.9.9-.9zm4.8-4.64c.19 0 .37.06.53.17 1.38 1.01 2.67 2.16 3.82 3.43 1 1.11 1 2.77 0 3.88-3.1 3.42-8.27 7.06-13.48 7.06h-.32c-1.26 0-2.52-.2-3.76-.58a.903.903 0 01-.59-1.13c.12-.38.46-.63.86-.63.09 0 .18.01.27.04 1.07.33 2.16.5 3.25.5h.3c4.62 0 9.31-3.34 12.15-6.47.37-.42.37-1.05 0-1.46a23.319 23.319 0 00-3.55-3.18.918.918 0 01-.36-.59c-.04-.24.02-.48.16-.67.16-.23.43-.37.72-.37zm2.14-7.06c.24 0 .48.1.65.28.17.17.26.4.25.64-.01.24-.1.46-.28.63l-22.5 21.6c-.17.16-.39.25-.62.25-.24 0-.48-.1-.65-.28a.851.851 0 01-.25-.64c.01-.24.1-.46.28-.63l22.5-21.6c.16-.16.38-.25.62-.25z" />
);

const ViewOff = withSvgBase(ViewOffPath);

export { ViewOff };