import React from 'react';
import { withSvgBase } from '../SvgBase';

const DeletePath = () => (
  <path d="M18.07 3.75c.56 0 1.02.46 1.02 1.02V5.8h-8.18V4.77c0-.56.46-1.02 1.02-1.02h6.14zm0 8.18c.56 0 1.02.46 1.02 1.02v8.18c0 .56-.46 1.02-1.02 1.02s-1.02-.46-1.02-1.02v-8.18c0-.56.45-1.02 1.02-1.02zm-6.14 0c.56 0 1.02.46 1.02 1.02v8.18c0 .56-.46 1.02-1.02 1.02s-1.02-.46-1.02-1.02v-8.18c0-.56.46-1.02 1.02-1.02zm-5.11 13.3c0 .56.46 1.02 1.02 1.02h14.32c.56 0 1.02-.46 1.02-1.02V7.84H6.82v17.39zm1.02 3.07c-1.69 0-3.07-1.38-3.07-3.07V7.84H1.7c-.56 0-1.02-.46-1.02-1.02S1.14 5.8 1.7 5.8h7.16V4.77c0-1.69 1.38-3.07 3.07-3.07h6.14c1.69 0 3.07 1.38 3.07 3.07V5.8h7.16c.56 0 1.02.46 1.02 1.02s-.46 1.02-1.02 1.02h-3.07v17.39c0 1.69-1.38 3.07-3.07 3.07H7.84z" />
);

const Delete = withSvgBase(DeletePath);

export { Delete };
