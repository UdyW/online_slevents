import React from 'react';
import { withSvgBase } from '../SvgBase';

const PreviousSupplierPath = () => (
  <path d="M18.74.48c8.02 2.07 12.84 10.25 10.77 18.27-2.07 8.02-10.25 12.84-18.27 10.77-.58-.15-.92-.74-.77-1.31.15-.58.74-.92 1.31-.77 6.87 1.77 13.87-2.36 15.64-9.23 1.77-6.87-2.36-13.87-9.23-15.64C11.8.91 5.28 4.4 2.99 10.44h6.79c.6 0 1.08.48 1.08 1.08s-.48 1.08-1.08 1.08h-8.7C.49 12.6 0 12.12 0 11.52V1.08C0 .48.48 0 1.08 0s1.08.48 1.08 1.08v6.16C5.49 1.72 12.17-1.22 18.74.48z" />
);

const PreviousSupplier = withSvgBase(PreviousSupplierPath);

export { PreviousSupplier };
