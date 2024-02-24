import React from 'react';
import { withSvgBase } from '../SvgBase';

const PlusPath = () => (
  <path d="M15 30c-.52 0-.94-.42-.94-.94V15.94H.94a.939.939 0 110-1.88h13.12V.94a.939.939 0 111.88 0v13.12h13.12a.939.939 0 110 1.88H15.94v13.12c0 .52-.42.94-.94.94z" />
);

const Plus = withSvgBase(PlusPath);

export { Plus };
